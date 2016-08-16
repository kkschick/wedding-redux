import React from 'react';

export default class Details extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <h1 className="header-large">The Wedding</h1>
        <div className="flex-grid">
          <div className="col">
            <div className="col-box left-box">
              <span className="header-medium">
                Saturday, April 29, 2017<br/>
              </span>
              <span className="paragraph-text">
                at 7pm in the evening<br/>
              </span>
              <span className="fancy-n-small">
                reception to follow<br/><br/>
              </span>
              <span className="header-medium">
                The Boston Public Library<br/>
              </span>
              <span className="paragraph-text">
                230 Dartmouth Street<br/>
                Boston, Massachusetts<br/><br/>
              </span>
              <span className="paragraph-text smaller-text">
                (If you like to go to bed early like we do,<br/>
                be sure to rest up in preparation!)
              </span>
            </div>
          </div>
          <div className="col">
            <img className="basic-img" src="./img/bpl-exterior.jpg" /><br/>
          </div>
        </div>
      </div>
    );
  }
}
