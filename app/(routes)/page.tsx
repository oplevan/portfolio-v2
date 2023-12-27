import Image from 'next/image';
import { PortableText } from '@portabletext/react';

import AnimatedScrollDownArrow from '@/components/AnimatedScrollDownArrow/AnimatedScrollDownArrow';
import ContactForm from '@/components/ContactForm/ContactForm';
import Button from '@/components/Button/Button';
import Card from '@/components/Project/Card/Card';
import Experience from '@/components/Experience/Experience';

import allProjects from '@/public/data/projects';

import { getProfile } from '@/sanity/queries/getProfile';
import type { Profile } from '@/sanity/types/ProfileInfoType';

export default async function Home() {
  const profile: Profile[] = await getProfile();
  const { introLine, fullName, headline, shortBio, fullBio, profilePicture } = profile[0];
  return (
    <>
      <section id='intro'>
        <div className='mb-2' data-aos='fade-up' data-aos-delay='900'>
          {introLine}
        </div>
        {
          <div className='heading-1' data-aos='fade-up' data-aos-delay='1000'>
            {fullName}
          </div>
        }
        <div className='heading-2 leading-thin mb-4 lg:max-w-[800px]' data-aos='fade-up' data-aos-delay='1100'>
          {headline}
        </div>
        <p className='lg:max-w-xl' data-aos='fade-up' data-aos-delay='1200'>
          {shortBio}
        </p>
        <AnimatedScrollDownArrow />
      </section>
      <section id='about' data-aos='fade-up'>
        <div className='section-title'>About me</div>
        <div className='flex gap-10 items-start flex-col-reverse lg:flex-row lg:items-start' data-aos='fade-up' data-aos-delay='400'>
          <div className='flex flex-col gap-3 flex-1'>
            <PortableText value={fullBio} />
          </div>
          <div className='gradient-box max-w-[199px] lg:max-w-[300px] m-auto lg:m-0'>
            <Image
              src={profilePicture.image}
              alt={profilePicture.alt ? profilePicture.alt : 'Head shot'}
              className='overflow-hidden w-auto h-auto max-w-full max-h-full'
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='section-title' data-aos='fade-up'>
          Projects
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {allProjects.slice(0, 3).map((project, index) => (
            <Card
              key={project.id}
              slug={project.slug}
              title={project.title}
              links={project.links}
              shortDescription={project.description.short}
              previewImage={project.images.preview}
              techList={project.techList}
              animationDelay={index % 3 === 0 ? 100 : index % 3 === 1 ? 200 : 300}
            />
          ))}
        </div>
        <div className='mt-10 flex justify-center'>
          <Button as='link' href='/projects' variant='primary' size='md'>
            View all projects
          </Button>
        </div>
      </section>
      <Experience />
      <section id='contact' data-aos='fade-up'>
        <div className='heading-3'>Get In Touch</div>
        <p>
          Want to get in touch or talk about a project? <br /> Feel free to contact me via email at{' '}
          <a href='mailto:oleg.plevan@gmail.com' className='fancy'>
            oleg.plevan@gmail.com
            <span />
            <span />
          </a>
          <br /> or drop a line in the form below and I&apos;ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
