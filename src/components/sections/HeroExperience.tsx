import { lazy, Suspense } from 'react';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { site } from '@/data/site';
import { bioChips, stats, timeline } from '@/data/experience';

const ThreeSphere = lazy(() =>
  import('@/components/backgrounds/ThreeSphere').then((m) => ({ default: m.ThreeSphere })),
);

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen w-full flex items-center justify-center pt-stack-xl overflow-hidden"
    >
      <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-60" aria-hidden="true">
        <ErrorBoundary fallback={null}>
          {!reducedMotion && (
            <Suspense fallback={null}>
              <ThreeSphere />
            </Suspense>
          )}
        </ErrorBoundary>
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center">
        <div className="reveal-up flex items-center gap-3 glass-panel rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full pulse-dot bg-secondary shadow-[0_0_8px_#0566d9]"></div>
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">{site.availability}</span>
        </div>

        <h1 className="reveal-up delay-100 font-display-hero text-headline-lg-mobile md:text-display-hero text-on-surface mb-6 leading-tight drop-shadow-2xl">
          {site.name}
        </h1>

        <div className="reveal-up delay-200 mb-10 h-8 flex justify-center items-center">
          <p className="font-label-sm text-label-sm md:text-body-lg text-primary-fixed-dim typewriter uppercase tracking-widest inline-block whitespace-nowrap">
            {site.tagline}
          </p>
        </div>

        <div className="reveal-up delay-300 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <a
            href="#projects"
            className="btn-primary-glass font-headline-md text-body-lg font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2"
          >
            View Portfolio
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-ghost-glass font-headline-md text-body-lg font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2"
          >
            Download Resume
            <Download className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <a
          href="#experience"
          className="reveal-up delay-400 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="font-label-sm text-[10px] tracking-widest uppercase">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
        </a>
      </div>

      {site.heroBadges.map((badge) => (
        <div
          key={badge.label}
          className={`hidden lg:flex absolute py-1 px-3 rounded-full border border-primary/20 bg-primary-container/10 font-label-sm text-label-sm text-primary uppercase tracking-widest transform reveal-up opacity-60 ${badge.className}`}
        >
          {badge.label}
        </div>
      ))}
    </section>
  );
}

export function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Portrait / 3D Frame Area */}
        <div className="col-span-1 md:col-span-5 relative group" style={{ perspective: '1000px' }}>
          <div className="glass-panel p-2 rounded-xl relative z-10 transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12">
            <div className="aspect-[3/4] bg-surface-container-high rounded-lg overflow-hidden relative">
              <img
                alt="Professional portrait of Rakesh Kumar Behera"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/20">
                <div className="w-2 h-2 flex rounded-full bg-secondary pulse-dot shadow-[0_0_8px_#0566d9]"></div>
                <span className="font-label-sm text-label-sm text-primary">Systems Active</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary-container/20 blur-3xl -z-10 rounded-full transform scale-90 group-hover:scale-110 transition-transform duration-700"></div>
        </div>

        {/* Biography & Core Stats */}
        <div className="col-span-1 md:col-span-7 mt-stack-md md:mt-0 pl-0 md:pl-12">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight">
            Bridging the gap between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">strategic rigor</span> and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-container">digital craftsmanship</span>.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
            I specialize in orchestrating complex systems and guiding teams through ambiguous challenges. My journey from
            Production Engineering to MBA strategy is defined by a relentless pursuit of efficiency and aesthetic perfection.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {bioChips.map((chip) => (
              <span
                key={chip}
                className="px-4 py-1.5 rounded-full font-label-sm text-label-sm bg-surface-container border border-primary/20 text-on-surface-variant"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel p-6 rounded-xl relative overflow-hidden group">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${stat.accentClass} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                <div className="font-display-hero text-headline-md mb-1 text-primary">{stat.value}</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-stack-xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Experience & Leadership</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">A chronological mapping of strategic initiatives.</p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 hidden md:block"></div>
          <div className="flex overflow-x-auto gap-6 pb-8 timeline-scroll snap-x snap-mandatory">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`min-w-[300px] md:min-w-[400px] shrink-0 snap-center relative ${
                    isEven ? 'pt-8 md:pt-16' : 'mt-8 md:mt-0 pb-8 md:pb-16'
                  }`}
                >
                  <div
                    className={`absolute ${isEven ? 'top-0' : 'bottom-0'} md:top-1/2 left-6 w-3 h-3 rounded-full md:-translate-y-1/2 hidden md:block ${
                      item.current
                        ? 'bg-primary shadow-[0_0_15px_rgba(211,187,255,0.6)]'
                        : 'bg-surface-container-highest border-2 border-outline-variant transition-colors group-hover:border-primary group-hover:bg-primary'
                    }`}
                  ></div>
                  <div
                    className={`absolute ${isEven ? 'top-0 md:-translate-y-full' : 'bottom-0 md:translate-y-0'} md:top-1/2 left-[29px] w-[1px] h-16 hidden md:block ${
                      item.current ? 'bg-primary/40' : 'bg-outline-variant/40'
                    }`}
                  ></div>
                  <div className="glass-panel p-6 rounded-xl glass-panel-hover group cursor-pointer border-opacity-10 hover:border-opacity-40">
                    <div
                      className={`font-label-sm text-label-sm mb-2 ${
                        item.current ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary transition-colors'
                      }`}
                    >
                      {item.period}
                    </div>
                    <h3 className="font-headline-md text-body-lg text-on-surface font-semibold mb-3">{item.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">{item.description}</p>
                    <div
                      className={`flex items-center font-label-sm text-label-sm transition-all ${
                        item.current
                          ? 'text-secondary group-hover:translate-x-2 transition-transform'
                          : 'text-on-surface-variant group-hover:text-secondary group-hover:translate-x-2'
                      }`}
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
