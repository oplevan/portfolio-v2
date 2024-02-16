'use client';

import React, { useEffect } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <motion.main
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
      className={cn('min-h-screen', className)}
    >
      {children}
    </motion.main>
  );
}
