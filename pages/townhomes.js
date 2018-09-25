import Layout from '../components/layout'
import Textbox from '../components/textbox'
import content from '../static/content'
import Image from '../components/image'

export default () => (
  <Layout title={'Bighorn Crossing Townhomes'}>
    <Image border="" image="townhomehero2.jpg" link="townhomes"/>
    <div className='container'>
      <h1 className='row'>Townhomes</h1>
    </div>
    <Textbox content={content.townhomes.textBlock1}/>
    <Textbox content={content.townhomes.textBlock2}/>
    <Textbox content={content.townhomes.textBlock3}/>
    <Textbox content={content.townhomes.textBlock4}/>
    <Textbox content={content.townhomes.textBlock5}/>
  </Layout>
)
