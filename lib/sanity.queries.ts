import { groq } from 'next-sanity'
import { formatISO } from 'date-fns';

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

const todayDate = formatISO(new Date(), { representation: 'date' });

export const indexQuery = groq`
*[_type == "post" && date <= "${todayDate}"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug && date <= "${todayDate}"] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug && date <= "${todayDate}"] | order(date desc, _updatedAt desc) [0...9] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current) && date <= "${todayDate}"][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug && date <= "${todayDate}"][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
