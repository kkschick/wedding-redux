import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="body-container">
        <h1 className="header-large">
          April 29, 2017 • Boston, MA
        </h1>
        <br/>
        <img src="./public/img/montana.jpg" /><br/>
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
