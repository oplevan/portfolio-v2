import allProjects from '@/public/data/projects';
import Button from '@/app/components/Button/Button';
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
      <Button as='link' href='/projects' variation='back-to-list' className='!fixed !hidden md:!block left-6 top-32 lg:top-36 lg:left-16 shadow-md z-20' />
      <h1 className='heading-3'>{project.title}</h1>
    </>
  );
}
