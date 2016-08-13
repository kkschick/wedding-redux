import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class Photos extends React.Component {
  render() {
    const images = [
      {
        original: './public/img/1.png',
        thumbnail: './public/img/1.png',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        size: '300'
      },
      {
        original: './public/img/2.png',
        thumbnail: './public/img/2.png'
      },
      {
        original: './public/img/3.jpg',
        thumbnail: './public/img/3.jpg'
      },
      {
        original: './public/img/4.jpg',
        thumbnail: './public/img/4.jpg'
      },
      {
        original: './public/img/5.png',
        thumbnail: './public/img/5.png'
      },
      {
        original: './public/img/6.jpg',
        thumbnail: './public/img/6.jpg'
      },
      {
        original: './public/img/7.png',
        thumbnail: './public/img/7.png'
      },
      {
        original: './public/img/8.jpg',
        thumbnail: './public/img/8.jpg'
      },
      {
        original: './public/img/9.jpg',
        thumbnail: './public/img/9.jpg'
      },
      {
        original: './public/img/10.png',
        thumbnail: './public/img/10.png'
      },
      {
        original: './public/img/11.jpg',
        thumbnail: './public/img/11.jpg'
      },
      {
        original: './public/img/12.png',
        thumbnail: './public/img/12.png'
      },
      {
        original: './public/img/13.jpg',
        thumbnail: './public/img/13.jpg'
      },
      {
        original: './public/img/14.png',
        thumbnail: './public/img/14.png'
      },
      {
        original: './public/img/15.png',
        thumbnail: './public/img/15.png'
      },
      {
        original: './public/img/16.png',
        thumbnail: './public/img/16.png'
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
