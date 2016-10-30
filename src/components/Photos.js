import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Photos extends React.Component {
  render() {
    const fancyPics = [
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838757/1_ntn9gl.jpg',
        width: 767,
        height: 1153,
        aspectRatio: .66,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838757/1_ntn9gl.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838760/8_mqrrxh.jpg',
        width: 1221,
        height: 813,
        aspectRatio: 1.5,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838760/8_mqrrxh.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838764/13_ctv8d0.jpg',
        width: 1203,
        height: 799,
        aspectRatio: 1.5,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838764/13_ctv8d0.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838769/2_bxrzdu.jpg',
        width: 820,
        height: 1232,
        aspectRatio: .66,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838769/2_bxrzdu.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838770/15_zu4icc.jpg',
        width: 820,
        height: 1232,
        aspectRatio: .66,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838770/15_zu4icc.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838761/9_aiiun1.jpg',
        width: 1199,
        height: 798,
        aspectRatio: 1.5,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838761/9_aiiun1.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838759/6_ftjaym.jpg',
        width: 1187,
        height: 790,
        aspectRatio: 1.5,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838759/6_ftjaym.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838779/14_vtzduf.jpg',
        width: 748,
        height: 1123,
        aspectRatio: .66,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838779/14_vtzduf.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838769/12_z1wlqt.jpg',
        width: 820,
        height: 1232,
        aspectRatio: .66,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838769/12_z1wlqt.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838763/11_bdspio.jpg',
        width: 1232,
        height: 820,
        aspectRatio: 1.5,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838763/11_bdspio.jpg'
        }
      }
    ];

    const historicalPics = [
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838776/old1_dihhwz.jpg',
        width: 752,
        height: 1126,
        aspectRatio: .66,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838776/old1_dihhwz.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838784/old4_xepa7a.jpg',
        width: 1306,
        height: 979,
        aspectRatio: 1.33,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838784/old4_xepa7a.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838780/old9_bleck5.jpg',
        width: 979,
        height: 1306,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838780/old9_bleck5.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838777/old3_abyton.jpg',
        width: 768,
        height: 1024,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838777/old3_abyton.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838784/old15_p7uxrk.jpg',
        width: 612,
        height: 612,
        aspectRatio: 1,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838784/old15_p7uxrk.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_500/v1477838778/old5_nb4gir.jpg',
        width: 768,
        height: 1024,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838778/old5_nb4gir.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838779/old6_evnsv0.jpg',
        width: 840,
        height: 1120,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838779/old6_evnsv0.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838783/old14_ecye0i.jpg',
        width: 768,
        height: 1024,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838783/old14_ecye0i.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838779/old7_xet1tv.jpg',
        width: 979,
        height: 1306,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838779/old7_xet1tv.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838782/old13_hcf6xb.jpg',
        width: 904,
        height: 678,
        aspectRatio: 1.33,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838782/old13_hcf6xb.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838781/old11_om9pc1.jpg',
        width: 1015,
        height: 761,
        aspectRatio: 1.33,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838781/old11_om9pc1.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838780/old8_dchymw.jpg',
        width: 960,
        height: 1280,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838780/old8_dchymw.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_400/v1477838776/old2_juj0du.jpg',
        width: 840,
        height: 1120,
        aspectRatio: .75,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838776/old2_juj0du.jpg'
        }
      },
      {
        src: 'https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_800/v1477838781/old12_touqlo.jpg',
        width: 1288,
        height: 966,
        aspectRatio: 1.33,
        lightboxImage:{
          src: 'https://res.cloudinary.com/hnswgapni/image/upload/v1477838781/old12_touqlo.jpg'
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
