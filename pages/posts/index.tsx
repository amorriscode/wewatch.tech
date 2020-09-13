import Head from 'next/head'
import Link from 'next/link'

import Post from '../../types/post'

import { getAllPosts } from '../../lib/api'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import DateFormatter from '../../components/DateFormatter'

type Props = {
  allPosts: Post[]
}

const Posts = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Posts | we@ubc</title>
        <meta property="og:image" content="/assets/og.png" />
      </Head>

      <Container>
        <Header />
        <div className="space-y-10">
          {allPosts.map(post => (
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a className="post block w-full text-2xl hover:cursor-pointer">
                <p className="text-4xl md:text-5xl md:text-6xl font-bold">
                  {post.title}
                </p>

                <p className="guest text-xl md:text-2xl bg-black text-white rounded-b-lg p-4 md:flex justify-between items-center">
                  <div>
                    featuring {post.guest} <span className="text-brand-blue">@</span> {post.venture}
                  </div>

                  <div className="text-base md:text-lg"><DateFormatter dateString={post.date} /></div>
                </p>

                <p className="hidden md:block text-xl mt-2 -my-10">
                  {post.excerpt}
                </p>
              </a>
            </Link>
          ))}
        </div>
        <style jsx>{`
          .post:hover .guest {
            color: #0065ff;
          }
        `}</style>
      </Container>
    </Layout>
  )
}

export default Posts

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'guest',
    'venture',
  ])

  return {
    props: { allPosts },
  }
}
