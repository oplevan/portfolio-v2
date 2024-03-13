'use client';

import { useState, useEffect } from 'react';
import cn from 'classnames';

export default function Header({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);
    currentScrollPos < prevScrollPos ? setIsMinimized(true) : setIsMinimized(false);
    currentScrollPos === 0 && setIsMinimized(false); // allows nav to stay visible when click on close menu button
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={cn(!visible ? 'hidden' : '', isMinimized ? 'minimized' : '')}>
      <div className='flex w-full h-full items-center justify-between px-6 lg:px-16 lg:justify-center'>{children}</div>
    </header>
  );
}
