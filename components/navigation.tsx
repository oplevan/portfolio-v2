'use client';

import Link from 'next/link';
import cn from 'classnames';
import { Fragment, SyntheticEvent, useState } from 'react';
import { Transition } from '@headlessui/react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    document.querySelector<HTMLElement>('body > main')!.style.filter = !mobileMenuOpen ? 'blur(5px) brightness(0.7)' : '';
    document.querySelector<HTMLElement>('body')!.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  }

  function navLinkClickHandler(e: SyntheticEvent, href: string) {
    e.preventDefault();

    const hash = href.split('#')[1];
    const path = href.split('#')[0];

    if (hash && pathname === path) {
      const targetScrollToElement = document.getElementById(hash)?.offsetTop;
      targetScrollToElement && window.scrollTo({ top: targetScrollToElement - 10, behavior: 'smooth' });
    } else {
      router.push(href);
    }

    window.innerWidth < 1024 && toggleMenu();
  }

  return (
    <nav className='flex h-full items-center justify-between'>
      <div className='hidden lg:flex gap-x-10'>
        {navLinks?.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn('text-md tracking-wider leading-6 hover:text-primary uppercase relative', link.href === pathname ? 'text-primary' : '')}
            onClick={(e) => navLinkClickHandler(e, link.href)}
            spy-section={link.label.toLowerCase().split(' ').join('-')}
          >
            {link.href === pathname && <motion.span layoutId='underline' className='absolute left-0 bottom-0 block h-[1px] w-full bg-primary' />}
            {link.label}
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
        className='lg:hidden fixed top-0 right-0 w-9/12 h-screen z-10 shadow-drawer'
        show={mobileMenuOpen}
      >
        <div className='absolute inset-y-0 z-30 w-full overflow-y-auto bg-background flex flex-col justify-center items-center gap-3 font-semibold'>
          {navLinks?.map((link, i) => (
            <Fragment key={link.label}>
              {i !== 0 && <hr className='w-[35px] border-slate-600' />}
              <Link key={link.label} href={link.href} className='block rounded-lg py-2 leading-7' onClick={(e) => navLinkClickHandler(e, link.href)}>
                {link.label}
              </Link>
            </Fragment>
          ))}
          {children}
        </div>
      </Transition>
    </nav>
  );
}
