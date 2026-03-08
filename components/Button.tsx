import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300';
const variants = {
  primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5',
  outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:-translate-y-0.5',
  secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:shadow-lg hover:-translate-y-0.5',
};
const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', target }: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) return <Link href={href} className={cls} target={target}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
