import Layout from '../components/layout'
import content from '../static/content'
import Textbox from '../components/textbox'

export default () => (
  <Layout title={'The Lodge'}>
    <div className='container'>
      <h1 className='row'>Lodge</h1>
    </div>
    <Textbox content={content.lodge.textBlock1}/>
  </Layout>
)
