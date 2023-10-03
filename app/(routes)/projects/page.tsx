'use client';
import React, { useState } from 'react';
import Button from '@/app/components/Button/Button';
import SingleProject from '@/app/components/Project/Single/Single';
import allProjects from '@/public/data/projects';
import { IoArrowBackSharp } from 'react-icons/io5';

export default function ProjectList() {
  const [projects, setProjects] = useState(allProjects);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const allProjectsDisplayed = visibleProjects >= projects.length;
  return (
    <section className='min-h-screen md:max-w-7xl relative'>
      <div className='hidden md:block fixed left-[38px] top-32 lg:top-36 lg:left-[78px]' data-aos='fade-down' data-aos-delay='100'>
        <Button as='link' href='/' variant='icon-round' icon={<IoArrowBackSharp className='w-5 h-5' />} />
      </div>
      <div className='heading-2 text-center mt-24 mb-10 lg:mt-20 lg:mb-24' data-aos='fade-up' data-aos-delay='100'>
        All Projects
      </div>
      <div className='grid grid-cols-1 gap-10 md:gap-20'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <React.Fragment key={project.id}>
            <SingleProject
              title={project.title}
              slug={project.slug}
              links={project.links}
              shortDescription={project.description.short}
              previewImage={project.images.preview}
              techList={project.techList}
              reverse={index % 2 !== 0}
              animationDelay={index % 3 === 0 ? 200 : index % 3 === 1 ? 300 : 400}
            />
            <hr className='md:hidden m-auto w-[30px] border-slate-600' />
          </React.Fragment>
        ))}
      </div>
      <div className='mt-10 flex justify-center'>
        {!allProjectsDisplayed && (
          <Button as='button' variant='primary' size='lg' clickHandler={loadMore}>
            Load more
          </Button>
        )}
      </div>
    </section>
  );
}
