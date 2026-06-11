import { lazy, Suspense, useEffect } from 'react';
import {
  Navbar,
  Footer,
  GlowLayers,
  ScrollProgress,
  CustomCursor,
  BackToTop,
} from '@/components/layout/Layout';
import { HeroSection, ExperienceSection } from '@/components/sections/HeroExperience';
import { SkillsProjects } from '@/components/sections/SkillsProjects';
import { PhotographyContact } from '@/components/sections/PhotographyContact';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const ShaderBackground = lazy(() =>
  import('@/components/backgrounds/ShaderBackground').then((m) => ({
    default: m.ShaderBackground,
  })),
);

/** Lightweight CSS stand-in shown while WebGL loads, fails, or motion is reduced. */
function GradientFallback() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-2] pointer-events-none opacity-40"
      style={{
        background:
          'linear-gradient(180deg, #0a0a0a 0%, rgba(109,40,217,0.12) 45%, #0a0a0a 100%)',
      }}
    />
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();

  // Smooth, deep-linkable section navigation.
  useEffect(() => {
    const handleNavClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a');
      const href = anchor?.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;

      const element = document.getElementById(href.substring(1));
      if (!element) return;

      event.preventDefault();
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      history.pushState(null, '', href);
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, [reducedMotion]);

  // Honor a hash present on initial load (deep links).
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      document.getElementById(hash.substring(1))?.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <a href="#main-content" className="skip-link font-label-sm text-label-sm uppercase">
        Skip to content
      </a>

      {!reducedMotion && <CustomCursor />}
      <ScrollProgress />
      <BackToTop />

      <ErrorBoundary fallback={<GradientFallback />}>
        {reducedMotion ? (
          <GradientFallback />
        ) : (
          <Suspense fallback={<GradientFallback />}>
            <ShaderBackground />
          </Suspense>
        )}
      </ErrorBoundary>
      <GlowLayers />

      <Navbar />

      <main id="main-content" className="pt-[140px]">
        <HeroSection />
        <ExperienceSection />
        <SkillsProjects />
        <PhotographyContact />
      </main>

      <Footer />
    </div>
  );
}
