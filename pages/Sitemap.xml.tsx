import { getAllPosts, getClient } from 'lib/sanity.client'

type SitemapLocation = {
  url: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority: number
  lastmod?: Date
}

const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(),
  },
]

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
        .map((location) => {
          return `<url>
                    <loc>${baseUrl}${location.url}</loc>
                    <priority>${location.priority}</priority>
                    ${
                      location.lastmod
                        ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
                        : ''
                    }
                  </url>`
        })
        .join('')}
  </urlset>
  `
}

export default function SiteMap() {
  return null
}

export async function getServerSideProps({ res }) {
  const client = getClient()

  const [posts = []] = await Promise.all([getAllPosts(client)])
  const postUrls: SitemapLocation[] = posts
    .filter(({ slug = '' }) => slug)
    .map((post) => {
      return {
        url: `/posts/${post.slug}`,
        priority: 0.5,
        lastmod: new Date(post._updatedAt),
      }
    })

  const locations = [...defaultUrls, ...postUrls]

  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(locations))
  res.end()

  return {
    props: {},
  }
}
