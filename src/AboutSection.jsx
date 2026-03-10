const FEATURES = [
  {
    num: '01',
    title: 'Scroll Animations',
    desc: 'GSAP ScrollTrigger-powered animations that sync perfectly with user scroll position for a cinematic experience.',
  },
  {
    num: '02',
    title: '60fps Performance',
    desc: 'All animations use GPU-accelerated CSS properties — transform and opacity only — for buttery smooth motion.',
  },
  {
    num: '03',
    title: 'Premium Design',
    desc: 'Editorial typography, structured grids, and deliberate motion language create a premium brand presence.',
  },
];

const AboutSection = () => (
  <section id="about">
    <div className="about-grid">
      <div className="about-left">
        <h2>
          WE BUILD<br />
          <span style={{ color: 'var(--accent)' }}>FAST</span><br />
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>THINGS</span>
        </h2>
        <p>
          ITZFIZZ is a digital studio specializing in motion-first web experiences. We combine
          cutting-edge animation technology with bold visual design to create interfaces that
          don't just look good — they feel extraordinary.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
          <button style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'var(--accent)',
            color: '#000',
            border: 'none',
            padding: '1rem 2rem',
            cursor: 'pointer',
          }}>
            Our Work →
          </button>
          <button style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'transparent',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            padding: '1rem 2rem',
            cursor: 'pointer',
          }}>
            Contact
          </button>
        </div>
      </div>

      <div className="about-right">
        {FEATURES.map(f => (
          <div key={f.num} className="feature-item">
            <span className="feature-num">{f.num}</span>
            <div className="feature-text">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
