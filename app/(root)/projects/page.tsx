import React from 'react';
import SingleProject from '@/components/Project/Single/Single';
import { getProjects } from '@/sanity/queries/getProjects';
import ProjectCard from '@/components/project-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Oleg Plevan - Software Developer',
  description: "I'm a dedicated software developer with a strong skill set honed through years of hands-on experience.",
};

export default async function ProjectList() {
  const projects = await getProjects();
  return (
    <main>
      <section className='min-h-screen md:max-w-6xl pt-32 md:pt-40'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
          {projects.map(({ _id, slug, name, techStack, links, previewImage, introDescription }, index) => (
            <ProjectCard
              key={_id}
              name={name}
              slug={slug}
              techStack={techStack}
              links={links}
              previewImage={previewImage}
              introDescription={introDescription}
              animationDelay={index % 3 === 0 ? 0.1 : index % 3 === 1 ? 0.3 : 0.5}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
