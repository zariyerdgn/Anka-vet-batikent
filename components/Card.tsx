import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = false, className = '' }: Props) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
}
