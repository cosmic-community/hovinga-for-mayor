export interface SiteSection {
  id: string
  slug: string
  title: string
  metadata: {
    section_order?: number
    section_id?: string
    headline?: string
    subheadline?: string
    body_copy?: string
    cta_label?: string
    cta_url?: string
    background_treatment?: string
    section_image?: {
      url: string
      imgix_url: string
    }
  }
}

export interface CampaignPriority {
  id: string
  slug: string
  title: string
  metadata: {
    priority_number?: number
    icon_emoji?: string
    summary?: string
    detail?: string
  }
}

export interface Event {
  id: string
  slug: string
  title: string
  metadata: {
    event_date?: string
    event_time?: string
    location_name?: string
    address?: string
    description?: string
    rsvp_url?: string
    event_type?: string
  }
}

export interface BrandToken {
  id: string
  slug: string
  title: string
  metadata: {
    token_category?: string
    token_name?: string
    token_value?: string
    usage_note?: string
  }
}

export interface DesignPrinciple {
  id: string
  slug: string
  title: string
  metadata: {
    principle_number?: number
    statement?: string
    rationale?: string
    examples?: string
  }
}

// Helper for Cosmic SDK errors
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}