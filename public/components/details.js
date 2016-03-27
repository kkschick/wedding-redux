import React from 'react';

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-large">The Wedding</h1>
        <div className="paragraph-text">
          Saturday, April 29, 2017<br/>
          The Boston Public Library<br/>
          700 Boylston Street<br/>
          Boston, MA 02116<br/><br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5897.403548077024!2d-71.08018980213012!3d42.34888123211756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9d45dfe5bc1ac73!2sBoston+Public+Library!5e0!3m2!1sen!2sus!4v1459049579529"
                  width="400"
                  height="300"
                  style={{border:1}}>
          </iframe>
        </div><br/>
        <h1 className="header-large">The Schedule</h1>
        <div className="paragraph-text">
          7pm — Ceremony<br/>
          7:30pm — Cocktail Hour<br/>
          8:30pm-12:30am — Reception
        </div><br/>
        <h1 className="header-large">Attire</h1>
        <div className="paragraph-text">
          Cocktail / Black Tie Optional
        </div><br/>
      </div>
    );
  }
}
