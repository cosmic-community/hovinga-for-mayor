# Hovinga for Mayor

![App Preview](https://imgix.cosmicjs.com/ecab15e0-4278-11f1-a330-fd23be7d3f55-generated-1777322255915.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A production-ready political campaign website for Jeff Hovinga for Mayor of Grand Rapids, MI. Core message: **"Grand Rapids can be the greatest city in America."**

## Features

- 🗳️ Scroll-driven single-page campaign site with 7 distinct sections
- 🎨 Bold navy-and-gold brand identity — Inter ExtraBold headlines at 80px
- 📱 Mobile-first responsive layout with hamburger navigation
- 🏙️ Campaign priorities fetched dynamically from Cosmic CMS
- 📅 Upcoming events with RSVP links, date/time/location display
- 🔍 Full SEO metadata with OG image support
- ⚡ Static generation at build time for maximum performance
- 🏷️ "Built with Cosmic" badge integration

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69efc741026b0d1fcc680c60&clone_repository=69efccf3026b0d1fcc680d03)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided — app built from existing content structure.

### Code Generation Prompt

> A production-ready political campaign website for Jeff Hovinga for Mayor of Grand Rapids, MI. Core message: "Grand Rapids can be the greatest city in America." Tech stack: Next.js (App Router), TypeScript, Tailwind CSS, Cosmic CMS via REST API. Brand tokens: navy #0A1628, gold #F5A623, white #FFFFFF. Seven site sections: Hero, Mission, Priorities (2×2 grid of campaign-priorities), Donate (gold bg), Volunteer, Events (dynamic cards), Register to Vote. Fixed nav with hamburger on mobile, smooth scroll, SEO metadata.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **[Next.js 16](https://nextjs.org/)** — App Router, Server Components, static generation
- **[TypeScript](https://www.typescriptlang.org/)** — Strict typing throughout
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Cosmic](https://www.cosmicjs.com/)** — Headless CMS for all content
- **[@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk)** — Official Cosmic SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A [Cosmic](https://www.cosmicjs.com) account with the content types configured

### Installation

```bash
git clone <your-repo>
cd hovinga-for-mayor
bun install
```

### Environment Variables

Create a `.env.local` file:

```bash
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
// Fetch site sections sorted by order
const { objects: sections } = await cosmic.objects
  .find({ type: 'site-sections' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Fetch campaign priorities sorted by priority_number
const { objects: priorities } = await cosmic.objects
  .find({ type: 'campaign-priorities' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Fetch upcoming events
const { objects: events } = await cosmic.objects
  .find({ type: 'events' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

The site fetches content from five object types:

| Object Type | Usage |
|---|---|
| `site-sections` | All 7 page sections in order |
| `campaign-priorities` | 2×2 grid in Priorities section |
| `events` | Event cards in Events section |
| `brand-tokens` | Design token reference |
| `design-principles` | Campaign values reference |

## Deployment Options

### Vercel (Recommended)
```bash
bun run build
vercel deploy
```
Set `COSMIC_BUCKET_SLUG` and `COSMIC_READ_KEY` in your Vercel project settings.

### Netlify
```bash
bun run build
netlify deploy --dir=.next
```

<!-- README_END -->