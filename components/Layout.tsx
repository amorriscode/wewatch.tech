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

      <div>
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
