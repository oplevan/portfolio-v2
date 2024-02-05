import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import ThemeProvider from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import SideElements from '@/components/SideElements';
import Header from '@/components/Header';
import SiteLogo from '@/components/SiteLogo';

import ResumeButton from '@/components/ResumeButton';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import PageWrapper from '@/components/page-wrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <Header>
            <SiteLogo />
            <Navigation>
              <ThemeSwitcher />
              <ResumeButton />
            </Navigation>
            <div className='hidden lg:flex justify-end items-center gap-10'>
              <ThemeSwitcher />
              <ResumeButton />
            </div>
          </Header>
          <PageWrapper>{children}</PageWrapper>
          <footer className='text-center pb-10 px-16'>
            <small>
              Copyright &copy; 2023 Oleg Plevan. <span className='whitespace-nowrap'>All rights reserved.</span>
            </small>
          </footer>
          <SideElements />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
