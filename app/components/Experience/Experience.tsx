'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { MdLocationPin } from 'react-icons/md';
import { TbExternalLink } from 'react-icons/tb';
import { IoIosCalendar } from 'react-icons/io';
import { HiBriefcase } from 'react-icons/hi';
import jobs from '@/public/data/jobs';

export default function Example() {
  return (
    <section id='experience' className='lg:max-w-4xl'>
      <div className='section-title' data-aos='fade-up'>
        Experience
      </div>
      <div className='w-full flex flex-col gap-5' data-aos='fade-up'>
        {jobs.map(({ id, title, company, location, type, startDate, endDate, description }, index) => (
          <Disclosure key={id}>
            {({ open }) => (
              <div
                className={`transition-all ease-linear !duration-300 shadow-primary-wt dark:shadow-primary-dt bg-gradient-to-br from-l-secondary-gradient-from to-white dark:from-d-primary-gradient-from dark:to-d-primary-gradient-to rounded-md ${
                  open ? 'max-h-96' : 'max-h-20'
                }`}
              >
                <Disclosure.Button
                  className={`transition-all ease-linear relative z-10 flex flex-col lg:flex-row w-full justify-between pl-4 pr-12 py-2 text-left text-sm font-bold ${
                    open ? 'text-primary border-b-[1px] border-lt-separator dark:border-dt-separator' : ''
                  }`}
                >
                  <div>
                    <span>{title}</span> @ <span>{company.name}</span>
                  </div>
                  <div className='font-medium text-xs italic text-slate-400 mt-0.5 flex items-end'>
                    <IoIosCalendar className='h-5 w-5 mr-2 text-slate-500/80' />
                    {startDate} - {endDate}
                  </div>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } transition-all ease-linear h-6 w-6 text-primary dark:text-primary absolute top-1/2 right-3 -translate-y-1/2`}
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
                  <Disclosure.Panel className='py-4 px-4 text-sm dark:text-slate-200 '>
                    <div className='flex flex-col lg:flex-row lg:items-center mb-5 dark:text-slate-400'>
                      <div className='flex items-center gap-4'>
                        <div className='flex leading-tight items-end'>
                          <HiBriefcase className='h-5 w-5 mr-1 text-slate-500/80' />
                          {type}
                        </div>
                        <div className='flex leading-tight items-end'>
                          <MdLocationPin className='h-5 w-5 mr-1 text-slate-500/80' />
                          {location}
                        </div>
                        {company.website && (
                          <a
                            href={company.website}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='flex leading-tight items-end transition ease-linear hover:text-primary hover:dark:text-primary hover:underline'
                          >
                            <TbExternalLink className='h-5 w-5 mr-1 text-slate-500' />
                            {company.website.slice(8)}
                          </a>
                        )}
                      </div>
                    </div>
                    <ul>
                      {description.map((item, i) => (
                        <li
                          key={i}
                          className='pl-5 relative mb-2.5 last:mb-0 before:content-["▹"] before:text-primary dark:before:text-primary before:absolute before:-left-[1px] before:text-base before:-top-[3px]'
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
