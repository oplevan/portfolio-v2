import { BsShield } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import HeadShot from '@/public/assets/images/head-shot-logo.png';

interface Props {
  isMinimised: boolean;
}
type LogoProps = Props;

export default function Logo({ isMinimised }: LogoProps) {
  return (
    <div className='flex lg:flex-1 z-20' data-aos='fade-down' data-aos-delay='100'>
      <div className='flex justify-center w-[50px] md:w-[70px]'>
        <Link
          href='/'
          className={`gradient-box !rounded-full aspect-square ease-in-out duration-300 border-2 border-dt-primary-gradient-to ${
            isMinimised ? 'w-[50px]' : 'w-[70px]'
          }`}
        >
          <Image src={HeadShot} className='overflow-hidden w-auto h-auto max-w-full max-h-full rounded-full' alt='Head shot logo' />
        </Link>
      </div>
    </div>
  );
}
