import React from 'react';
import { BsShield } from 'react-icons/bs';

interface Props {
  isMinimised: boolean;
}
type LogoProps = Props;

export default function Logo({ isMinimised }: LogoProps) {
  return (
    <div className='flex lg:flex-1 z-20' style={{ filter: 'drop-shadow(2px 2px 3px rgba(2, 12, 27, 0.5))' }}>
      <a href='/' className='relative -m-1.5 p-1.5 text-primary dark:text-dark-primary'>
        <BsShield className={`ease-in-out duration-300 ${isMinimised ? 'h-[35px] w-[35px]' : 'h-[45px] w-[45px]'}`} />
        <span
          className={`ease-in-out duration-300 font-sans font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[0.6] ${
            isMinimised ? 'text-[16px]' : 'text-[22px]'
          }`}
        >
          O
        </span>
      </a>
    </div>
  );
}
