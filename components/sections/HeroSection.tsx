import type { SiteSection } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

const HERO_IMAGE = 'https://imgix.cosmicjs.com/e2d16b00-4278-11f1-a330-fd23be7d3f55-generated-1777322239330.jpg'

interface HeroSectionProps {
  section?: SiteSection
}

export default function HeroSection({ section }: HeroSectionProps) {
  const headline = section?.metadata?.headline ?? 'Jeff Hovinga for Mayor'
  const subheadline =
    section?.metadata?.subheadline ??
    'Grand Rapids can be the greatest city in America. Let\'s get to work.'
  const ctaLabel = getMetafieldValue(section?.metadata?.cta_label) || 'Join the Movement'
  const ctaUrl = getMetafieldValue(section?.metadata?.cta_url) || '#volunteer'

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Image */}
      <img
        src={`${HERO_IMAGE}?w=1800&h=1200&fit=crop&auto=format,compress&q=80`}
        alt="Grand Rapids skyline"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Navy overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 22, 40, 0.55)', zIndex: 1 }}
      />

      {/* Content */}
      <div
        className="relative content-max text-center text-white px-6 py-20 pt-36"
        style={{ zIndex: 2 }}
      >
        <p
          className="text-sm font-bold tracking-widest uppercase mb-6 md:mb-8"
          style={{ color: '#F5A623', letterSpacing: '0.2em' }}
        >
          Grand Rapids, MI
        </p>

        <h1
          className="h1-size font-extrabold text-white mb-6 md:mb-8"
          style={{ maxWidth: '900px', margin: '0 auto 32px' }}
        >
          {headline}
        </h1>

        <p
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 md:mb-12"
          style={{ maxWidth: '680px', margin: '0 auto 48px', lineHeight: 1.5 }}
        >
          {subheadline}
        </p>

        <a href={ctaUrl} className="cta-btn cta-gold text-base md:text-lg px-10 py-4">
          {ctaLabel}
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}
        />
      </div>
    </section>
  )
}