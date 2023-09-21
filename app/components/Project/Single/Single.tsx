import './SingleProject.scss';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/Button/Button';

type Props = {
  title: string | React.ReactNode;
  links?: { web?: string; gitHub?: string };
  thumbnail: string;
  shortDescription?: string | React.ReactNode;
  techList: string[];
  animationDelay?: number;
  reverse?: boolean;
  slug: string;
};

export default function SingleProject({ title, links, thumbnail, shortDescription, techList, animationDelay = 0, reverse = false, slug }: Props) {
  return (
    <div className={`single-project ${reverse ? 'reverse' : ''}`} data-aos='fade-up' data-aos-delay={animationDelay}>
      <Link href={`/projects/${slug}`} className='title md:hidden'>
        {title}
      </Link>
      <figure className='image-wrap'>
        <figcaption className='top-bar'>
          <div className='buttons'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='caption'>{title}</div>
        </figcaption>
        <Image src={thumbnail} width={700} height={350} alt='Project preview image' />
      </figure>
      <div className='project-content'>
        <Link href={`/projects/${slug}`} className='title hidden md:block'>
          {title}
        </Link>
        <div className='description'>{shortDescription}</div>
        <div className='tech-list'>
          {techList.map((item, i) => (
            <div key={i}>
              <span>▹</span> {item}
            </div>
          ))}
        </div>
        <div className='project-links'>
          <Button as='link' href={`/projects/${slug}`} variant='primary' size='sm'>
            Learn more
          </Button>
          <div className='flex'>
            {links?.web && (
              <a href={links.web} target='_blank' rel='noopener noreferrer'>
                <TbExternalLink />
              </a>
            )}
            {links?.gitHub && (
              <a href={links.web} target='_blank' rel='noopener noreferrer'>
                <FiGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
