import { groq } from 'next-sanity';
import { client } from '../lib/client';
import { Profile } from '../types/Profile';

export async function getProfileInfo(props?: string[]): Promise<Profile> {
  let query;

  // Fetch only specified items
  if (props && props.length > 0) {
    const propertyString = props.join(', ');

    // Check if "socials" or "resume" is in the list of properties
    if (props.includes('socials') || props.includes('resume')) {
      // Fetch "socials" and "resume" with the special syntax
      query = groq`*[_type == "profile"][0]{ ${propertyString.replace('socials', 'socials[]->').replace('resume', "'resume': cv.asset->url")} }`;
    } else {
      // Fetch other properties as usual
      query = groq`*[_type == "profile"][0]{ ${propertyString} }`;
    }
  } else {
    // Fetch all
    query = groq`*[_type == "profile"][0]{
      _id,
      introLine,
      fullName,
      headline,
      shortBio,
      fullBio,
      profilePicture { alt, "image": asset->url },
      socials[]->,
      email,
      'resume': cv.asset->url,
    }`;
  }

  return client.fetch(query);
}
