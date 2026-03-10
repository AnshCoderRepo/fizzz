import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── CUSTOM CURSOR ──
      const cursor = document.getElementById('cursor');
      const follower = document.getElementById('cursorFollower');

      const onMouseMove = (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.05 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.25, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', onMouseMove);

      const interactiveEls = document.querySelectorAll('a, button, .stat-item');
      interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, { width: 20, height: 20, duration: 0.2 });
          gsap.to(follower, { scale: 2, opacity: 0.5, duration: 0.2 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, { width: 8, height: 8, duration: 0.2 });
          gsap.to(follower, { scale: 1, opacity: 1, duration: 0.2 });
        });
      });

      // ── SCROLL PROGRESS BAR ──
      const progressBar = document.getElementById('progressBar');
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: self => {
          gsap.to(progressBar, { scaleX: self.progress, duration: 0.1, ease: 'none' });
        },
      });

      // ── INTRO TIMELINE ──
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to('.headline .word span', {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power4.out',
      });

      tl.fromTo('#carVisual',
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
        '-=0.6'
      );

      tl.to('#heroTagline', {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      }, '-=1');

      tl.to('.stat-item', {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
      }, '-=0.6');

      tl.to('.stat-divider', { opacity: 1, duration: 0.5 }, '-=0.6');

      tl.to(['#heroBadge', '#scrollIndicator', '#ticker'], {
        opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
      }, '-=0.4');

      tl.to('.speed-lines', { opacity: 1, duration: 0.4 }, '-=0.8');
      tl.to('.speed-line', {
        scaleX: 1, duration: 0.5, stagger: 0.08,
        ease: 'power2.inOut', transformOrigin: 'right',
      }, '<');

      // ── WHEEL SPIN ──
      gsap.to(['#carSvg-frontWheel', '#carSvg-rearWheel', '#scrollCarSvg-frontWheel', '#scrollCarSvg-rearWheel'], {
        rotation: 360,
        transformOrigin: 'center center',
        duration: 1.5,
        repeat: -1,
        ease: 'none',
      });

      // ── SCROLL CAR INITIAL STATE ──
      gsap.set('#scrollCar', { opacity: 0, x: '-20vw' });

      // ── SCROLL SECTION TIMELINE ──
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-section',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1, // Reduced for more precise control
        },
      });

      scrollTl
        .to('#hero .hero-content', { opacity: 0, y: -50, duration: 0.3, immediateRender: false }, 0)
        .to('#hero #carVisual', { opacity: 0, x: 150, duration: 0.3, immediateRender: false }, 0)
        .to('#scrollCar', { opacity: 1, x: '50vw', duration: 0.5 }, 0.1) // Bring car into left view
        .to('#scrollSpeedLines', { opacity: 1, duration: 0.3 }, 0.3)
        .to('#scrollSpeedLines .speed-line', {
          scaleX: 1, stagger: 0.05, duration: 0.3, transformOrigin: 'right',
        }, 0.3)
        .to('#scrollPhase1', { opacity: 1, x: 0, duration: 0.4 }, 0.2)
        .to('#scrollCar', { x: '80vw', duration: 0.8, ease: 'none' }, 0.3) // Slowly creep forward across screen
        .to('#scrollCarSvg', { scaleX: 1.1, duration: 0.5, ease: 'power1.inOut' }, 0.35)
        .to('#scrollCarSvg', { scaleX: 1, duration: 0.5, ease: 'power1.inOut' }, 0.65)
        .to('#scrollPhase1', { opacity: 0, x: -50, duration: 0.3 }, 0.6)
        .to('#scrollPhase2', { opacity: 1, x: 0, duration: 0.4 }, 0.65)
        .to('#scrollCar', { x: '200vw', duration: 1, ease: 'none' }, 0.7) // Accelerate entirely off screen right
        .to('#scrollSpeedLines .speed-line', {
          scaleX: 2.5, stagger: 0.03, duration: 0.4, transformOrigin: 'left',
        }, 0.7)
        .to(['#scrollPhase2'], { opacity: 0, duration: 0.3 }, 1.5);

      // ── BIG BACKGROUND NUMBER ──
      ScrollTrigger.create({
        trigger: '#scroll-section',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: self => {
          const el = document.querySelector('#bgNumber span');
          if (el) {
            const n = Math.min(Math.floor(self.progress * 2) + 1, 2);
            el.textContent = String(n).padStart(2, '0');
          }
        },
      });

      // ── ABOUT SECTION ANIMATIONS ──
      gsap.from('.about-left h2', {
        scrollTrigger: { trigger: '#about', start: 'top 80%' },
        y: 80, opacity: 0, duration: 1.2, ease: 'power3.out',
      });

      gsap.from('.about-left p', {
        scrollTrigger: { trigger: '#about', start: 'top 75%' },
        y: 40, opacity: 0, duration: 1, delay: 0.2, ease: 'power2.out',
      });

      gsap.from('.feature-item', {
        scrollTrigger: { trigger: '.about-right', start: 'top 85%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.25, ease: 'power2.out',
      });

      // ── HERO PARALLAX ──
      gsap.to('#heroGlow', {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -150,
        scale: 1.4,
        opacity: 0.5,
        ease: 'none',
      });

      // ── NAV BLUR ON SCROLL ──
      ScrollTrigger.create({
        start: 'top -80',
        onUpdate: self => {
          const nav = document.getElementById('navbar');
          if (nav) nav.style.backdropFilter = self.direction === 1 ? 'blur(20px)' : 'blur(0px)';
        },
      });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    });

    return () => ctx.revert();
  }, []);
};

export default useAnimations;
