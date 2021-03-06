import Link from 'next/link'

import Post from '../types/post'

import DateFormatter from './DateFormatter'

type Props = {
  post: Post;
}

function LatestPost({ post }: Props) {
  return (
    <section className="sm:flex items-center">
      <div className="sm:w-2/3">
        <div className="flex justify-between items-end pb-2 font-bold">
          <h3 className="text-5xl md:text-6xl font-extrabold leading-none">
            Latest Post
          </h3>

          <DateFormatter dateString={post.date} />
        </div>

        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a className="block bg-black rounded-b-lg text-white text-2xl p-10 hover:text-wwt-yellow hover:cursor-pointer">
            <p className="text-5xl md:text-6xl font-bold">
              {post.title}
            </p>

            <p>
              presented by {post.presenter} <span className="text-wwt-yellow">@</span> {post.conference}
            </p>
          </a>
        </Link>
      </div>

      <div className="pt-10 sm:p-10 text-center sm:w-1/3 text-6xl font-bold">
        <Link href="/posts">
          <a className="link">
            Read More
          </a>
        </Link>
      </div>
    </section>
  )
}

export default LatestPost