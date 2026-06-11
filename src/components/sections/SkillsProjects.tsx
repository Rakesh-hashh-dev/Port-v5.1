import { ArrowRight, Gem } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { orbitRings, skillTags } from '@/data/skills';
import { projects } from '@/data/projects';

export function SkillsProjects() {
  const { ref: skillsRef, isVisible: skillsVisible } = useIntersectionObserver();
  const { ref: projectsRef, isVisible: projectsVisible } = useIntersectionObserver();

  const feature = projects.find((p) => p.variant === 'feature');
  const cards = projects.filter((p) => p.variant === 'card');
  const wide = projects.find((p) => p.variant === 'wide');

  return (
    <>
      <section
        id="skills"
        ref={skillsRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div className="lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#d3bbff] animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Core Capabilities</span>
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Multidimensional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skill Architecture</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            A synthesis of high-end analytical rigor and creative technicality. Operating at the intersection of strategic
            business management and digital craftsmanship to deliver compound value.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="font-label-sm text-label-sm px-4 py-2 rounded-full border border-outline-variant bg-surface-container text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-[500px] flex justify-center items-center" aria-hidden="true">
          <div className="orbit-container">
            <div className="orbit-core">
              <Gem className="w-12 h-12 text-on-primary" aria-hidden="true" />
            </div>

            {orbitRings.map((ring) => (
              <div key={ring.ringClass} className={`orbit-ring ${ring.ringClass}`}>
                {ring.items.map((item) => (
                  <div key={item.label} className={`orbit-item ${item.positionClass}`}>
                    <div className={`orbit-item-content font-label-sm text-label-sm uppercase ${item.colorClass}`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Featured Endeavors</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A curated selection of strategic and creative implementations.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors group">
            VIEW ALL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>

        <div className="bento-grid">
          {feature && (
            <div className="bento-item glass-panel col-span-12 lg:col-span-8 row-span-2 group cursor-pointer">
              <div className="bento-img-bg" style={{ backgroundImage: `url('${feature.image}')` }}></div>
              <div className="bento-overlay"></div>
              <div className="absolute top-6 right-6 z-10">
                <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container-high/80 text-secondary border border-secondary/20 backdrop-blur-md">
                  {feature.tag}
                </span>
              </div>
              <div className="bento-content">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{feature.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-6">{feature.description}</p>
                {feature.stat && (
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 border-l-2 border-primary pl-3">
                      <span className="font-display-hero text-[24px] font-bold text-on-surface">{feature.stat.value}</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">{feature.stat.label}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {cards.map((project) => (
            <div key={project.title} className="bento-item glass-panel col-span-12 md:col-span-6 lg:col-span-4 row-span-1 group cursor-pointer">
              <div
                className="bento-img-bg"
                style={{ backgroundImage: `url('${project.image}')`, ...(project.imageFilter ? { filter: project.imageFilter } : {}) }}
              ></div>
              <div className="bento-overlay"></div>
              <div className="bento-content !p-6">
                <span className="font-label-sm text-label-sm text-primary mb-2 block uppercase">{project.tag}</span>
                <h3 className="font-body-lg text-body-lg font-bold text-on-surface mb-2">{project.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}

          {wide && (
            <div className="bento-item glass-panel col-span-12 row-span-1 group cursor-pointer flex items-center overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-surface-dim to-transparent z-10 w-2/3"></div>
              <div className="bento-img-bg bg-right" style={{ backgroundImage: `url('${wide.image}')` }}></div>
              <div className="bento-overlay !bg-none !bg-black/40"></div>
              <div className="relative z-20 p-8 md:p-12 w-full md:w-1/2">
                <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md inline-block mb-4 uppercase">
                  {wide.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{wide.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{wide.description}</p>
                <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm group-hover:translate-x-2 transition-transform duration-300">
                  {wide.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
