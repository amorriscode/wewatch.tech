import Head from 'next/head'

import PostType from '../../types/post'

import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '../../lib/api'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import DateFormatter from '../../components/DateFormatter'

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
      {
        presenterTwitter
         ? <a href={presenterTwitter} className="hover:text-wwt-yellow">{presenter}</a>
         : {presenter}
      }
    </>
  )
}

const Post = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <Header />
        <article>
          <h1 className="text-6xl md:text-7xl font-bold">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl bg-black text-white rounded-b-lg p-4 md:flex justify-between items-center">
            <span className="block">
              presented by <Presenter presenter={post.presenter} presenterTwitter={post.presenterTwitter} /> <span className="text-wwt-yellow">@</span> {post.conference}
            </span>

            <span className="block text-base md:text-lg"><DateFormatter dateString={post.date} /></span>
          </p>

          <div className="video-container my-10 rounded-lg">
            <iframe src={post.embed} frameBorder="0" width="560" height="315"></iframe>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
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
