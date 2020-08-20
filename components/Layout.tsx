import Footer from './Footer'
import Meta from './Meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />

      <a className="fixed top-0 right-0 mr-4 mt-4 z-20" href="https://www.producthunt.com/posts/we-watch-tech?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-we-watch-tech" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=235004&theme=light" alt="We Watch Tech - Great tech talks distilled. | Product Hunt Embed" style={{width: '250px', height: '54px'}} width="250px" height="54px" /></a>

      <div>
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
