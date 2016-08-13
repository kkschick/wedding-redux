import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class Photos extends React.Component {
  render() {
    const images = [
      {
        original: './img/1.png',
        thumbnail: './img/1.png',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        size: '300'
      },
      {
        original: './img/2.png',
        thumbnail: './img/2.png'
      },
      {
        original: './img/3.jpg',
        thumbnail: './img/3.jpg'
      },
      {
        original: './img/4.jpg',
        thumbnail: './img/4.jpg'
      },
      {
        original: './img/5.png',
        thumbnail: './img/5.png'
      },
      {
        original: './img/6.jpg',
        thumbnail: './img/6.jpg'
      },
      {
        original: './img/7.png',
        thumbnail: './img/7.png'
      },
      {
        original: './img/8.jpg',
        thumbnail: './img/8.jpg'
      },
      {
        original: './img/9.jpg',
        thumbnail: './img/9.jpg'
      },
      {
        original: './img/10.png',
        thumbnail: './img/10.png'
      },
      {
        original: './img/11.jpg',
        thumbnail: './img/11.jpg'
      },
      {
        original: './img/12.png',
        thumbnail: './img/12.png'
      },
      {
        original: './img/13.jpg',
        thumbnail: './img/13.jpg'
      },
      {
        original: './img/14.png',
        thumbnail: './img/14.png'
      },
      {
        original: './img/15.png',
        thumbnail: './img/15.png'
      },
      {
        original: './img/16.png',
        thumbnail: './img/16.png'
      }
    ];

    return (
      <div>
      <h1 className="header-large">Photos</h1>
      <div className="gallery">
        <ImageGallery ref={i => this._imageGallery = i}
                      items={images}
                      slideInterval={2000}/>
      </div>
      </div>
    );
  }
}
