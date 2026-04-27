import type { SiteSection } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface DonateSectionProps {
  section?: SiteSection
}

export default function DonateSection({ section }: DonateSectionProps) {
  const headline = getMetafieldValue(section?.metadata?.headline) || 'Fund the Future'
  const subheadline =
    getMetafieldValue(section?.metadata?.subheadline) ||
    'Campaigns are won by people who show up — and by the resources that make it possible.'
  const body =
    getMetafieldValue(section?.metadata?.body_copy) ||
    'Your contribution powers our field operations, our outreach, and our ability to talk to every voter in Grand Rapids. No amount is too small. Every dollar brings us closer to the greatest city in America.'
  const ctaLabel = getMetafieldValue(section?.metadata?.cta_label) || 'Donate Now'
  const ctaUrl = getMetafieldValue(section?.metadata?.cta_url) || '#donate-form'

  return (
    <section id="donate" className="section-pad" style={{ backgroundColor: '#F5A623' }}>
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
            style={{ color: 'rgba(10, 22, 40, 0.8)', lineHeight: 1.7 }}
          >
            {body}
          </p>
          <a href={ctaUrl} className="cta-btn cta-navy">
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}