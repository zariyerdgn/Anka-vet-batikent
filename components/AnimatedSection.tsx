'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
  className?: string;
}

const variants = {
  left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
};

export default function AnimatedSection({ children, direction = 'up', delay = 0, className = '' }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
