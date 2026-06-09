import React from 'react';

interface MandalaProps {
  deityId: string;
  className?: string;
  size?: number;
  animate?: boolean;
}

export const MandalaGraphic: React.FC<MandalaProps> = ({
  deityId,
  className = '',
  size = 200,
  animate = true,
}) => {
  const getDeityGraphic = () => {
    switch (deityId) {
      case 'vishnu':
        return (
          <g>
            {/* Outer Petals */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 360) / 16;
              return (
                <path
                  key={`pet-a-${i}`}
                  d="M100,20 Q95,50 100,55 Q105,50 100,20"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.75"
                  transform={`rotate(${angle} 100 100)`}
                  opacity="0.8"
                />
              );
            })}
            {/* Sudarshana Chakra Spines */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              return (
                <g key={`spine-${i}`} transform={`rotate(${angle} 100 100)`}>
                  <line x1="100" y1="40" x2="100" y2="100" stroke="#D4AF37" strokeWidth="2.5" />
                  <polygon points="100,30 95,43 105,43" fill="#D4AF37" />
                  <circle cx="100" cy="55" r="3" fill="#3b82f6" />
                </g>
              );
            })}
            {/* Coaxial Circles */}
            <circle cx="100" cy="100" r="75" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="12" fill="#1e293b" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="100" cy="100" r="5" fill="#D4AF37" />
          </g>
        );

      case 'durga':
        return (
          <g>
            {/* Concentric Triangles - Sri Yantra motif */}
            <polygon points="100,45 145,123 55,123" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.9" />
            <polygon points="100,155 145,77 55,77" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.9" />
            
            <polygon points="100,60 135,120 65,120" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.7" />
            <polygon points="100,140 135,80 65,80" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.7" />

            {/* Circular Petals */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <g key={`dur-p-${i}`} transform={`rotate(${angle} 100 100)`}>
                  <path d="M100,30 C112,30 115,55 100,60 C85,55 88,30 100,30" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                  <circle cx="100" cy="35" r="1.5" fill="#dc2626" />
                </g>
              );
            })}
            
            {/* Outer rings with spiked flames */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="5,2" />
            <circle cx="100" cy="100" r="25" fill="none" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="100" cy="100" r="10" fill="#dc2626" opacity="0.3" />
            <circle cx="100" cy="100" r="4" fill="#D4AF37" />
          </g>
        );

      case 'shiva':
        return (
          <g>
            {/* Sacred crescent moon left-top */}
            <path d="M85,55 A15,15 0 0,1 115,85 A20,20 0 1,0 85,55" fill="#e2e8f0" stroke="#D4AF37" strokeWidth="0.5" transform="rotate(-30 100 100)" opacity="0.8" />
            {/* Trishula intersecting vertically */}
            <g transform="translate(100, 100) scale(0.85)">
              {/* Central Prong */}
              <line x1="0" y1="-75" x2="0" y2="60" stroke="#D4AF37" strokeWidth="2" />
              <polygon points="0,-85 -4,-70 4,-70" fill="#D4AF37" />
              {/* Curved Prongs */}
              <path d="M-22,-45 C-22,-15 -2,-15 0,-15 C2,-15 22,-15 22,-45" fill="none" stroke="#D4AF37" strokeWidth="2.2" />
              <polygon points="-22,-50 -25,-42 -19,-42" fill="#D4AF37" />
              <polygon points="22,-50 19,-42 25,-42" fill="#D4AF37" />
              {/* Damaru Drum in center */}
              <path d="M-10,-4 M10,-4 L-10,12 L10,12 L-10,-4 Z" fill="#111827" stroke="#D4AF37" strokeWidth="1.5" />
              <line x1="-10" y1="4" x2="10" y2="4" stroke="#06b6d4" strokeWidth="1" />
              <circle cx="-13" cy="4" r="2" fill="#D4AF37" />
              <circle cx="13" cy="4" r="2" fill="#D4AF37" />
            </g>
            {/* Outer rings */}
            <circle cx="100" cy="100" r="82" fill="none" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="100" cy="100" r="75" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 4" />
            {[...Array(6)].map((_, i) => {
              const angle = (i * 360) / 6;
              return (
                <circle
                  key={`shv-d-${i}`}
                  cx="100"
                  cy="25"
                  r="2.5"
                  fill="#06b6d4"
                  transform={`rotate(${angle} 100 100)`}
                />
              );
            })}
          </g>
        );

      case 'indra':
        return (
          <g>
            {/* Concentric octagons representing sky boundaries */}
            {[...Array(3)].map((_, idx) => {
              const scale = 1 - idx * 0.2;
              const r = 80 * scale;
              const points = [...Array(8)].map((_, i) => {
                const angle = (i * Math.PI) / 4;
                const x = 100 + r * Math.cos(angle);
                const y = 100 + r * Math.sin(angle);
                return `${x},${y}`;
              }).join(' ');
              return (
                <polygon
                  key={`oct-${idx}`}
                  points={points}
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth={1.5 - idx * 0.4}
                  opacity={1 - idx * 0.25}
                />
              );
            })}

            {/* Crossed Vajra Thunderbolts */}
            {[0, 90].map((angle, k) => (
              <g key={`vaj-${k}`} transform={`rotate(${angle} 100 100) scale(0.9)`}>
                {/* Central sphere */}
                <circle cx="100" cy="100" r="8" fill="#f59e0b" stroke="#D4AF37" strokeWidth="1" />
                {/* Top shaft & prongs */}
                <line x1="100" y1="70" x2="100" y2="130" stroke="#D4AF37" strokeWidth="2.5" />
                <path d="M90,75 C90,60 100,50 100,50 C100,50 110,60 110,75 C100,75 100,75 90,75" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                <path d="M94,75 C94,65 100,58 100,58 C100,58 106,65 106,75" fill="none" stroke="#D4AF37" strokeWidth="1" />
                {/* Bottom shaft & prongs */}
                <path d="M90,125 C90,140 100,150 100,150 C100,150 110,140 110,125" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                <path d="M94,125 C94,135 100,142 100,142 C100,142 106,135 106,125" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </g>
            ))}

            {/* Lightning flash rings */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="10,4,2,4" />
          </g>
        );

      case 'agni':
        return (
          <g>
            {/* Triangular Fire Yantra base */}
            <polygon points="100,25 165,138 35,138" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
            <polygon points="100,45 150,131 50,131" fill="none" stroke="#ea580c" strokeWidth="1" />

            {/* Triple layered dynamic flame outlines in center */}
            <g transform="translate(100, 100) scale(0.8)">
              {/* Outer flame */}
              <path d="M0,35 Q-25,10 -25,-20 Q-25,-55 0,-80 Q25,-55 25,-20 Q25,10 0,35" fill="none" stroke="#ea580c" strokeWidth="2.5" />
              {/* Mid flame */}
              <path d="M0,25 Q-15,5 -15,-15 Q-15,-45 0,-65 Q15,-45 15,-15 Q15,5 0,25" fill="none" stroke="#f97316" strokeWidth="1.5" />
              {/* Innermost flame */}
              <path d="M0,15 Q-7,0 -7,-10 Q-7,-30 0,-45 Q7,-30 7,-10 Q7,0 0,15" fill="#facc15" opacity="0.8" />
            </g>

            {/* Yajna Altar Base lines */}
            <line x1="30" y1="145" x2="170" y2="145" stroke="#D4AF37" strokeWidth="3" />
            <line x1="45" y1="153" x2="155" y2="153" stroke="#D4AF37" strokeWidth="1.5" />
            
            {/* Outer dotted path */}
            <circle cx="100" cy="105" r="72" fill="none" stroke="#ea580c" strokeWidth="0.75" strokeDasharray="3 3" />
          </g>
        );

      case 'vayu':
        return (
          <g>
            {/* Octagonal shield frame */}
            {[80, 68].map((r, idx) => {
              const points = [...Array(8)].map((_, i) => {
                const angle = (i * Math.PI) / 4 + Math.PI / 8;
                const x = 100 + r * Math.cos(angle);
                const y = 100 + r * Math.sin(angle);
                return `${x},${y}`;
              }).join(' ');
              return (
                <polygon
                  key={`v-oct-${idx}`}
                  points={points}
                  fill="none"
                  stroke={idx === 0 ? "#D4AF37" : "#10b981"}
                  strokeWidth={idx === 0 ? 1.5 : 0.75}
                  strokeDasharray={idx === 1 ? "4 2" : undefined}
                />
              );
            })}

            {/* Swirling dynamic air paths representing wind currents */}
            <g stroke="#10b981" fill="none" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
              <path d="M60,80 C60,60 80,50 100,50 C120,50 140,70 140,100 C140,120 120,135 100,135 C85,135 75,120 75,105 C75,95 85,85 95,85 C105,85 112,94 110,105 C108,112 100,115 95,110" />
              <path d="M140,120 C130,130 115,145 100,145 C75,145 55,125 55,100 C55,75 75,55 100,55" stroke="#D4AF37" strokeWidth="0.8" />
            </g>

            {/* Boundary circles */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="10" fill="none" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="100" cy="100" r="3" fill="#10b981" />
          </g>
        );

      default:
        return (
          <circle cx="100" cy="100" r="50" fill="none" stroke="#D4AF37" strokeWidth="2" />
        );
    }
  };

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`${animate ? 'animate-spin-slow' : ''} ${className}`}
      style={{ overflow: 'visible' }}
    >
      {getDeityGraphic()}
    </svg>
  );
};
