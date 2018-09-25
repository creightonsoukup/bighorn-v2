import Link from 'next/link'

const Image = ({border, image, link}) => (
  <div className={` image-container`}>
    <Link href={`/${link}`}>
      <img className={`${border}`} src={`./static/${image}`} alt="my image" />
    </Link>
    <style jsx>{`
      img {
        height:auto;
        overflow: hidden;
        width: 100vw;
        display: block;
        margin: auto;
        max-width: 1800px;
      }

      .padding {
        padding: 5vw;
        box-sizing: border-box;
      }

    `}</style>
  </div>
)

export default Image
