import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

import Button from '@/components/Button/Button';
import SingleProject from '@/components/Project/Single/Single';

import { getProjects } from '@/sanity/queries/getProjects';

export default async function ProjectList() {
  const projects = await getProjects();
  return (
    <main>
      <section className='min-h-screen md:max-w-7xl relative'>
        <div className='hidden md:block fixed left-[38px] top-32 lg:top-36 lg:left-[78px]'>
          <Button as='link' href='/' variant='icon-round' icon={<IoArrowBackSharp className='w-5 h-5' />} />
        </div>
        <div className='heading-2 text-center mt-24 mb-10 lg:mt-20 lg:mb-24'>PROJECTS</div>
        <div className='grid grid-cols-1 gap-10 md:gap-20'>
          {projects.map(({ _id, slug, name, techStack, links, previewImage, introDescription }, index) => (
            <React.Fragment key={_id}>
              <SingleProject
                name={name}
                slug={slug}
                techStack={techStack}
                links={links}
                previewImage={previewImage}
                introDescription={introDescription}
                reverse={index % 2 !== 0}
              />
              <hr className='md:hidden m-auto w-[30px] border-slate-600' />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
