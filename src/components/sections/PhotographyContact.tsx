import { ArrowRight, Award, Github, Gitlab, Linkedin, Twitter } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { photos } from '@/data/photography';
import { award, metrics } from '@/data/achievements';
import { site, type SocialLink } from '@/data/site';

const socialIcons: Record<SocialLink['icon'], typeof Github> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  gitlab: Gitlab,
};

export function PhotographyContact() {
  const { ref: photoRef, isVisible: photoVisible } = useIntersectionObserver();
  const { ref: achieveRef, isVisible: achieveVisible } = useIntersectionObserver();
  const { ref: contactRef, isVisible: contactVisible } = useIntersectionObserver();

  return (
    <>
      <section
        id="photography"
        ref={photoRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl flex flex-col gap-stack-md transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          photoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Captured Moments</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A curated visual journal exploring the intersection of light, architecture, and fleeting human experiences in urban landscapes.
          </p>
        </div>

        <div className="masonry-grid">
          {photos.map((photo) => (
            <div key={photo.title} className={`masonry-item glass-panel ${photo.size === 'normal' ? '' : photo.size}`}>
              <img alt={photo.alt} src={photo.src} loading="lazy" />
              <div className="photo-overlay">
                <div>
                  <span className="font-label-sm text-label-sm text-primary mb-2 block">{photo.location}</span>
                  <h3 className="font-headline-md text-headline-md text-white">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="achievements"
        ref={achieveRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl flex flex-col gap-stack-md transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          achieveVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Milestones & Metrics</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Quantifiable impact and recognized excellence across technical and strategic domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {metrics.map((metric) => (
            <div key={metric.label} className="glass-panel rounded-xl p-8 relative overflow-hidden group">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${metric.accentClass} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              <div className="font-display-hero text-display-hero text-on-surface mb-2 tracking-tighter">
                {metric.value}
                <span className={metric.suffixClass}>{metric.suffix}</span>
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">{metric.label}</div>
              <p className="font-body-md text-body-md text-on-surface-variant/70">{metric.description}</p>
            </div>
          ))}

          <div className="glass-panel rounded-xl p-8 flex flex-col items-center justify-center text-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            <Award className="w-16 h-16 text-primary mb-4" aria-hidden="true" />
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{award.title}</h3>
            <div className="font-label-sm text-label-sm text-secondary px-3 py-1 bg-secondary-container/20 rounded-full border border-secondary/30 inline-block">
              {award.badge}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl grid grid-cols-1 md:grid-cols-2 gap-stack-md transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        <div className="flex flex-col justify-center">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Initiate Protocol</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
            Open for strategic consulting and high-impact technical collaborations. Leave a signal.
          </p>

          <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" name="name" autoComplete="name" className="input-minimal font-body-md text-body-md" placeholder="Identification (Name)" />
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" name="email" autoComplete="email" className="input-minimal font-body-md text-body-md" placeholder="Comms Channel (Email)" />
            </div>
            <div className="relative">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} className="input-minimal font-body-md text-body-md resize-none" placeholder="Encrypted Message (Details)"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant/50 hover:bg-white/5 hover:border-primary/50 transition-all duration-300 py-4 rounded-lg font-label-sm tracking-widest flex items-center justify-center gap-2 group"
            >
              TRANSMIT
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </form>

          <div className="flex gap-4 mt-12">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative h-[500px] rounded-xl overflow-hidden glass-panel group">
          <div className="absolute inset-0 bg-surface/80 mix-blend-multiply z-10 pointer-events-none group-hover:bg-surface/60 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none"></div>
          <img
            alt="Stylized map showing current base of operations"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
            loading="lazy"
            className="w-full h-full object-cover filter grayscale contrast-150"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="relative flex h-4 w-4 mb-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
            </div>
            <span className="font-label-sm text-label-sm text-white bg-surface-container-high/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 uppercase">
              {site.location}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
