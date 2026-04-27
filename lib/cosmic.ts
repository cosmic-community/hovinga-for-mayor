import { createBucketClient } from '@cosmicjs/sdk'
import type { SiteSection, CampaignPriority, Event } from '@/types'
import { hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getSiteSections(): Promise<SiteSection[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'site-sections' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    const sections = response.objects as SiteSection[]
    return sections.sort(
      (a, b) => (a.metadata?.section_order ?? 99) - (b.metadata?.section_order ?? 99)
    )
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch site sections')
  }
}

export async function getCampaignPriorities(): Promise<CampaignPriority[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'campaign-priorities' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    const priorities = response.objects as CampaignPriority[]
    return priorities.sort(
      (a, b) => (a.metadata?.priority_number ?? 99) - (b.metadata?.priority_number ?? 99)
    )
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch campaign priorities')
  }
}

export async function getEvents(): Promise<Event[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)

    const events = response.objects as Event[]
    return events.sort((a, b) => {
      const dateA = new Date(a.metadata?.event_date ?? '').getTime()
      const dateB = new Date(b.metadata?.event_date ?? '').getTime()
      return dateA - dateB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch events')
  }
}