import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import normalize from '../static/normalize.css'
import skeleton from '../static/skeleton.css'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";


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
