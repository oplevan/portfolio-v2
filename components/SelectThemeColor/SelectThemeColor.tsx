'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LuMoonStar, LuSun } from 'react-icons/lu';

import Button from '@/components/Button/Button';

const SelectThemeColor = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const html = document.querySelector('html');

  useEffect(() => {
    setMounted(true);
    html?.classList.add(`${theme}`);
  }, []);

  useEffect(() => {
    html?.classList.add(`${theme}`);
    if (html != undefined) {
      html.className = theme?.toString();
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className='relative'>
      <Button
        as='button'
        variant='icon-round'
        clickHandler={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
        icon={theme === 'dark' ? <LuSun /> : <LuMoonStar />}
      />
    </div>
  );
};

export default SelectThemeColor;
