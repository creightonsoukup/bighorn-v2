import Link from 'next/link'

const Image = ({border, image, link}) => (
  <div className={`${border} image-container`}>
    <Link href={`/${link}`}>
      <img  src={`./static/${image}`} alt="my image" />
    </Link>
    <style jsx>{`
      img {
        height:auto;
        overflow: hidden;
        width: 90vw;
        max-width: 1200px;
        display: block;
        margin: auto;

      }

      .padding {
        padding: 5vw;
      }

    `}</style>
  </div>
)

export default Image
