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
          <title>Great tech talks distilled.</title>
          <meta property="og:image" content="/assets/og.png" />
        </Head>

        <Container>
          <Logo />

          <div className="rounded-lg bg-wwt-yellow w-full my-12 md:my-24 leading-tight space-y-10 md:space-y-20 p-10 md:p-20 font-bold">
            <p className="text-6xl md:text-7xl">I watch conference talks so you don't have to.</p>
            <p className="text-sm">(but you should too because they're totally awesome)</p>
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
    'presenter',
    'conference',
  ])

  return {
    props: { allPosts },
  }
}
