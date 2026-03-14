'use client';

interface PawPatternProps {
  className?: string;
}

export default function PawPattern({ className = '' }: PawPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pawPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
            <g fill="currentColor" opacity="0.06">
              {/* Main pad */}
              <ellipse cx="30" cy="45" rx="10" ry="12" />
              {/* Top left toe */}
              <ellipse cx="18" cy="28" rx="6" ry="7" transform="rotate(-15 18 28)" />
              {/* Top right toe */}
              <ellipse cx="42" cy="28" rx="6" ry="7" transform="rotate(15 42 28)" />
              {/* Middle left toe */}
              <ellipse cx="13" cy="38" rx="5" ry="6" transform="rotate(-30 13 38)" />
              {/* Middle right toe */}
              <ellipse cx="47" cy="38" rx="5" ry="6" transform="rotate(30 47 38)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pawPattern)" />
      </svg>
    </div>
  );
}
