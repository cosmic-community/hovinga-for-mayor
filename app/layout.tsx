import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import CosmicBadge from '@/components/CosmicBadge'

const HERO_IMAGE = 'https://imgix.cosmicjs.com/e2d16b00-4278-11f1-a330-fd23be7d3f55-generated-1777322239330.jpg'

export const metadata: Metadata = {
  title: 'Jeff Hovinga for Mayor of Grand Rapids, MI',
  description:
    'Grand Rapids can be the greatest city in America. Jeff Hovinga for Mayor — join the movement today.',
  openGraph: {
    title: 'Jeff Hovinga for Mayor of Grand Rapids, MI',
    description:
      'Grand Rapids can be the greatest city in America. Jeff Hovinga for Mayor — join the movement today.',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Jeff Hovinga for Mayor — Grand Rapids, MI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Hovinga for Mayor of Grand Rapids, MI',
    description: 'Grand Rapids can be the greatest city in America.',
    images: [HERO_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}