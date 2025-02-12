import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import AnimatedScrollDownArrow from '@/components/AnimatedScrollDownArrow/AnimatedScrollDownArrow';
import ProjectCard from '@/components/project-card';
import PageWrapper from '@/components/page-wrapper';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { MdLocationPin } from 'react-icons/md';
import { TbExternalLink } from 'react-icons/tb';
import { IoIosCalendar } from 'react-icons/io';
import { HiBriefcase } from 'react-icons/hi';

import { getProfileInfo } from '@/sanity/queries/getProfile';
import { getProjects } from '@/sanity/queries/getProjects';
import { getExperience } from '@/sanity/queries/getExperience';

import { calculateDuration, formatDate } from '@/lib/utils';

export default async function Home() {
  const { introLine, fullName, headline, shortBio, fullBio, profilePicture } = await getProfileInfo();
  const featuredProjects = await getProjects('featured');
  const experience = await getExperience();

  return (
    <PageWrapper>
      <section id='intro'>
        <div className='mb-2'>{introLine}</div>
        {<div className='heading-1'>{fullName}</div>}
        <div className='heading-2 leading-thin mb-4 lg:max-w-[800px]'>{headline}</div>
        <p className='lg:max-w-xl'>{shortBio}</p>
        <AnimatedScrollDownArrow />
      </section>
      <section id='about'>
        <div className='section-title'>About me</div>
        <div className='flex gap-10 items-start flex-col-reverse lg:flex-row lg:items-start'>
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
        <div className='section-title'>Featured projects</div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featuredProjects.map(({ _id, slug, name, techStack, links, previewImage, introDescription }, index) => (
            <ProjectCard
              key={_id}
              name={name}
              slug={slug}
              techStack={techStack}
              links={links}
              previewImage={previewImage}
              introDescription={introDescription}
              animationDelay={index % 3 === 0 ? 0.3 : index % 3 === 1 ? 0.2 : 0.1}
            />
          ))}
        </div>
        <div className='mt-10 flex justify-center'>
          <Button asChild>
            <Link href='/projects'>
              <span>View all projects</span>
            </Link>
          </Button>
        </div>
      </section>
      <section id='experience' className='lg:max-w-4xl min-h-[80vh] flex flex-col justify-center'>
        <div className='section-title'>Experience</div>
        <div className='w-full flex flex-col gap-5'>
          <Accordion type='single' className='space-y-4' defaultValue={`${experience[0]._id}`}>
            {experience.map(({ _id, jobTitle, employmentType, location, employmentStartDate, employmentEndDate, companyName, companyWebsite, description }) => (
              <AccordionItem key={_id} value={`${_id}`}>
                <AccordionTrigger>
                  <div>
                    <span>{jobTitle}</span> @ <span>{companyName}</span>
                  </div>
                  <div className='font-medium text-xs italic text-slate-400 flex items-end'>
                    <IoIosCalendar className='h-5 w-5 mr-2 text-slate-500/80' />
                    {formatDate(employmentStartDate)} - {formatDate(employmentEndDate)} · {calculateDuration(employmentStartDate, employmentEndDate)}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col lg:flex-row lg:items-center mb-5 dark:text-slate-400'>
                    <div className='flex items-start flex-col sm:flex-row sm:items-center gap-4'>
                      <div className='flex leading-tight items-end capitalize'>
                        <HiBriefcase className='h-5 w-5 mr-1 text-slate-500/80' />
                        {employmentType}
                      </div>
                      <div className='flex leading-tight items-end'>
                        <MdLocationPin className='h-5 w-5 mr-1 text-slate-500/80' />
                        {location}
                      </div>
                      {companyWebsite && (
                        <a
                          href={companyWebsite}
                          target='_blank'
                          rel='noreferrer noopener'
                          className='flex leading-tight items-center transition ease-linear hover:text-secondary dark:hover:text-primary hover:underline'
                        >
                          <TbExternalLink className='h-5 w-5 mr-1' />
                          {companyWebsite.slice(8)}
                        </a>
                      )}
                    </div>
                  </div>
                  <PortableText value={description} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageWrapper>
  );
}
