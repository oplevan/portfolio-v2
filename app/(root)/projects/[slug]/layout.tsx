import React from 'react';

export default function ProjectDetailsLayout({ children }: { children: React.ReactNode }) {
  return <section className='project-details'>{children}</section>;
}
