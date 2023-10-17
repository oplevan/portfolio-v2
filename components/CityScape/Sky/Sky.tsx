import React from 'react';
import './Sky.scss';

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Sky({ id, children }: Props) {
  return (
    <section id={id} className='sky-parent'>
      {children}
    </section>
  );
}
