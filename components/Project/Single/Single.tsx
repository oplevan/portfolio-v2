import './Single.scss';

import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { PiGooglePlayLogoBold, PiAppStoreLogoBold } from 'react-icons/pi';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';

type Props = {
  name: string;
  slug: string;
  techStack: [...any, { name: string }];
  links?: { web?: string; github?: string; appStore?: string; googlePlay?: string };
  previewImage?: string;
  introDescription?: string;
  animationDelay?: number;
  reverse?: boolean;
};

export default function SingleProject({ name, slug, links, previewImage, introDescription, techStack, animationDelay = 0, reverse = false }: Props) {
  return (
    <div className={`single-project ${reverse ? 'reverse' : ''}`} data-aos='fade-up' data-aos-delay={animationDelay}>
      <Link href={`/projects/${slug}`} className='title md:hidden'>
        {name}
      </Link>
      <figure className='image-wrap'>
        <figcaption className='top-bar'>
          <div className='buttons'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='caption'>{name}</div>
        </figcaption>
        <Image src={previewImage ? previewImage : '/assets/images/placeholder.svg'} width={700} height={350} alt='Project preview image' />
      </figure>
      <div className='project-content'>
        <Link href={`/projects/${slug}`} className='title hidden md:block'>
          {name}
        </Link>
        <div className='description gradient-box'>{introDescription}</div>
        <div className='tech-list'>
          {techStack.map((item, i) => (
            <div key={i}>
              <span>▹</span> {item.name}
            </div>
          ))}
        </div>
        <div className='project-links'>
          <Button as='link' href={`/projects/${slug}`} variant='primary' size='sm'>
            Learn more
          </Button>
          <div className='flex gap-4'>
            {links?.web && <Button as='link' size='lg' variant='icon' icon={<TbExternalLink />} href={links.web} className='!p-2 !-m-2' externalLink />}
            {links?.github && <Button as='link' size='lg' variant='icon' icon={<FiGithub />} href={links.github} className='!p-2 !-m-2' externalLink />}
            {links?.appStore && (
              <Button as='link' size='lg' variant='icon' icon={<PiAppStoreLogoBold />} href={links.appStore} className='!p-2 !-m-2' externalLink />
            )}
            {links?.googlePlay && (
              <Button as='link' size='lg' variant='icon' icon={<PiGooglePlayLogoBold />} href={links.googlePlay} className='!p-2 !-m-2' externalLink />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
