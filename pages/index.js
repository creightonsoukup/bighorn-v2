import Layout from '../components/layout'
import content from '../static/content.js'
import Textbox from '../components/textbox.js'
import Image from '../components/image'

export default () => (
  <Layout title={'Bighorn Crossing Home'}>
    <Textbox content={content.homepage.textBlock1}/>
    <Image border="padding" image="townhome-hero.jpg" link="townhomes"/>
    <Textbox content={content.homepage.textBlock2}/>
    <Image border="padding" image="townhome-hero.jpg" link="townhomes"/>
    <Textbox content={content.homepage.textBlock3}/>
    <Image border="padding" image="townhome-hero.jpg" link="townhomes"/>
    <Textbox content={content.homepage.textBlock4}/>
    <Image border="padding" image="townhome-hero.jpg" link="townhomes"/>
    <Textbox content={content.homepage.textBlock5}/>
  </Layout>
)
