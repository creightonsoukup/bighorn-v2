import Layout from '../components/layout'
import content from '../static/content'
import Textbox from '../components/textbox'

export default () => (
  <Layout title={'Our Neighborhood'}>
    <div className='container'>
      <h1 className='row'>Neighborhood</h1>
    </div>
    <Textbox content={content.neighborhood.intro}/>
    <Textbox content={content.neighborhood.ski}/>
    <Textbox content={content.neighborhood.recreation}/>
    <Textbox content={content.neighborhood.view}/>
    <Textbox content={content.neighborhood.history}/>

  </Layout>
)
