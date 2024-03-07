import Image from 'next/image';
import Link from 'next/link';
import { getSiteLogo } from '@/sanity/queries/getSiteLogo';

export default async function SiteLogo() {
  const logo = await getSiteLogo();
  return (
    <div className='site-logo flex justify-center ease-in-out duration-300 delay-100 hover:scale-110 w-[70px] h-[70%]'>
      <Link href='/' className='gradient-box !rounded-full aspect-square border-2 border-border shadow-primary'>
        <Image
          src={logo.src}
          width={70}
          height={70}
          className='overflow-hidden w-auto h-auto max-w-full max-h-full rounded-full'
          alt='Head shot logo'
          priority
        />
      </Link>
    </div>
  );
}
