'use client';

import { LuMoonStar, LuSun } from 'react-icons/lu';
import { useColorScheme } from '../../hooks/useColorScheme';
import Button from '@/app/components/Button/Button';

export default function SelectThemeColor() {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className='relative'>
      <Button as='button' variant='icon-round' clickHandler={() => setIsDark(!isDark)} icon={isDark ? <LuSun /> : <LuMoonStar />} />
    </div>
  );
}
