interface SectionDividerProps {
  variant?: 'wave' | 'gradient';
  color?: string;
  flip?: boolean;
}

export default function SectionDivider({ variant = 'wave', color = '#f9fafb', flip = false }: SectionDividerProps) {
  if (variant === 'gradient') {
    return (
      <div className={`h-24 bg-gradient-to-b ${flip ? 'from-transparent to-gray-50' : 'from-gray-50 to-transparent'}`} />
    );
  }

  return (
    <div className={`relative ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <path
          d="M0 80V30C240 60 480 0 720 30C960 60 1200 0 1440 30V80H0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
