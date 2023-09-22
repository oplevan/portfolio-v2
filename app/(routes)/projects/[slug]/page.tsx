import allProjects from '@/public/data/projects';
import Button from '@/app/components/Button/Button';
import { IoArrowBackSharp } from 'react-icons/io5';
import Link from 'next/link';

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
      <h1 className='heading-3'>{project.title}</h1>
    </>
  );
}
