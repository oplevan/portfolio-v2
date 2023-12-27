import { groq } from 'next-sanity';
import { client } from '../lib/client';

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
			introLine,
      fullName,
      headline,
      shortBio,
			fullBio,
      profilePicture { alt, "image": asset->url },
			socials[]->,
			email,
			'CV': cv.asset->url,
    }`
  );
}
