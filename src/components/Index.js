import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <img src="./img/4.jpeg" className="front-image"/><br/>
        <div className="header-large">
          Saturday, April 29, 2017
        </div>
        <img src="./img/masthead.png" className="centered-masthead" />
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
