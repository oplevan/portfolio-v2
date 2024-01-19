'use client';

import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      className={cn('min-h-screen', className)}
    >
      {children}
    </motion.main>
  );
}
