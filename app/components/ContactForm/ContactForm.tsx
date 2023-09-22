'use client';

import React, { useEffect } from 'react';
import Button from '../Button/Button';
import { Ripple, Input, initTE } from 'tw-elements';

type Props = {};

export default function ContactForm({}: Props) {
  useEffect(() => {
    initTE({ Input });
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log('submit the form');
  }
  return (
    <div className='w-full max-w-md p-6 mx-auto mt-10 shadow-primary-wt dark:shadow-primary-dt bg-gradient-to-br from-l-secondary-gradient-from to-white dark:from-d-primary-gradient-from dark:to-d-primary-gradient-to rounded-md'>
      <form onSubmit={handleSubmit}>
        <div className='relative mb-6' data-te-input-wrapper-init>
          <input
            type='text'
            className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
            id='name'
            placeholder='Name'
          />
          <label
            htmlFor='name'
            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 dark:text-slate-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-light-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none'
          >
            Name
          </label>
        </div>

        <div className='relative mb-6' data-te-input-wrapper-init>
          <input
            type='email'
            className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
            id='email'
            placeholder='Email address'
          />
          <label
            htmlFor='email'
            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 dark:text-slate-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-light-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none'
          >
            Email address
          </label>
        </div>

        <div className='relative mb-6' data-te-input-wrapper-init>
          <textarea
            className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
            id='message'
            rows={3}
            placeholder='Message'
          ></textarea>
          <label
            htmlFor='message'
            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 dark:text-slate-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-light-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none'
          >
            Message
          </label>
        </div>
        <Button as='button' variant='primary' className='mx-auto'>
          SEND
        </Button>
      </form>
    </div>
  );
}
