'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 20,
      disable: 'phone',
      once: true,
      anchorPlacement: 'top-bottom',
      easing: 'ease-in-out',
    });
  }, []);

  return null;
};
