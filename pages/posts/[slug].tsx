import Head from 'next/head'

import PostType from '../../types/post'

import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '../../lib/api'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import DateFormatter from '../../components/DateFormatter'
import Signup from '../../components/Signup'

import markdownStyles from '../../components/markdown-styles.module.css'

type Props = {
  post: PostType
}

type PresenterProps = {
  presenter: string
  presenterTwitter: string
}

const Presenter = ({ presenter, presenterTwitter }: PresenterProps) => {
  return (
    <>
      {presenterTwitter ? (
        <a href={presenterTwitter} className="hover:text-wwt-yellow">
          {presenter}
        </a>
      ) : (
        { presenter }
      )}
    </>
  )
}

const Post = ({ post }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{post.title} | we watch tech</title>
        <meta
          property="og:image"
          content={`/assets/posts/${post.slug}/og.png`}
        />
      </Head>

      <Container>
        <Header />
        <article>
          <h1 className="text-6xl md:text-7xl font-bold">{post.title}</h1>

          <p className="text-xl md:text-2xl bg-black text-white rounded-b-lg p-4 md:flex justify-between items-center">
            <span className="block">
              presented by{' '}
              <Presenter
                presenter={post.presenter}
                presenterTwitter={post.presenterTwitter}
              />{' '}
              <span className="text-wwt-yellow">@</span> {post.conference}
            </span>

            <span className="block text-base md:text-lg">
              <DateFormatter dateString={post.date} />
            </span>
          </p>

          <div className="video-container my-10 rounded-lg">
            <iframe
              src={post.embed}
              frameBorder="0"
              width="560"
              height="315"
            ></iframe>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <div className="rounded-lg bg-wwt-yellow w-full my-12 md:my-24 leading-tight p-5 md:p-10 font-bold text-xl md:text-2xl space-y-4 md:space-y-8">
          <div className="bg-white rounded-lg p-5 md:p-10">
            <Signup />
          </div>

          <p className="pt-2 md:pt-4">Hey! 👋</p>

          <p>
            My name is{' '}
            <a
              href="https://anthonymorris.dev"
              className="border-b-4 border-black"
            >
              Anthony Morris
            </a>
            . Builder of things.
          </p>

          <p>
            I made We Watch Tech because I love watching conference talks.
            Writing about the talks helps me think more deeply. This is a place
            for learning and exploration.
          </p>

          <p>
            <a
              className="border-b-4 border-black"
              href="mailto:hello@wewatch.tech"
            >
              Let me know
            </a>{' '}
            if there is anything you'd like to see!
          </p>
        </div>

        <style jsx>{`
          .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          }
          .video-container iframe,
          .video-container object,
          .video-container embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'presenter',
    'presenterTwitter',
    'conference',
    'content',
    'embed',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
