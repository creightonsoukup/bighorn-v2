import Layout from '../components/layout'
import content from '../static/content'
import Textbox from '../components/textbox'

export default () => (
  <Layout title={'Our Neighborhood'}>
    <h1>Neighborhood</h1>
    <Textbox content={content.neighborhood.intro}/>
    <Textbox content={content.neighborhood.ski}/>
    <Textbox content={content.neighborhood.recreation}/>
    <Textbox content={content.neighborhood.view}/>
    <Textbox content={content.neighborhood.history}/>

  </Layout>
)
