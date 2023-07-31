'use client';
import { Fragment, useState } from 'react';
import { Transition, Listbox } from '@headlessui/react';
import { LuMoonStar } from 'react-icons/lu';
import { PiSunBold } from 'react-icons/pi';
import { useColorScheme } from '../../hooks/useColorScheme';

const colorThemes = [
  { name: 'Light', icon: <PiSunBold /> },
  { name: 'Dark', icon: <LuMoonStar /> },
];

export default function SelectThemeColor() {
  const { isDark, setIsDark } = useColorScheme();
  const [selected, setSelected] = useState(isDark ? colorThemes[1] : colorThemes[0]);
  return (
    <div className='relative'>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className='p-2 text-light-primary dark:text-dark-primary cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-lg sm:text-sm'>
          {selected.icon}
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Listbox.Options className='absolute z-50 left-0 lg:left-1/2 lg:-translate-x-1/2 top-full bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-32 py-1 text-md text-slate-700 dark:bg-dark-lightest-navy dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-1'>
            {colorThemes.map((theme, themeIdx) => (
              <Listbox.Option
                key={themeIdx}
                className={({ active }) => `py-1 px-2 flex items-center cursor-pointer ${active ? 'bg-slate-100 dark:bg-slate-600/30' : ''}`}
                value={theme}
                onClick={() => setIsDark(theme.name === 'Dark' ? true : false)}
              >
                {({ selected }) => (
                  <div className={`flex items-center gap-2 ${selected ? 'text-light-primary dark:text-dark-primary' : ''}`}>
                    {theme.icon}
                    {theme.name}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
