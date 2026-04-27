import type { SiteSection, CampaignPriority } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PrioritiesSectionProps {
  section?: SiteSection
  priorities: CampaignPriority[]
}

const FALLBACK_PRIORITIES: CampaignPriority[] = [
  {
    id: '1',
    slug: 'public-safety',
    title: 'Public Safety',
    metadata: {
      priority_number: 1,
      icon_emoji: '🛡️',
      summary: 'Every resident deserves to feel safe in their neighborhood. We will rebuild trust between police and community.',
    },
  },
  {
    id: '2',
    slug: 'economic-growth',
    title: 'Economic Growth',
    metadata: {
      priority_number: 2,
      icon_emoji: '📈',
      summary: 'Attract jobs, support small businesses, and create opportunity in every zip code.',
    },
  },
  {
    id: '3',
    slug: 'infrastructure',
    title: 'Infrastructure',
    metadata: {
      priority_number: 3,
      icon_emoji: '🏗️',
      summary: 'Fix our roads, modernize city services, and invest in the bones of Grand Rapids.',
    },
  },
  {
    id: '4',
    slug: 'community',
    title: 'Community & Housing',
    metadata: {
      priority_number: 4,
      icon_emoji: '🏡',
      summary: 'Affordable housing, strong neighborhoods, and a city that works for families.',
    },
  },
]

export default function PrioritiesSection({ section, priorities }: PrioritiesSectionProps) {
  const headline = getMetafieldValue(section?.metadata?.headline) || "What We'll Do"
  const displayPriorities = priorities.length > 0 ? priorities : FALLBACK_PRIORITIES

  return (
    <section id="priorities" className="section-pad" style={{ backgroundColor: '#0A1628' }}>
      <div className="content-max">
        <h2
          className="h2-size font-extrabold text-white mb-12 md:mb-16"
        >
          {headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayPriorities.map((priority) => {
            const emoji = getMetafieldValue(priority.metadata?.icon_emoji)
            const summary = getMetafieldValue(priority.metadata?.summary)

            return (
              <div
                key={priority.id}
                className="rounded-lg"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '32px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                }}
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {emoji || '⭐'}
                </div>
                <h3
                  className="text-xl font-extrabold text-white mb-3"
                >
                  {priority.title}
                </h3>
                <p
                  className="text-base"
                  style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}
                >
                  {summary}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}