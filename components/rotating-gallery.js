import React from 'react';
import Slider from 'react-slider'

export default class RotatingGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: 'test'
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,

    }
    return (
      <div>
        <Slider {...settings}>
          
        </Slider>
      </div>
    )
  }

}
