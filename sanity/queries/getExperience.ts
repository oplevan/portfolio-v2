import { groq } from 'next-sanity';
import { client } from '../lib/client';
import { Experience } from '../types/Experience';

export async function getExperience(): Promise<Experience[]> {
  return client.fetch(
    groq`*[_type == "experience"] | order(employmentStartDate desc){
      _id,
			jobTitle,
			employmentType,
			location,
			employmentStartDate,
			employmentEndDate,
			companyName,
			companyWebsite,
			description,
    }`
  );
}
