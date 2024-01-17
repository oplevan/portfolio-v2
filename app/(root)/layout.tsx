import { ToastContainer } from 'react-toastify';

import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import ThemeProvider from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation/Navigation';
import SideElements from '@/components/SideElements';

import { AOSInit } from '@/utils/aos';

import { getSiteLogo } from '@/sanity/queries/getSiteLogo';
import { getProfileInfo } from '@/sanity/queries/getProfile';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const logo = await getSiteLogo();
  const { resume } = await getProfileInfo(['resume']);

  return (
    <html lang='en' suppressHydrationWarning>
      <AOSInit />
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <ToastContainer />
          <Navigation cvURL={resume} logoSrc={logo.src} />
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
