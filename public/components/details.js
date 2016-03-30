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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10717.754287792144!2d-71.08557928933894!3d42.35035521123144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0c429bf853%3A0xb9d45dfe5bc1ac73!2sBoston+Public+Library!5e0!3m2!1sen!2sus!4v1459113254232"
                  width="500"
                  height="375">
          </iframe>
        </div><br/>
        <h1 className="header-large">The Schedule</h1>
        <div className="paragraph-text">
          7pm — Ceremony<br/>
          7:30pm — Cocktail Hour<br/>
          8:30pm-12:30am — Dinner & Dancing!<br/><br/>
          Cocktail Attire / Black Tie Optional
        </div><br/>
      </div>
    );
  }
}
