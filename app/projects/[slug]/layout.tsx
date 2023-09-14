import React from 'react';
import Button from '@/app/components/Button/Button';

export default function ProjectDetailsLayout({ children }: { children: React.ReactNode }) {
  return <section className='project-details'>{children}</section>;
}
