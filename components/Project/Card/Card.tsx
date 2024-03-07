import './Card.scss';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineFolder } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { PiGooglePlayLogoBold, PiAppStoreLogoBold } from 'react-icons/pi';

import { Button } from '@/components/ui/button';

type Props = {
  name: string;
  slug: string;
  techStack: [...any, { name: string }];
  links?: { web?: string; github?: string; appStore?: string; googlePlay?: string };
  previewImage?: string;
  introDescription?: string | React.ReactNode;
};

export default function Card({ name, slug, links, previewImage, introDescription, techStack }: Props) {
  return (
    <div className='project-card'>
      <div className='z-10'>
        <div className='card-top'>
          <div className='project-icon'>
            <AiOutlineFolder />
          </div>
          <div className='project-links'>
            {links?.web && (
              <Button variant='ghost' size='icon' asChild>
                <Link href={links.web} target='_blank'>
                  <TbExternalLink />
                </Link>
              </Button>
            )}
            {links?.github && (
              <Button variant='ghost' size='icon' asChild>
                <Link href={links.github} target='_blank'>
                  <FiGithub />
                </Link>
              </Button>
            )}
            {links?.appStore && (
              <Button variant='ghost' size='icon' asChild>
                <Link href={links.appStore} target='_blank'>
                  <PiAppStoreLogoBold />
                </Link>
              </Button>
            )}
            {links?.googlePlay && (
              <Button variant='ghost' size='icon' asChild>
                <Link href={links.googlePlay} target='_blank'>
                  <PiGooglePlayLogoBold />
                </Link>
              </Button>
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
