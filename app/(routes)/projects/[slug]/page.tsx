import Link from 'next/link';
import Image from 'next/image';
import allProjects from '@/public/data/projects';
import Button from '@/app/components/Button/Button';
import ContactForm from '@/app/components/ContactForm/ContactForm';
import PhotoGallery from '@/app/components/PhotoGallery/PhotoGallery';
import { TbExternalLink } from 'react-icons/tb';
import { IoArrowBackSharp } from 'react-icons/io5';
import './project-details.scss';

export default function Page({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);

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
    <>
      <div className='hidden md:block fixed left-[38px] top-32 lg:top-36 lg:left-[78px]' data-aos='fade-down' data-aos-delay='100'>
        <Button as='link' href='/projects' variant='icon-round' icon={<IoArrowBackSharp className='w-5 h-5' />} />
      </div>
      <div className='wrap gradient-box'>
        <div className='intro'>
          <div className='intro-text'>
            <h3 className='hidden lg:block mb-5'>{project.title}</h3>
            <h6>Introduction</h6>
            <p>{project.description.short}</p>
            <div className='mt-3 flex flex-wrap gap-2 justify-between'>
              <div>
                <strong>Client:</strong> {project.client}
              </div>
              <div>
                <strong>Type:</strong> {project.projectType}
              </div>
              <div>
                <strong>Date:</strong> {project.completionDate}
              </div>
            </div>
            <div className='tech-list'>
              <h6>Technologies</h6>
              {project.techList.map((item, i) => (
                <div key={i}>
                  <span>▹</span> {item}
                </div>
              ))}
            </div>
            <div className='buttons'>
              {project.links.web && (
                <Button as='link' variant='primary' href={project.links.web} icon={<TbExternalLink className='w-5 h-5 mb-[3px]' />} externalLink>
                  View on the web
                </Button>
              )}
              {project.links.gitHub && (
                <Button as='link' variant='primary' href={project.links.gitHub} icon={<TbExternalLink className='w-5 h-5 mb-[3px]' />} externalLink>
                  View on GitHub
                </Button>
              )}
            </div>
          </div>
          <div className='intro-image'>
            <Image src={project.images.mockup} width={800} height={400} alt={project.title} />
          </div>
          <h3 className='lg:hidden'>{project.title}.</h3>
        </div>
        <hr className='my-10' />
        {project.developmentProcess && <div className='development-process'>{project.developmentProcess}</div>}
        <hr className='my-10' />
        <PhotoGallery images={project.images.gallery} />
      </div>
      <div className='text-center mt-20'>
        <div className='heading-3'>Get In Touch</div>
        <p>
          Want to get in touch or talk about a project? <br /> Feel free to contact me via email at{' '}
          <a href='mailto:oleg.plevan@gmail.com' className='fancy'>
            oleg.plevan@gmail.com
            <span />
            <span />
          </a>
          <br /> or drop a line in the form below and I&apos;ll get back to you as soon as I can.
        </p>
        <ContactForm />
      </div>
    </>
  );
}
