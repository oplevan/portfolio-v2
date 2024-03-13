'use client';

import { useState, useEffect } from 'react';
import cn from 'classnames';

export default function Header({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    // currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
    // currentScrollPos < prevScrollPos ? setMinimized(true) : setMinimized(false);
    // currentScrollPos === 0 && setMinimized(false); // allows nav to stay visible when click on close menu button
    currentScrollPos > 0 ? setMinimized(true) : setMinimized(false);
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={cn(!visible ? 'hidden' : '', minimized ? 'minimized' : '')}>
      <div className='flex w-full h-full items-center justify-between px-6 lg:px-16 lg:justify-center'>{children}</div>
    </header>
  );
}
