import React from 'react';

export default function SiteLogoWrapper({ children, isMinimized }: { children: React.ReactNode; isMinimized: boolean }) {
  return <div className={`flex justify-center ease-in-out duration-300 delay-100 hover:scale-110 ${isMinimized ? 'w-[50px]' : 'w-[70px]'}`}>{children}</div>;
}
