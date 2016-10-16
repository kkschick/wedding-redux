import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Photos extends React.Component {
  render() {
    const fancyPics = [
      {
        src: './img/1.png',
        width: 3068,
        height: 4609,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/1.png'
        }
      },
      {
        src: './img/8.png',
        width: 4884,
        height: 3251,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/8.png'
        }
      },
      {
        src: './img/13.png',
        width: 4802,
        height: 3196,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/13.png'
        }
      },
      {
        src: './img/2.png',
        width: 3280,
        height: 4928,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/2.png'
        }
      },
      {
        src: './img/15.png',
        width: 3280,
        height: 4928,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/15.png'
        }
      },
      {
        src: './img/9.png',
        width: 4797,
        height: 3193,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/9.png'
        }
      },
      {
        src: './img/6.png',
        width: 4747,
        height: 3160,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/6.png'
        }
      },
      {
        src: './img/14.png',
        width: 2990,
        height: 4492,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/14.png'
        }
      },
      {
        src: './img/12.png',
        width: 3280,
        height: 4928,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/12.png'
        }
      },
      {
        src: './img/11.png',
        width: 4928,
        height: 3280,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/11.png'
        }
      }
    ];

    const historicalPics = [
      {
        src: './img/old1.jpg',
        width: 1880,
        height: 2816,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/old1.jpg'
        }
      },
      {
        src: './img/old4.jpg',
        width: 3264,
        height: 2448,
        aspectRatio: 1.33,
        lightboxImage:{
          src: './img/old4.jpg'
        }
      },
      {
        src: './img/old9.jpg',
        width: 2448,
        height: 3264,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old9.jpg'
        }
      },
      {
        src: './img/old3.jpg',
        width: 1536,
        height: 2048,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old3.jpg'
        }
      },
      {
        src: './img/old15.jpg',
        width: 612,
        height: 612,
        aspectRatio: 1,
        lightboxImage:{
          src: './img/old15.jpg'
        }
      },
      {
        src: './img/old5.jpg',
        width: 1536,
        height: 2048,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old5.jpg'
        }
      },
      {
        src: './img/old6.jpg',
        width: 1200,
        height: 1600,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old6.jpg'
        }
      },
      {
        src: './img/old14.jpg',
        width: 1536,
        height: 2048,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old14.jpg'
        }
      },
      {
        src: './img/old7.jpg',
        width: 2448,
        height: 3264,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old7.jpg'
        }
      },
      {
        src: './img/old13.jpg',
        width: 1808,
        height: 1356,
        aspectRatio: 1.33,
        lightboxImage:{
          src: './img/old13.jpg'
        }
      },
      {
        src: './img/old11.jpg',
        width: 1691,
        height: 1268,
        aspectRatio: 1.33,
        lightboxImage:{
          src: './img/old11.jpg'
        }
      },
      {
        src: './img/old8.jpg',
        width: 960,
        height: 1280,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old8.jpg'
        }
      },
      {
        src: './img/old2.jpg',
        width: 1200,
        height: 1600,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old2.jpg'
        }
      },
      {
        src: './img/old12.jpg',
        width: 2576,
        height: 1932,
        aspectRatio: 1.33,
        lightboxImage:{
          src: './img/old12.jpg'
        }
      }
    ];

    return (
      <div className="outer-wrapper">
        <div className="gallery">
          <div className="header-large">Engagement Photos</div>
          <Gallery photos={fancyPics} />
        </div>
        <div className="gallery">
        <div className="header-large">&nbsp;</div>
          <div className="header-large">Historical Photos</div>
          <Gallery photos={historicalPics} />
          <div className="header-large">&nbsp;</div>
        </div>
      </div>
    );
  }
}
