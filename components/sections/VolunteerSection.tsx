import type { SiteSection } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface VolunteerSectionProps {
  section?: SiteSection
}

export default function VolunteerSection({ section }: VolunteerSectionProps) {
  const headline = getMetafieldValue(section?.metadata?.headline) || 'Show Up'
  const subheadline =
    getMetafieldValue(section?.metadata?.subheadline) ||
    'Democracy runs on volunteers.'
  const body =
    getMetafieldValue(section?.metadata?.body_copy) ||
    'Knock doors, make calls, host events, or just show up for your city. Whatever your schedule allows, we have a place for you. Grand Rapids doesn\'t just need a better mayor — it needs better citizens. And that starts with you.'
  const ctaLabel = getMetafieldValue(section?.metadata?.cta_label) || 'Volunteer'
  const ctaUrl = getMetafieldValue(section?.metadata?.cta_url) || '#volunteer-form'

  return (
    <section id="volunteer" className="section-pad bg-white">
      <div className="content-max">
        <div style={{ maxWidth: '760px' }}>
          <h2
            className="h2-size font-extrabold mb-6"
            style={{ color: '#0A1628' }}
          >
            {headline}
          </h2>
          <p
            className="text-xl font-bold mb-6"
            style={{ color: '#0A1628' }}
          >
            {subheadline}
          </p>
          <p
            className="text-lg mb-10"
            style={{ color: '#0A1628', lineHeight: 1.7 }}
          >
            {body}
          </p>
          <a href={ctaUrl} className="cta-btn cta-gold">
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}