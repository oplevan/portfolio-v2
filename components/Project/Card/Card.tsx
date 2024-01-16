import './Card.scss';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineFolder } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { PiGooglePlayLogoBold, PiAppStoreLogoBold } from 'react-icons/pi';

import Button from '@/components/Button/Button';

type Props = {
  name: string;
  slug: string;
  techStack: [...any, { name: string }];
  links?: { web?: string; github?: string; appStore?: string; googlePlay?: string };
  previewImage?: string;
  introDescription?: string | React.ReactNode;
  animationDelay?: number;
};

export default function Card({ name, slug, links, previewImage, introDescription, techStack, animationDelay = 0 }: Props) {
  return (
    <div className='project-card' data-aos='fade-up' data-aos-delay={animationDelay}>
      <div className='z-10'>
        <div className='card-top'>
          <div className='project-icon'>
            <AiOutlineFolder />
          </div>
          <div className='project-links'>
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
        <Link href={`/projects/${slug}`}>
          <div className='preview-image'>
            <Image src={previewImage ? previewImage : '/assets/images/placeholder.svg'} width={360} height={180} alt='Project preview image' />
          </div>
          <div className='name'>{name}</div>
          <div className='intro-description'>{introDescription}</div>
        </Link>
      </div>
      <div className='tech-stack'>
        {techStack.map((item, i) => (
          <div key={i}>
            <span>▹</span> {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
