'use client';

import { LuMoonStar } from 'react-icons/lu';
import { PiSunBold } from 'react-icons/pi';
import { useColorScheme } from '../../hooks/useColorScheme';
import Button from '@/app/components/Button/Button';

export default function SelectThemeColor() {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className='relative'>
      <Button as='button' variant='icon-round' clickHandler={() => setIsDark(!isDark)} icon={isDark ? <PiSunBold /> : <LuMoonStar />} />
    </div>
  );
}
