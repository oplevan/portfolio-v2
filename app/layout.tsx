'use client';
// import { Roboto } from 'next/font/google';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import './styles/globals.scss';
import 'tw-elements/dist/css/tw-elements.min.css';

// const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style> */}
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
