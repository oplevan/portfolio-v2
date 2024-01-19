'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LuMoonStar, LuSun } from 'react-icons/lu';
import Button from '@/components/Button/Button';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='absolute top-4 left-6 lg:relative lg:top-0 lg:left-0'>
      <Button
        as='button'
        variant='icon-round'
        clickHandler={() => (currentTheme === 'dark' ? setTheme('light') : setTheme('dark'))}
        icon={currentTheme === 'dark' ? <LuSun /> : <LuMoonStar />}
      />
    </div>
  );
}
