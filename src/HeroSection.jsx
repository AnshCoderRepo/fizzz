import React, { Fragment } from 'react';
import CarSVG from './CarSVG';

const WELCOME_LETTERS = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];
const BRAND_LETTERS = ['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'];

const STATS = [
  { number: '98%', label: 'Client Satisfaction' },
  { number: '250+', label: 'Projects Delivered' },
  { number: '40+', label: 'Awards Won' },
  { number: '12x', label: 'Faster Performance' },
];

const TICKER_ITEMS = [
  'Performance ★', 'Speed · Precision · Design',
  'ITZFIZZ Digital Studio ★', 'Scroll-Driven Experiences',
  'Motion · UI · Branding ★', 'Award-Winning Work',
];

const HeroSection = () => (
  <section id="hero">
    <div className="hero-glow" id="heroGlow" />
    <div className="hero-glow-2" />

    {/* Live badge */}
    <div className="hero-badge" id="heroBadge">
      <div className="badge-dot" />
      <span className="badge-text">Live — New Collection</span>
    </div>

    <div className="hero-content">
      {/* Headline */}
      <div className="headline-wrapper">
        <h1 className="headline" id="headline">
          {WELCOME_LETTERS.map((letter, i) => (
            <span key={`w-${i}`} className="word">
              <span>{letter}</span>
            </span>
          ))}
          <span style={{ display: 'inline-block', width: '0.3em' }} />
          {BRAND_LETTERS.map((letter, i) => (
            <span key={`b-${i}`} className="word brand">
              <span>{letter}</span>
            </span>
          ))}
        </h1>
      </div>

      {/* Sub Row */}
      <div className="hero-sub-row">
        <p className="hero-tagline" id="heroTagline">
          Redefining motion and digital experiences — where speed meets precision in every pixel.
        </p>

        {/* Stats */}
        <div className="stats-row" id="statsRow">
          {STATS.map((stat, i) => (
            <Fragment key={stat.number}>
              <div className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {i < STATS.length - 1 && (
                <div className="stat-divider" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>

    {/* Car Visual */}
    <div className="visual-container" id="carVisual">
      <div className="car-svg-wrapper">
        <div className="speed-lines" id="speedLines">
          {[90, 70, 100, 60, 85, 75, 50, 95].map((w, i) => (
            <div key={i} className="speed-line" style={{ width: `${w}%` }} />
          ))}
        </div>
        <CarSVG id="carSvg" />
        <div className="car-reflection" />
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="scroll-indicator" id="scrollIndicator">
      <span>Scroll</span>
      <div className="scroll-line" />
    </div>

    {/* Ticker */}
    <div className="ticker" id="ticker">
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="ticker-item">
            {item.includes('★')
              ? <>{item.replace(' ★', '')} <span className="highlight">★</span></>
              : item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
