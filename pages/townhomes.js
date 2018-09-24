import Layout from '../components/layout'
import Textbox from '../components/textbox'
import content from '../static/content'

export default () => (
  <Layout title={'Bighorn Crossing Townhomes'}>
    <h1>Townhomes</h1>
    <Textbox content={content.townhomes.textBlock1}/>
    <Textbox content={content.townhomes.textBlock2}/>
    <Textbox content={content.townhomes.textBlock3}/>
    <Textbox content={content.townhomes.textBlock4}/>
    <Textbox content={content.townhomes.textBlock5}/>
  </Layout>
)
