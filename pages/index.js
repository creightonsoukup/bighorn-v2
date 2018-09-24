import Layout from '../components/layout'
import content from '../static/content.js'
import Textbox from '../components/textbox.js'

export default () => (
  <Layout title={'Bighorn Crossing Home'}>
    <h1>Home</h1>
    <Textbox content={content.homepage.textBlock1}/>
    <Textbox content={content.homepage.textBlock2}/>
    <Textbox content={content.homepage.textBlock3}/>
    <Textbox content={content.homepage.textBlock4}/>
    <Textbox content={content.homepage.textBlock5}/>
  </Layout>
)
