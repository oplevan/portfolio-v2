'use client';

import Link from 'next/link';
import cn from 'classnames';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    document.querySelector<HTMLElement>('body > main')!.style.filter = !mobileMenuOpen ? 'blur(5px) brightness(0.7)' : '';
    document.querySelector<HTMLElement>('body')!.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  }

  return (
    <nav className='flex h-full items-center justify-between'>
      <div className='hidden lg:flex gap-x-6'>
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
      </div>

      <button type='button' className={cn('hamburger lg:hidden relative z-20', mobileMenuOpen ? 'open' : '')} onClick={toggleMenu} />
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
          {navItems?.map((item, i) => (
            <Fragment key={item.name}>
              {i !== 0 && <hr className='w-[35px] border-slate-600' />}
              <Link key={item.name} href={item.href} className='block rounded-lg py-2 leading-7'>
                {item.name}
              </Link>
            </Fragment>
          ))}
          {children}
        </div>
      </Transition>
    </nav>
  );
}
