import Link from 'next/link'

const Header = (props) => (
  <header>
    <nav>
      <ul>
        <Link href='/'>
          <li><a>Home</a></li>
        </Link>
        <Link href='/townhomes'>
          <li><a>Townhomes</a></li>
        </Link>
        <Link href='/apartments'>
          <li><a>Apartments</a></li>
        </Link>
        <Link href='/lodge'>
          <li><a>Lodge</a></li>
        </Link>
        <Link href='/neighborhood'>
          <li><a>Neighborhood</a></li>
        </Link>
        <Link href='/blog'>
          <li><a>Blog</a></li>
        </Link>
        <Link href='/contact'>
          <li><a>Contact</a></li>
        </Link>
      </ul>
    </nav>
  </header>
)

export default Header
