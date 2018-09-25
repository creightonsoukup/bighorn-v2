import React from 'react';

export default class RotatingGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: 'test'
    }
  }

  render() {
    return (
      <div className='container'>
        {this.state.imageSource}
      </div>
    )
  }

}
