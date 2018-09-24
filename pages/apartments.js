import Layout from '../components/layout'
import content from '../static/content'
import Textbox from '../components/textbox'

export default () => (
  <Layout title={'Bighorn Crossing Apartment'}>
    <div className='container'>
      <h1 className='row'>Apartments</h1>
    </div>
    <Textbox content={content.apartments.textBlock1}/>
    <Textbox content={content.apartments.textBlock2}/>

  </Layout>
)
