import { ToastContainer } from 'react-toastify';

import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import ThemeProvider from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation/Navigation';
import SideElements from '@/components/SideElements';

import { AOSInit } from '@/utils/aos';

import { getProfile } from '@/sanity/queries/getProfile';
import { getSiteLogo } from '@/sanity/queries/getSiteLogo';

import type { Profile } from '@/sanity/types/Profile';
import type { SiteLogo } from '@/sanity/types/SiteLogo';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const profile: Profile[] = await getProfile();
  const logo: SiteLogo[] = await getSiteLogo();

  const { image } = logo[0];
  const { CV } = profile[0];
  // console.log(typeof image.src);

  return (
    <html lang='en' suppressHydrationWarning>
      <AOSInit />
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <ToastContainer />
          <Navigation cvURL={CV} logoSrc={image.src} />
          <main>
            <SideElements />
            {children}
          </main>
          <footer className='text-center pb-10 px-16'>
            <small>
              Copyright &copy; 2023 Oleg Plevan. <span className='whitespace-nowrap'>All rights reserved.</span>
            </small>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
