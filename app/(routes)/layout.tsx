import { ToastContainer } from 'react-toastify';

import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { NextThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation/Navigation';
import SideElements from '@/components/SideElements';

import { AOSInit } from '@/utils/aos';

import { getProfile } from '@/sanity/queries/getProfile';
import type { Profile } from '@/sanity/types/ProfileInfoType';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const profile: Profile[] = await getProfile();
  const { CV } = profile[0];

  return (
    <html lang='en' suppressHydrationWarning>
      <AOSInit />
      <body>
        <NextThemeProvider>
          <ToastContainer />
          <Navigation cvURL={CV} />
          <main>
            <SideElements />
            {children}
          </main>
          <footer className='text-center pb-10 px-16'>
            <small>
              Copyright &copy; 2023 Oleg Plevan. <span className='whitespace-nowrap'>All rights reserved.</span>
            </small>
          </footer>
        </NextThemeProvider>
      </body>
    </html>
  );
}
