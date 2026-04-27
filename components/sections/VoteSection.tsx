import type { SiteSection } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface VoteSectionProps {
  section?: SiteSection
}

export default function VoteSection({ section }: VoteSectionProps) {
  const headline =
    getMetafieldValue(section?.metadata?.headline) || 'Your Voice. Your City.'
  const subheadline =
    getMetafieldValue(section?.metadata?.subheadline) ||
    'Every vote shapes the future of Grand Rapids.'
  const body =
    getMetafieldValue(section?.metadata?.body_copy) ||
    "You can't change what you don't show up for. If Grand Rapids is going to be the greatest city in America, it starts at the ballot box. Make sure you're registered and ready to vote."
  const ctaLabel = getMetafieldValue(section?.metadata?.cta_label) || 'Register to Vote'
  const ctaUrl =
    getMetafieldValue(section?.metadata?.cta_url) ||
    'https://mvic.sos.state.mi.us/RegisterVoter'

  return (
    <section id="vote" className="section-pad bg-white">
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
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-gold"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}