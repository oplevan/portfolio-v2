import './project-details.scss';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import PhotoGallery from '@/components/PhotoGallery/PhotoGallery';

import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { PiGooglePlayLogoBold, PiAppStoreLogoBold } from 'react-icons/pi';
import { IoArrowBackSharp } from 'react-icons/io5';

import { getProject } from '@/sanity/queries/getProjects';
import { PortableText } from '@portabletext/react';
import PageWrapper from '@/components/page-wrapper';

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return (
      <>
        <h3 className='heading-4 text-center max-w-xl mx-auto'>Oops, it seems you&apos;ve ventured into the coding wilderness.🌲</h3>
        <p className='mt-5 text-center'>
          The project you&apos;re looking for is lost in the digital woods. <br /> But fear not! You can always explore my portfolio and discover other digital
          treasures.
        </p>
        <p className='text-center mt-2'>
          Let&apos;s go back to civilization! Check out my portfolio <Link href='/projects'>here</Link>.
        </p>
      </>
    );
  }

  return (
    <PageWrapper className='mb-10 lg:mb-18'>
      <div className='h-24 md:h-[15vh]'></div>
      <div className='hidden md:block fixed left-[38px] top-32 lg:top-36 lg:left-[78px]'>
        <Button as='link' href='/projects' variant='icon-round' icon={<IoArrowBackSharp className='w-5 h-5' />} />
      </div>
      <section className='project-wrap gradient-box'>
        <div className='intro'>
          <div className='intro-text'>
            <h3 className='hidden lg:block mb-5'>{project.name}</h3>
            <h6>Introduction</h6>
            <p>{project.description.intro}</p>
            <div className='mt-3 flex flex-wrap gap-2 justify-between'>
              <div>
                <strong>Client: </strong>Client
              </div>
              <div>
                <strong>Type: </strong>
                {project.projectType}
              </div>
              <div>
                <strong>Date: </strong>
                {project.completionDate}
              </div>
            </div>
            <div className='tech-list'>
              <h6>Tech Stack</h6>
              {project.techStack.map(({ name, icon }, i) => (
                <div key={i}>
                  <span>▹</span> {name}
                </div>
              ))}
            </div>
            <div className='buttons'>
              {project.links?.web && (
                <Button as='link' variant='primary' href={project.links.web} icon={<TbExternalLink className='w-5 h-5 mb-[3px]' />} externalLink />
              )}
              {project.links?.github && (
                <Button as='link' variant='primary' href={project.links.github} icon={<FiGithub className='w-5 h-5 mb-[3px]' />} externalLink />
              )}
              {project.links?.appStore && (
                <Button as='link' variant='primary' href={project.links.appStore} icon={<PiAppStoreLogoBold className='w-5 h-5 mb-[3px]' />} externalLink />
              )}
              {project.links?.googlePlay && (
                <Button as='link' variant='primary' href={project.links.googlePlay} icon={<PiGooglePlayLogoBold className='w-5 h-5 mb-[3px]' />} externalLink />
              )}
            </div>
          </div>
          <div className='intro-image'>
            <Image
              src={project.images.mockup ? project.images.mockup : '/assets/images/placeholder.svg'}
              width={800}
              height={400}
              alt={project.name}
              priority
            />
          </div>
          <h3 className='lg:hidden'>{project.name}.</h3>
        </div>
        <hr className='my-10' />
        {project.developmentProcess && (
          <div className='development-process'>
            <PortableText value={project.developmentProcess} />
          </div>
        )}
        <hr className='my-10' />
        {/* <PhotoGallery images={project.images.gallery} /> */}
      </section>
    </PageWrapper>
  );
}
