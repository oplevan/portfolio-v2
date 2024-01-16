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

export async function getAllProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
			name,
			'slug': slug.current,
			techStack[]->{
				name, 
			},
			links,
			'previewImage': images.preview.asset->url,
			'introDescription': description.intro,
    }`
  );
}

export async function getFeaturedProjects() {
  return client.fetch(
    groq`*[_type == "project" && featured == true]{
      _id,
			name,
			'slug': slug.current,
			techStack[]->{
				name, 
			},
			links,
			'previewImage': images.preview.asset->url,
			'introDescription': description.intro,
    }`
  );
}
