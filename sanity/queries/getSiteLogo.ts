import { groq } from 'next-sanity';
import { client } from '../lib/client';

interface SiteLogo {
  _id: string;
  src: string;
}

export async function getSiteLogo(): Promise<SiteLogo> {
  return client.fetch(
    groq`*[_type == 'siteLogo'][0]{
			_id,
			"src": image.asset->url,
		}`
  );
}
