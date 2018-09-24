import Link from 'next/link'


const Header = (props) => (
  <header>
    <nav className='container'>
      <div className='row'>
        <div className="four columns">
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <ul className="eight columns">
          <li>
            <Link href='/townhomes'>
              <a>Townhomes</a>
            </Link>
          </li>
          <li>
            <Link href='/apartments'>
              <a>Apartments</a>
            </Link>
          </li>
          <li>
            <Link href='/lodge'>
              <a>Lodge</a>
            </Link>
          </li>
          <li>
            <Link href='/neighborhood'>
              <a>Neighborhood</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx> {`
      a {
        text-decoration: none;
      }
      li {
        list-style: none;
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}
    </style>
  </header>
)

export default Header
