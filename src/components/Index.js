import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <img src="https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_1000/v1477838759/4_rdisem.jpg" className="front-image"/><br/>
        <div className="header-large">
          Saturday, April 29, 2017
        </div>
        <img src="https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_1000/v1477838775/masthead_pe8tfq.png" className="centered-masthead" />
        <div className="paragraph-text">
          <span className="large-text">
            We are so excited to celebrate our wedding with you!<br/>
          </span>
          <span className="small-text">
            If you have questions about anything,<br/>
            write to us at <strong>katieandwalterparty(at)gmail(dot)com!</strong>
          </span>
        </div>
      </div>
    );
  }
}
