import Layout from '../components/layout'
import content from '../static/content'
import Textbox from '../components/textbox'

export default () => (
  <Layout title={'The Lodge'}>
    <h1>Lodge</h1>
    <Textbox content={content.lodge.textBlock1}/>
  </Layout>
)
