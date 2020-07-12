import Link from 'next/link'

import Logo from './Logo'

const Header = () => {
  return (
    <div className="mt-5 mb-10">
      <Link href="/">
        <a>
          <Logo small />
        </a>
      </Link>
    </div>
  )
}

export default Header
