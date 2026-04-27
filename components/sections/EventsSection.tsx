import type { SiteSection, Event } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface EventsSectionProps {
  section?: SiteSection
  events: Event[]
}

function formatEventDate(dateStr?: string): string {
  if (!dateStr) return ''
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'America/Detroit',
    })
  } catch {
    return dateStr
  }
}

function formatEventTime(timeStr?: string): string {
  if (!timeStr) return ''
  // If already formatted like "7:00 PM", return as-is
  if (/[ap]m/i.test(timeStr)) return timeStr
  try {
    const [hours, minutes] = timeStr.split(':').map(Number)
    if (hours === undefined || minutes === undefined) return timeStr
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHour = hours % 12 || 12
    return `${displayHour}:${String(minutes).padStart(2, '0')} ${period}`
  } catch {
    return timeStr
  }
}

export default function EventsSection({ section, events }: EventsSectionProps) {
  const headline = getMetafieldValue(section?.metadata?.headline) || 'Find Jeff'

  // Filter to upcoming events only
  const now = new Date()
  const upcomingEvents = events.filter((e) => {
    const eventDate = e.metadata?.event_date
    if (!eventDate) return true
    return new Date(eventDate) >= now
  })

  return (
    <section id="events" className="section-pad" style={{ backgroundColor: '#0A1628' }}>
      <div className="content-max">
        <h2 className="h2-size font-extrabold text-white mb-12 md:mb-16">
          {headline}
        </h2>

        {upcomingEvents.length === 0 ? (
          <div
            className="py-16 text-center rounded-lg"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Stay tuned — events coming soon.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mb-12">
            {upcomingEvents.map((event) => {
              const eventType = getMetafieldValue(event.metadata?.event_type)
              const locationName = getMetafieldValue(event.metadata?.location_name)
              const address = getMetafieldValue(event.metadata?.address)
              const description = getMetafieldValue(event.metadata?.description)
              const rsvpUrl = getMetafieldValue(event.metadata?.rsvp_url)
              const formattedDate = formatEventDate(event.metadata?.event_date)
              const formattedTime = formatEventTime(event.metadata?.event_time)

              return (
                <div
                  key={event.id}
                  className="rounded-lg flex flex-col md:flex-row gap-6"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '28px 32px',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  {/* Date block */}
                  <div className="flex-shrink-0 md:w-40">
                    <p
                      className="text-sm font-bold tracking-widest uppercase mb-1"
                      style={{ color: '#F5A623' }}
                    >
                      {formattedDate}
                    </p>
                    {formattedTime && (
                      <p className="text-white/70 text-sm">{formattedTime}</p>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      {eventType && (
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                          style={{
                            backgroundColor: 'rgba(245,166,35,0.18)',
                            color: '#F5A623',
                          }}
                        >
                          {eventType}
                        </span>
                      )}
                    </div>
                    {locationName && (
                      <p className="text-white/70 text-sm mb-1">
                        📍 {locationName}{address ? ` — ${address}` : ''}
                      </p>
                    )}
                    {description && (
                      <p
                        className="text-sm mt-2"
                        style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}
                      >
                        {description}
                      </p>
                    )}
                  </div>

                  {/* RSVP */}
                  {rsvpUrl && (
                    <div className="flex-shrink-0 flex items-center">
                      <a
                        href={rsvpUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-gold text-sm"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        RSVP
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* See All Events CTA */}
        <div className="mt-4">
          <a href="#events" className="cta-btn cta-gold">
            See All Events
          </a>
        </div>
      </div>
    </section>
  )
}