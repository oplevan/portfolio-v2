'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

import { AiOutlineFolder } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { PiGooglePlayLogoBold, PiAppStoreLogoBold } from 'react-icons/pi';

import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  name: string;
  slug: string;
  techStack: [...any, { name: string }];
  links?: { web?: string; github?: string; appStore?: string; googlePlay?: string };
  previewImage?: string;
  introDescription?: string | React.ReactNode;
  animationDelay?: number;
};

export default function ProjectCard({ name, slug, links, previewImage, introDescription, techStack, animationDelay }: ProjectCardProps) {
  const cardVariants: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1.5,
        delay: animationDelay,
      },
    },
  };
  return (
    <motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.5 }} className='motion-container'>
      <motion.div
        className='group h-full overflow-hidden p-5 relative flex flex-col items-start top-0 justify-between shadow-primary bg-gradient-to-br from-primary-gradient-from to-primary-gradient-to rounded-md hover:before:opacity-100 before:content-[""] before:absolute before:z-0 before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-secondary-gradient-from before:to-secondary-gradient-to before:opacity-0 before:transition-all before:ease-linear before:duration-200 before:rounded-md'
        variants={cardVariants}
      >
        <div className='z-10 flex flex-col flex-1'>
          <div className='w-full flex justify-between items-center mb-4'>
            <div className='text-3xl text-primary'>
              <AiOutlineFolder />
            </div>
            <div className='flex gap-4 [&>a]:p-2 [&>a]:-m-2 [&>a]:transition [&>a]:duration-200 [&>a:hover]:-translate-y-1 dark:[&>a:hover]:text-primary'>
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
          <Link href={links?.web ? links.web : '/projects'} className='flex-1'>
            <div className='block relative mb-3 overflow-hidden -mx-6 aspect-[16/8] transition ease-in-out duration-500 filter grayscale group-hover:grayscale-0'>
              <Image
                src={previewImage ? previewImage : '/assets/images/placeholder.svg'}
                width={360}
                height={180}
                alt='Project preview image'
                className='transition ease-in-out duration-500 object-cover w-full h-full group-hover:scale-110'
              />
            </div>
            <div className='font-bold text-base mb-1 transition-all ease-in-out duration-300'>{name}</div>
            <div className='text-[13px]'>{introDescription}</div>
          </Link>
        </div>
        <div className='flex flex-wrap text-[13px] font-mono gap-2 leading-none mt-3 z-10'>
          {techStack.map((item) => (
            <div key={item} className='text-[11px] text-primary bg-primary-muted py-1.5 px-2.5 rounded-full'>
              {item.name}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
