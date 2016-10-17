import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Photos extends React.Component {
  render() {
    const fancyPics = [
      {
        src: './img/1.jpeg',
        width: 767,
        height: 1153,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/1.jpeg'
        }
      },
      {
        src: './img/8.jpeg',
        width: 1221,
        height: 813,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/8.jpeg'
        }
      },
      {
        src: './img/13.jpeg',
        width: 1203,
        height: 799,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/13.jpeg'
        }
      },
      {
        src: './img/2.jpeg',
        width: 820,
        height: 1232,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/2.jpeg'
        }
      },
      {
        src: './img/15.jpeg',
        width: 820,
        height: 1232,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/15.jpeg'
        }
      },
      {
        src: './img/9.jpeg',
        width: 1199,
        height: 798,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/9.jpeg'
        }
      },
      {
        src: './img/6.jpeg',
        width: 1187,
        height: 790,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/6.jpeg'
        }
      },
      {
        src: './img/14.jpeg',
        width: 748,
        height: 1123,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/14.jpeg'
        }
      },
      {
        src: './img/12.jpeg',
        width: 820,
        height: 1232,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/12.jpeg'
        }
      },
      {
        src: './img/11.jpeg',
        width: 1232,
        height: 820,
        aspectRatio: 1.5,
        lightboxImage:{
          src: './img/11.jpeg'
        }
      }
    ];

    const historicalPics = [
      {
        src: './img/old1.jpg',
        width: 752,
        height: 1126,
        aspectRatio: .66,
        lightboxImage:{
          src: './img/old1.jpg'
        }
      },
      {
        src: './img/old4.jpg',
        width: 1306,
        height: 979,
        aspectRatio: 1.33,
        lightboxImage:{
          src: './img/old4.jpg'
        }
      },
      {
        src: './img/old9.jpg',
        width: 979,
        height: 1306,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old9.jpg'
        }
      },
      {
        src: './img/old3.jpg',
        width: 768,
        height: 1024,
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
        width: 768,
        height: 1024,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old5.jpg'
        }
      },
      {
        src: './img/old6.jpg',
        width: 840,
        height: 1120,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old6.jpg'
        }
      },
      {
        src: './img/old14.jpg',
        width: 768,
        height: 1024,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old14.jpg'
        }
      },
      {
        src: './img/old7.jpg',
        width: 979,
        height: 1306,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old7.jpg'
        }
      },
      {
        src: './img/old13.jpg',
        width: 904,
        height: 678,
        aspectRatio: 1.33,
        lightboxImage:{
          src: './img/old13.jpg'
        }
      },
      {
        src: './img/old11.jpg',
        width: 1015,
        height: 761,
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
        width: 840,
        height: 1120,
        aspectRatio: .75,
        lightboxImage:{
          src: './img/old2.jpg'
        }
      },
      {
        src: './img/old12.jpg',
        width: 1288,
        height: 966,
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
