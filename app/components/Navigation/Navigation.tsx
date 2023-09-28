'use client';

import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { BiLinkExternal } from 'react-icons/bi';
import { addClassNames } from '@/app/utils/helpers';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import SelectThemeColor from '../SelectThemeColor/SelectThemeColor';
import Link from 'next/link';
import './navigation.scss';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  // {
  //   name: 'Products',
  //   href: '',
  //   subItems: [
  //     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  //     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  //     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  //     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  //     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  //   ],
  // },
  { name: 'Contact', href: '/#contact' },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMinimised, setIsMinimised] = useState(false);

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
    currentScrollPos < prevScrollPos ? setIsMinimised(true) : setIsMinimised(false);
    currentScrollPos === 0 && setIsMinimised(false); // allows nav to stay visible when click on close menu button
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
    <header className={addClassNames(!visible ? 'hidden' : '', isMinimised ? 'minimised' : '')}>
      <nav className='flex w-full h-full items-center justify-between px-6 lg:!px-16' aria-label='Global'>
        <Logo isMinimised={isMinimised} />
        {/* hamburger */}
        <button type='button' className={addClassNames('hamburger lg:hidden relative z-20', mobileMenuOpen ? 'open' : '')} onClick={toggleMenu} />
        <Popover.Group className='hidden lg:flex lg:gap-x-6'>
          {navItems?.map((item, index) =>
            // @ts-ignore: Unreachable code error
            item?.subItems ? (
              <Popover key={item.name} className={'relative'}>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={addClassNames(
                        'p-4 flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-400 hover:text-light-primary dark:hover:text-secondary dark:text-primary',
                        open ? '!text-light-primary dark:!text-secondary dark:text-primary' : ''
                      )}
                    >
                      {item.name}
                      <ChevronDownIcon className='h-5 w-5 flex-none' aria-hidden='true' />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                        <div className='p-4'>
                          {
                            // @ts-ignore: Unreachable code error
                            item?.subItems.map((item) => (
                              <div key={item.name} className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                                <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                                  <item.icon className='h-6 w-6 text-gray-600 group-hover:text-indigo-600' aria-hidden='true' />
                                </div>
                                <div className='flex-auto'>
                                  <Link href={item.href} className='block font-semibold text-gray-900'>
                                    {item.name}
                                    <span className='absolute inset-0' />
                                  </Link>
                                  <p className='mt-1 text-gray-600'>{item.description}</p>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                          {callsToAction.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                            >
                              <item.icon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className='p-4 text-md tracking-wider leading-6 text-text-light dark:text-text-dark hover:!text-secondary dark:text-primary uppercase'
                data-aos='fade-down'
                data-aos-delay={(index + 1) * 100}
              >
                {item.name}
              </Link>
            )
          )}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-10' data-aos='fade-down' data-aos-delay='600'>
          <Button as='link' variant='primary' href='/assets/pdf/resume.pdf' icon={<BiLinkExternal />} externalLink>
            Resume
          </Button>
          <SelectThemeColor />
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
              <SelectThemeColor />
            </div>
            {navItems?.map((item, i) =>
              // @ts-ignore: Unreachable code error
              item?.subItems ? (
                <Disclosure key={item.name} as={Fragment}>
                  {({ open }) => (
                    <div className={addClassNames('max-h-11 ease-in-out duration-300 w-full bg-transparent', open ? '!max-h-screen pb-2' : '')}>
                      <Disclosure.Button
                        className={addClassNames(
                          'flex w-full items-center justify-center rounded-lg py-2 text-base',
                          open ? 'text-secondary dark:text-primary dark:text-secondary dark:text-primary uppercase' : ''
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon className={addClassNames(open ? 'rotate-180' : '', 'relative -mr-2 h-5 w-5 flex-none')} aria-hidden='true' />
                      </Disclosure.Button>
                      <Transition
                        as={Fragment}
                        enter='transition-opacity duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Disclosure.Panel className='space-y-2'>
                          {
                            // @ts-ignore: Unreachable code error
                            [...item.subItems, ...callsToAction].map((item) => (
                              <Disclosure.Button key={item.name} as='a' href={item.href} className='block rounded-lg text-sm text-center leading-7'>
                                {item.name}
                              </Disclosure.Button>
                            ))
                          }
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ) : (
                <>
                  {i !== 0 && <hr className='w-[35px] border-slate-600' />}
                  <Link key={item.name} href={item.href} className='block rounded-lg py-2 leading-7'>
                    {item.name}
                  </Link>
                </>
              )
            )}
            <Button
              as='link'
              variant='primary'
              size='lg'
              href='https://drive.google.com/file/d/1eTjj7ljjFtpmJBPain_UXaQWQQKUfMO5/view?pli=1'
              icon={<BiLinkExternal />}
              className='mt-14'
              externalLink
            >
              Resume
            </Button>
          </div>
        </Transition>
      </nav>
    </header>
  );
}
