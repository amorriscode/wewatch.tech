import Head from 'next/head'

import { getAllPosts } from '../lib/api'
import Post from '../types/post'

import Container from '../components/Container'
import Logo from '../components/Logo'
import Layout from '../components/Layout'
import LatestPost from '../components/LatestPost'

type Props = {
  allPosts: Post[];
}

const Index = ({ allPosts }: Props) => {
  const latestPost = allPosts[0]

  return (
    <>
      <Layout>
        <Head>
          <title>Stories from UBC Entrepreneurs.</title>
          <meta property="og:image" content="/assets/og.png" />
        </Head>

        <Container>
          <Logo />

          <div className="rounded-lg bg-brand-blue w-full my-12 md:my-24 leading-tight space-y-10 md:space-y-20 p-10 md:p-20 font-bold text-white">
            <p className="text-5xl md:text-7xl">Stories of grit, failure & passion from UBC entrepreneurs.</p>
            <p className="text-sm">"All our dreams can come true, if we have the courage to pursue them." - Walt Disney</p>
          </div>

          <LatestPost post={latestPost} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

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
