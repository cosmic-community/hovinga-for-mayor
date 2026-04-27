import type { SiteSection } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface MissionSectionProps {
  section?: SiteSection
}

export default function MissionSection({ section }: MissionSectionProps) {
  const headline = getMetafieldValue(section?.metadata?.headline) || 'One Mission. One City.'
  const body =
    getMetafieldValue(section?.metadata?.body_copy) ||
    'Grand Rapids is not just another Midwestern city. It is a place of grit, of creativity, of neighbors who show up. Jeff Hovinga believes that with the right leadership — focused, accountable, and relentlessly committed to every neighborhood — Grand Rapids can rise to be the greatest city in America.'

  return (
    <section id="mission" className="section-pad bg-white">
      <div className="content-max">
        <div style={{ maxWidth: '760px' }}>
          <h2
            className="h2-size font-extrabold mb-8"
            style={{ color: '#0A1628' }}
          >
            {headline}
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: '#0A1628', lineHeight: 1.7 }}
          >
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}