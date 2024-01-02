'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { addClassNames } from '@/utils/helpers';
import Button from '../Button/Button';
import ThemeSwitcher from '../ThemeSwitcher';

import './navigation.scss';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation({ ...props }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
    currentScrollPos < prevScrollPos ? setIsMinimized(true) : setIsMinimized(false);
    currentScrollPos === 0 && setIsMinimized(false); // allows nav to stay visible when click on close menu button
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    document.querySelector<HTMLElement>('body > main')!.style.filter = !mobileMenuOpen ? 'blur(5px) brightness(0.7)' : '';
    document.querySelector<HTMLElement>('body')!.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  }

  return (
    <header className={addClassNames(!visible ? 'hidden' : '', isMinimized ? 'minimized' : '')}>
      <nav className='flex w-full h-full items-center justify-between px-6 lg:!px-16' aria-label='Global'>
        <div className='flex lg:flex-1 z-20' data-aos='fade-down' data-aos-delay='100'>
          {/* Site Logo */}
          <div className='flex justify-center w-[50px] md:w-[70px]'>
            <Link
              href='/'
              className={`gradient-box !rounded-full aspect-square border-2 border-dt-primary-gradient-to ease-in-out duration-300 delay-100 hover:scale-110 shadow-primary-wt dark:shadow-primary-dt ${
                isMinimized ? 'w-[50px]' : 'w-[70px]'
              }`}
            >
              <Image
                src={props.logoSrc}
                width={70}
                height={70}
                className='overflow-hidden w-auto h-auto max-w-full max-h-full rounded-full'
                alt='Head shot logo'
                priority
              />
            </Link>
          </div>
        </div>
        {/* hamburger */}
        <button type='button' className={addClassNames('hamburger lg:hidden relative z-20', mobileMenuOpen ? 'open' : '')} onClick={toggleMenu} />
        <Popover.Group className='hidden lg:flex lg:gap-x-6'>
          {navItems?.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className='p-4 text-md tracking-wider leading-6 text-text-light dark:text-text-dark hover:text-secondary dark:hover:text-primary uppercase'
              data-aos='fade-down'
              data-aos-delay={(index + 1) * 100}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-10' data-aos='fade-down' data-aos-delay='600'>
          <Button as='link' variant='primary' href={props.cvURL} icon={<BiLinkExternal />} externalLink>
            Resume
          </Button>
          <ThemeSwitcher />
        </div>

        {/* Mobile nav */}
        <Transition
          enter='transition ease-in duration-800'
          enterFrom='opacity-0 translate-x-1/2'
          enterTo='opacity-100 translate-x-0'
          leave='transition ease-out duration-800'
          leaveFrom='opacity-100 translate-x-0'
          leaveTo='opacity-0 translate-x-1/2'
          className='lg:hidden fixed top-0 right-0 w-9/12 h-screen z-10 dark:shadow-mobile-nav'
          show={mobileMenuOpen}
        >
          <div className='absolute inset-y-0 z-30 w-full overflow-y-auto bg-body-light dark:bg-body-dark flex flex-col justify-center items-center gap-3 font-semibold'>
            <div className='absolute top-5 left-5'>
              <ThemeSwitcher />
            </div>
            {navItems?.map((item, i) => (
              <Fragment key={item.name}>
                {i !== 0 && <hr className='w-[35px] border-slate-600' />}
                <Link key={item.name} href={item.href} className='block rounded-lg py-2 leading-7'>
                  {item.name}
                </Link>
              </Fragment>
            ))}
            <Button as='link' variant='primary' size='md' href={props.cvURL} icon={<BiLinkExternal />} className='mt-14' externalLink>
              Resume
            </Button>
          </div>
        </Transition>
      </nav>
    </header>
  );
}
