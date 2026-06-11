import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  AnimatePresence,
} from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUp, Menu } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { site } from '@/data/site';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  // Touch devices have no meaningful hover cursor; skip entirely.
  const [isFinePointer] = useState(
    () => typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches,
  );

  useEffect(() => {
    if (!isFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glass-panel') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-primary/50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? 'rgba(211, 187, 255, 0.1)' : 'rgba(211, 187, 255, 0)',
      }}
      transition={{
        scale: { type: 'spring', stiffness: 300, damping: 20 },
        backgroundColor: { duration: 0.2 },
      }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-gradient-to-r from-primary-container to-secondary-container origin-left"
      style={{ scaleX }}
    />
  );
}

export function Navbar() {
  const activeSection = useScrollSpy(
    site.navSections.map((section) => section.id),
    300,
  );

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed top-0 left-0 right-0 z-50 justify-between items-center px-8 py-3 bg-surface/5 backdrop-blur-xl rounded-full mt-4 mx-auto w-[90%] max-w-container-max border border-on-surface/10 shadow-xl hidden md:flex"
      >
        <div className="font-display-hero text-headline-md tracking-tighter text-on-surface flex items-center gap-3 font-bold">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
            <span className="font-display-hero text-body-lg text-white font-bold">R</span>
          </div>
          {site.brand}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            {site.navSections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'true' : undefined}
                className={`transition-colors font-display-hero text-body-md scale-95 active:scale-90 hover:bg-white/10 px-3 py-1 rounded-md ${
                  activeSection === id
                    ? 'text-primary bg-primary/10'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <a
          href="#contact"
          className="text-primary font-display-hero text-body-md border border-primary/30 px-6 py-2 rounded-full hover:bg-primary/10 transition-all duration-300 scale-95 active:scale-90"
        >
          Contact
        </a>
      </nav>

      {/* Mobile Nav Header */}
      <header className="md:hidden fixed top-0 w-full z-50 p-margin-mobile glass-panel border-b border-on-surface/10 flex justify-between items-center">
        <div className="font-display-hero text-headline-lg-mobile tracking-tighter text-on-surface">
          {site.brand}
        </div>
        <button className="text-on-surface" aria-label="Open menu">
          <Menu className="w-7 h-7" aria-hidden="true" />
        </button>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-stack-xl px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto bg-surface-dim border-t border-outline-variant/20 mt-24">
      <div className="font-display-hero text-headline-md text-primary mb-6 md:mb-0 opacity-80 hover:opacity-100 transition-opacity">
        {site.brand}
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant text-center md:text-left mb-6 md:mb-0">
        {site.copyright}
      </div>
      <ul className="flex gap-6">
        {site.socials.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100 font-label-sm text-label-sm uppercase"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export function GlowLayers() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-[-200px] left-[-200px] w-[800px] h-[800px] rounded-full pointer-events-none z-0 filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.15) 0%, rgba(0,0,0,0) 70%)' }}
      ></div>
      <div
        aria-hidden="true"
        className="fixed bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none z-0 filter blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(5,102,217,0.12) 0%, rgba(0,0,0,0) 70%)' }}
      ></div>
    </>
  );
}

export function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 500);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group hover:shadow-[0_0_20px_rgba(211,187,255,0.4)] transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
