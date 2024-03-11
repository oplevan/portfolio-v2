import React from 'react';
import { Button } from './ui/button';

import { getProfileInfo } from '@/sanity/queries/getProfile';

import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiFacebook, FiLink } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default async function SideElements() {
  const { email, socials } = await getProfileInfo(['email', 'socials']);

  return (
    <>
      <SideElement side='left'>
        {socials.map(({ _id, url, name }) => (
          <Button key={_id} variant='ghost' size='icon' asChild className='transition duration-200 hover:-translate-y-1'>
            <Link href={url} target='_blank'>
              {Icon(name)}
            </Link>
          </Button>
        ))}
      </SideElement>
      <SideElement side='right'>
        <a
          href={`mailto:${email}`}
          className='easy-in-out duration-300 [writing-mode:vertical-rl] font-mono leading-none hover:-translate-y-1 p-3 block hover:text-secondary dark:hover:text-primary'
        >
          {email}
        </a>
      </SideElement>
    </>
  );
}

interface SideElementProps {
  side: 'left' | 'right';
  children: JSX.Element | JSX.Element[];
}

function SideElement({ side, children }: SideElementProps) {
  return (
    <div
      className={`fixed hidden md:block bottom-0 z-30 after:content=[""after:] after:block after:bg-slate-800 after:dark:bg-slate-400 after:mx-auto after:mt-5 after:h-[60px] after:lg:h-[90px] after:w-[1px] ${
        side === 'left' ? 'left-2 lg:left-8' : 'right-2 lg:right-8'
      }`}
    >
      <div className='flex flex-col gap-5'>{children}</div>
    </div>
  );
}

function Icon(name: string) {
  if (name.toLowerCase() === 'facebook') return <FiFacebook />;
  if (name.toLowerCase() === 'instagram') return <FiInstagram />;
  if (name.toLowerCase() === 'twitter') return <FiTwitter />;
  if (name.toLowerCase() === 'x') return <FaXTwitter />;
  if (name.toLowerCase() === 'linkedin') return <FiLinkedin />;
  if (name.toLowerCase() === 'github') return <FiGithub />;
  return <FiLink />;
}
