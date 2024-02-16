import { groq } from 'next-sanity';
import { client } from '../lib/client';
import { ProjectBrief, ProjectDetailed } from '../types/Project';

export async function getProject(slug: string): Promise<ProjectDetailed> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
			featured,
			name,
			'slug': slug.current,
			projectType,
			completionDate,
			techStack[]->{
				name, 
				'icon': icon.asset->url
			},
			links,
			'images':{
				'preview': images.preview.asset->url,
				'mockup': images.mockup.asset->url,
				'gallery': images.gallery[].asset->url,
			},
			description,
			developmentProcess,
    }`,
    { slug }
  );
}

export async function getProjects(featured?: 'featured'): Promise<ProjectBrief[]> {
  let query;
  const queryProps = `
		_id,
		name,
		'slug': slug.current,
		techStack[]->{
			name, 
		},
		links,
		'previewImage': images.preview.asset->url,
		'introDescription': description.intro,
	`;

  if (featured && featured === 'featured') {
    query = groq`*[_type == "project" && featured == true]{${queryProps} }`;
  } else {
    query = groq`*[_type == "project"]{${queryProps} }`;
  }
  return client.fetch(query);
}
