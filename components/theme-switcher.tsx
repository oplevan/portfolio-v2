'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LuMoonStar, LuSun } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

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
      <Button size='icon' onClick={() => (currentTheme === 'dark' ? setTheme('light') : setTheme('dark'))} className='rounded-full before:rounded-full'>
        {currentTheme === 'dark' ? <LuSun /> : <LuMoonStar />}
      </Button>
    </div>
  );
}
