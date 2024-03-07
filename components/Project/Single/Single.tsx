'use client';

import './Single.scss';

import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { PiGooglePlayLogoBold, PiAppStoreLogoBold } from 'react-icons/pi';
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
      delay: 0.2,
    },
  },
};

export default function SingleProject({ name, slug, links, previewImage, introDescription, techStack, reverse = false }: Props) {
  return (
    <motion.div className='card-container' initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.5 }}>
      <motion.div variants={cardVariants} className={`single-project ${reverse ? 'reverse' : ''}`}>
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
            <Button asChild>
              <Link href={`/projects/${slug}`}>
                <span>Learn more</span>
              </Link>
            </Button>
            <div className='flex gap-4'>
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
        </div>
      </motion.div>
    </motion.div>
  );
}
