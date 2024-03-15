import '@/app/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer } from 'react-toastify';
import { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import SideElements from '@/components/side-elements';
import Header from '@/components/header';
import SiteLogo from '@/components/site-logo';

import ResumeButton from '@/components/resume-button';
import ThemeSwitcher from '@/components/theme-switcher';

export const metadata: Metadata = {
  title: 'Oleg Plevan | Software Developer Portfolio website',
  description: "I'm a dedicated software developer with a strong skill set honed through years of hands-on experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
          <Header>
            <SiteLogo />
            <Navigation>
              <ThemeSwitcher />
              <ResumeButton />
            </Navigation>
            <div className='hidden lg:flex justify-end items-center gap-10 lg:absolute lg:right-16'>
              <ThemeSwitcher />
              <ResumeButton />
            </div>
          </Header>
          {children}
          <footer className='text-center pb-10 px-16'>
            <small>
              Copyright &copy; 2023 Oleg Plevan. <span className='whitespace-nowrap'>All rights reserved.</span>
            </small>
          </footer>
          <SideElements />
          <ToastContainer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
