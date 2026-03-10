const CarSVG = ({ id = 'carSvg', style = {} }) => (
  <svg
    id={id}
    className="car-svg"
    viewBox="0 0 800 400"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#16213e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0a0a0a', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#e8ff3a', stopOpacity: 0.9 }} />
        <stop offset="100%" style={{ stopColor: '#b8cc00', stopOpacity: 0.7 }} />
      </linearGradient>
      <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4a9eff', stopOpacity: 0.5 }} />
        <stop offset="100%" style={{ stopColor: '#1a4a8a', stopOpacity: 0.3 }} />
      </linearGradient>
      <radialGradient id="groundGlow" cx="50%" cy="100%" r="50%">
        <stop offset="0%" style={{ stopColor: '#e8ff3a', stopOpacity: 0.12 }} />
        <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    {/* Ground glow */}
    <ellipse cx="400" cy="355" rx="320" ry="30" fill="url(#groundGlow)" opacity="0.7" />
    <ellipse cx="400" cy="360" rx="260" ry="15" fill="black" opacity="0.6" />

    {/* Body Lower */}
    <path d="M 100 280 Q 120 310 160 320 L 640 320 Q 680 310 700 280 L 680 250 L 120 250 Z"
      fill="url(#bodyGrad)" stroke="rgba(232,255,58,0.15)" strokeWidth="1" />

    {/* Body Upper / Cabin */}
    <path d="M 200 250 Q 220 180 280 155 L 440 145 Q 510 148 550 165 Q 590 185 610 220 L 640 250 Z"
      fill="url(#bodyGrad)" stroke="rgba(100,100,120,0.4)" strokeWidth="1" />

    {/* Roof */}
    <path d="M 250 250 Q 265 185 300 160 L 430 148 Q 500 150 535 168 Q 565 185 580 220 L 600 250 Z"
      fill="#111520" />

    {/* Windshield */}
    <path d="M 305 165 Q 320 155 435 148 L 490 170 Q 510 185 520 215 L 300 215 Q 295 195 305 165 Z"
      fill="url(#glassGrad)" stroke="rgba(74,158,255,0.3)" strokeWidth="1" opacity="0.8" />
    <path d="M 320 158 L 410 150 L 420 162 L 325 170 Z" fill="white" opacity="0.07" />

    {/* Rear Window */}
    <path d="M 525 170 Q 545 185 565 220 L 595 220 L 575 175 Q 555 165 525 170 Z"
      fill="url(#glassGrad)" opacity="0.6" />

    {/* Side Windows */}
    <path d="M 215 250 L 245 200 L 295 200 L 280 250 Z"
      fill="url(#glassGrad)" opacity="0.5" stroke="rgba(74,158,255,0.2)" strokeWidth="0.5" />

    {/* Door Lines */}
    <line x1="330" y1="220" x2="340" y2="315" stroke="rgba(232,255,58,0.3)" strokeWidth="1.5" />
    <line x1="495" y1="220" x2="500" y2="315" stroke="rgba(232,255,58,0.3)" strokeWidth="1.5" />

    {/* Accent Stripe */}
    <path d="M 115 265 L 685 265" stroke="url(#accentGrad)" strokeWidth="2.5" filter="url(#glow)" />

    {/* Front Fascia */}
    <path d="M 100 280 Q 95 295 98 310 L 160 320 L 120 280 Z"
      fill="#0d0f17" stroke="rgba(232,255,58,0.2)" strokeWidth="1" />

    {/* Headlight */}
    <path d="M 102 275 Q 108 265 125 270 L 145 280 Q 130 290 108 285 Z"
      fill="#fff" opacity="0.9" filter="url(#glow)" />
    <path d="M 102 275 Q 108 265 125 270 L 145 280 Q 130 290 108 285 Z"
      fill="rgba(232,255,58,0.3)" filter="url(#softGlow)" />
    <line x1="106" y1="278" x2="140" y2="282" stroke="#e8ff3a" strokeWidth="2" filter="url(#glow)" />

    {/* Taillight */}
    <path d="M 690 275 Q 700 270 705 285 L 698 300 Q 685 295 680 280 Z"
      fill="#ff2244" opacity="0.8" filter="url(#glow)" />
    <line x1="692" y1="278" x2="700" y2="290" stroke="#ff4466" strokeWidth="1.5" opacity="0.9" />
    <line x1="696" y1="276" x2="703" y2="288" stroke="#ff6688" strokeWidth="1" opacity="0.7" />

    {/* Spoiler */}
    <rect x="630" y="238" width="60" height="5" rx="2" fill="#1a1a2e" stroke="rgba(232,255,58,0.4)" strokeWidth="1" />
    <rect x="645" y="243" width="4" height="14" fill="#0d0f17" stroke="rgba(232,255,58,0.2)" strokeWidth="0.5" />
    <rect x="680" y="243" width="4" height="14" fill="#0d0f17" stroke="rgba(232,255,58,0.2)" strokeWidth="0.5" />

    {/* Front Bumper / Vent */}
    <path d="M 100 295 Q 105 300 130 305 L 175 308 L 170 315 L 120 315 Q 105 310 100 300 Z"
      fill="rgba(232,255,58,0.05)" stroke="rgba(232,255,58,0.2)" strokeWidth="1" />
    <rect x="110" y="296" width="40" height="6" rx="1" fill="none" stroke="rgba(232,255,58,0.35)" strokeWidth="0.8" />
    {[120, 128, 136, 144].map(x => (
      <line key={x} x1={x} y1="296" x2={x} y2="302" stroke="rgba(232,255,58,0.2)" strokeWidth="0.5" />
    ))}

    {/* Sill */}
    <rect x="175" y="308" width="450" height="10" rx="2" fill="#0a0b10" stroke="rgba(232,255,58,0.15)" strokeWidth="0.5" />

    {/* Wheel Arches */}
    <path d="M 120 320 Q 125 355 200 360 Q 275 365 280 320 Z" fill="#08090e" stroke="rgba(50,50,60,0.5)" strokeWidth="1" />
    <path d="M 510 320 Q 515 355 590 360 Q 665 365 670 320 Z" fill="#08090e" stroke="rgba(50,50,60,0.5)" strokeWidth="1" />

    {/* Front Wheel */}
    <g id={`${id}-frontWheel`} transform="translate(200, 340)">
      <circle r="48" fill="#111" stroke="#222" strokeWidth="2" />
      <circle r="38" fill="none" stroke="#444" strokeWidth="3" />
      <circle r="34" fill="#1a1a1a" />
      <g stroke="#888" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="-34" x2="0" y2="-10" />
        <line x1="32.3" y1="-10.4" x2="9.5" y2="-3.1" />
        <line x1="19.9" y1="28.4" x2="5.9" y2="8.4" />
        <line x1="-19.9" y1="28.4" x2="-5.9" y2="8.4" />
        <line x1="-32.3" y1="-10.4" x2="-9.5" y2="-3.1" />
      </g>
      <circle r="9" fill="#333" stroke="#555" strokeWidth="2" />
      <circle r="4" fill="#e8ff3a" opacity="0.8" />
      <circle r="22" fill="none" stroke="rgba(232,255,58,0.08)" strokeWidth="8" />
      <path d="M -20 -28 Q 0 -38 20 -28" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
    </g>

    {/* Rear Wheel */}
    <g id={`${id}-rearWheel`} transform="translate(590, 340)">
      <circle r="48" fill="#111" stroke="#222" strokeWidth="2" />
      <circle r="38" fill="none" stroke="#444" strokeWidth="3" />
      <circle r="34" fill="#1a1a1a" />
      <g stroke="#888" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="-34" x2="0" y2="-10" />
        <line x1="32.3" y1="-10.4" x2="9.5" y2="-3.1" />
        <line x1="19.9" y1="28.4" x2="5.9" y2="8.4" />
        <line x1="-19.9" y1="28.4" x2="-5.9" y2="8.4" />
        <line x1="-32.3" y1="-10.4" x2="-9.5" y2="-3.1" />
      </g>
      <circle r="9" fill="#333" stroke="#555" strokeWidth="2" />
      <circle r="4" fill="#e8ff3a" opacity="0.8" />
      <circle r="22" fill="none" stroke="rgba(232,255,58,0.08)" strokeWidth="8" />
      <path d="M -20 -28 Q 0 -38 20 -28" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
    </g>

    {/* Exhaust */}
    <rect x="690" y="308" width="20" height="6" rx="3" fill="#0d0f17" stroke="rgba(232,255,58,0.3)" strokeWidth="1" />
    <rect x="695" y="306" width="14" height="3" rx="2" fill="#0d0f17" stroke="rgba(232,255,58,0.2)" strokeWidth="0.5" />

    {/* Brand Badge */}
    <text x="400" y="260" fontFamily="'Bebas Neue', sans-serif" fontSize="14"
      fill="rgba(232,255,58,0.5)" textAnchor="middle" letterSpacing="4">
      ITZFIZZ · SPORT
    </text>
  </svg>
);

export default CarSVG;
