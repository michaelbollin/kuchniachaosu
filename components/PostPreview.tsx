import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-1 text-xl leading-snug text-balance">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-base text-[#888888]">
        <Date dateString={date} />
      </div>
      {excerpt && (
        <p className="mb-4 text-lg leading-relaxed text-pretty">{excerpt}</p>
      )}
      {author && false && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
