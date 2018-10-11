import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import normalize from '../static/normalize.css'
import skeleton from '../static/skeleton.css'



const Layout = ({children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='inital-scale=1.0, width=device-width'/>
    </Head>
    <Header/>
    {children}
  </div>

)

export default Layout
