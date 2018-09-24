const Textbox = ({content}) => (
  <div class='container'>
     <h2 className='row'> {content.title}</h2>
      { content.subtitle && <h3 className='row'>{content.subtitle}</h3>}
      { typeof content.text !== "object" && <p className='row'> {content.text}</p>}
      { typeof content.text == "object" && <p className='row'>{content.text[0]}</p>}
      { typeof content.text == "object"  && <p className='row'>{content.text[1]}</p>}
  </div>
)

export default Textbox
