import { groq } from 'next-sanity';
import { client } from '../lib/client';

export async function getSiteLogo() {
  return client.fetch(
    groq`*[_type == 'siteLogo']{
			_id,
			image {"src": asset->url},
		}`
  );
}
