import { getSiteSections, getCampaignPriorities, getEvents } from '@/lib/cosmic'
import HeroSection from '@/components/sections/HeroSection'
import MissionSection from '@/components/sections/MissionSection'
import PrioritiesSection from '@/components/sections/PrioritiesSection'
import DonateSection from '@/components/sections/DonateSection'
import VolunteerSection from '@/components/sections/VolunteerSection'
import EventsSection from '@/components/sections/EventsSection'
import VoteSection from '@/components/sections/VoteSection'
import Footer from '@/components/Footer'
import type { SiteSection, CampaignPriority, Event } from '@/types'

export const revalidate = 3600 // revalidate every hour

function getSectionByOrder(sections: SiteSection[], order: number): SiteSection | undefined {
  return sections.find((s) => s.metadata?.section_order === order)
}

export default async function HomePage() {
  const [sections, priorities, events] = await Promise.all([
    getSiteSections(),
    getCampaignPriorities(),
    getEvents(),
  ])

  const heroSection = getSectionByOrder(sections, 1)
  const missionSection = getSectionByOrder(sections, 2)
  const prioritiesSection = getSectionByOrder(sections, 3)
  const donateSection = getSectionByOrder(sections, 4)
  const volunteerSection = getSectionByOrder(sections, 5)
  const eventsSection = getSectionByOrder(sections, 6)
  const voteSection = getSectionByOrder(sections, 7)

  return (
    <>
      <HeroSection section={heroSection} />
      <MissionSection section={missionSection} />
      <PrioritiesSection section={prioritiesSection} priorities={priorities} />
      <DonateSection section={donateSection} />
      <VolunteerSection section={volunteerSection} />
      <EventsSection section={eventsSection} events={events} />
      <VoteSection section={voteSection} />
      <Footer />
    </>
  )
}