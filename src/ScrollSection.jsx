import CarSVG from './CarSVG';

const PHASES = [
  {
    id: 'scrollPhase1',
    title: ['BUILT FOR', 'PERFORMANCE'],
    desc: 'Every animation, every interaction — engineered with precision and purpose.',
  },
  {
    id: 'scrollPhase2',
    title: ['SCROLL', 'DRIVEN'],
    desc: 'Fluid, scroll-synced motion that responds to every user gesture.',
  },
];

const ScrollSection = () => (
  <section id="scroll-section">
    <div className="sticky-wrapper">
      <div className="scroll-scene" id="scrollScene">

        {/* Scroll car */}
        <div className="visual-container" id="scrollCar"
          style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '55%' }}>
          <div className="car-svg-wrapper">
            <div className="speed-lines" id="scrollSpeedLines" style={{ opacity: 0 }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="speed-line" />
              ))}
            </div>
            <CarSVG id="scrollCarSvg" />
          </div>
        </div>

        {/* Text phases */}
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }} id="scrollContent">
          {PHASES.map((phase, i) => (
            <div
              key={phase.id}
              id={phase.id}
              style={{
                opacity: 0,
                transform: 'translateX(-60px)',
                position: i > 0 ? 'absolute' : 'relative',
                top: i > 0 ? 0 : 'auto',
                left: i > 0 ? '3rem' : 'auto',
              }}
            >
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                letterSpacing: '0.2em',
                color: 'var(--text)',
              }}>
                {phase.title[0]}<br />
                <span style={{ color: 'var(--accent)' }}>{phase.title[1]}</span>
              </h2>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--muted)',
                letterSpacing: '0.15em',
                marginTop: '1rem',
                maxWidth: '360px',
                lineHeight: 1.8,
              }}>
                {phase.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Big background number */}
        <div style={{
          position: 'absolute', right: '2rem', top: '50%',
          transform: 'translateY(-50%)', textAlign: 'right',
          zIndex: 0, pointerEvents: 'none'
        }} id="bgNumber">
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '25vw',
            color: 'rgba(255,255,255,0.02)',
            lineHeight: 1,
          }}>01</span>
        </div>
      </div>
    </div>
  </section>
);

export default ScrollSection;
