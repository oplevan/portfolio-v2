'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { MdLocationPin } from 'react-icons/md';
import { TbExternalLink } from 'react-icons/tb';
import { SiFreelancer } from 'react-icons/si';
import jobs from '@/public/data/jobs';

export default function Example() {
  return (
    <section id='experience' className='lg:max-w-4xl'>
      <div className='section-title'>
        <span>03.</span> Experience
      </div>
      <div className='w-full flex flex-col gap-3'>
        {jobs.map(({ id, title, company, location, type, startDate, endDate, description }) => (
          <Disclosure key={id}>
            {({ open }) => (
              <div className={`transition-all ease-linear !duration-300 ${open ? 'max-h-96' : 'max-h-20'}`}>
                <Disclosure.Button
                  className={`transition-all ease-linear relative z-10 flex flex-col lg:flex-row w-full justify-between pl-4 pr-12 py-2 text-left text-sm font-bold shadow-md ${
                    open ? 'dark:!bg-[#152849] dark:!text-dark-primary !bg-light-secondary-3 !text-primary' : 'bg-white dark:bg-dark-secondary-2'
                  }`}
                >
                  <div>
                    <span>{title}</span> @ <span>{company.name}</span>
                  </div>
                  <span className='font-medium text-xs italic text-slate-400 mt-0.5'>
                    {startDate} - {endDate}
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } transition-all ease-linear h-6 w-6 text-primary dark:text-dark-primary absolute top-1/2 right-3 -translate-y-1/2`}
                  />
                </Disclosure.Button>
                <Transition
                  enter='transition-all ease-linear !duration-300'
                  enterFrom='max-h-0'
                  enterTo='max-h-96'
                  leave='transition-all ease-linear !duration-300'
                  leaveFrom='max-h-96'
                  leaveTo='max-h-0'
                  className='overflow-hidden'
                >
                  <Disclosure.Panel className='m-2.5 py-4 px-4 text-sm dark:text-slate-200 bg-white shadow-md dark:bg-dark-secondary-3'>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 mb-5 dark:text-slate-400'>
                      <div className='flex items-center'>
                        <MdLocationPin className='h-5 w-5 lg:-ml-2 mr-2 text-primary dark:text-dark-primary' />
                        <span>
                          {type} ({location})
                        </span>
                      </div>
                      <div className='flex items-center'>
                        {company.website ? (
                          <>
                            <TbExternalLink className='h-5 w-5 mr-2 text-primary dark:text-dark-primary' />
                            <a
                              href={company.website}
                              target='_blank'
                              rel='noreferrer noopener'
                              className='transition ease-linear hover:text-primary hover:dark:text-dark-primary hover:underline'
                            >
                              {company.website.slice(8)}
                            </a>
                          </>
                        ) : (
                          <>
                            <SiFreelancer className='h-5 w-5 mr-2 text-primary dark:text-dark-primary' />
                            <span>{company.name}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <ul>
                      {description.map((item, i) => (
                        <li
                          key={i}
                          className='pl-5 relative mb-2.5 last:mb-0 before:content-["▹"] before:text-primary dark:before:text-dark-primary before:absolute before:-left-[1px] before:text-base before:-top-[3px]'
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
