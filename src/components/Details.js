import React from 'react';

export default class Details extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <div className="flex-grid">
          <div className="col">
            <div className="col-box left-box">
              <h1 className="header-large">
                Welcome Events
              </h1>
              <span className="header-medium">
                Friday, April 28th<br/>
              </span>
              <span className="paragraph-text">
                <strong>Welcome Party @ Storyville Mini-Bar<br/>
                51 Huntington Avenue<br/>
                9pm-midnight<br/><br/></strong>
                <em>Come hear the Klyce Family Band play and join us for some informal drinks, dancing, and conversation!</em><br/><br/>
              </span>
              <span className="header-medium">
                Saturday, April 29th<br/>
              </span>
              <span className="paragraph-text">
                <strong>Welcome Picnic in Boston Common<br/>
                10am-11am (Katie)<br/>
                11:15am-1pm (Walter)<br/><br/></strong>
                Hang out with the bride and groom in the park (weather permitting)!<br/>
                They will be there in shifts, to avoid seeing each other before the ceremony.<br/><br/>

                <em>Meet us at the &nbsp;
                <a href="https://www.google.com/maps/place/Charles+Sumner+Statue/@42.3524105,-71.0720215,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a75b1d5a079:0xfcb1bb93b9320857!8m2!3d42.3524105!4d-71.0698328" target="_blank">
                  Charles Sumner Statue
                </a>,&nbsp; and bring your favorite snacks and lawn games.<br/><br/><br/></em>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="col-box left-box">
              <h1 className="header-large">
                THE WEDDING
              </h1>
              <span className="header-medium">
                Saturday, April 29th<br/>
              </span>
              <span className="paragraph-text">
                <strong>The Boston Public Library<br/>
                230 Dartmouth Street<br/><br/></strong>

                Ceremony at 7pm.<br/>
                Cocktails & reception to follow.<br/><br/>
                <em>Formal attire requested. (That's fancy-speak for "suits, not tuxes".) Wear what you feel comfortable in!<br/><br/>
                The ceremony and cocktail hour will be outdoors (weather permitting), so you may want to bring a light layer.<br/><br/></em>
              </span>
              <img src="https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_300/v1477838773/bpl-exterior_zqwplq.jpg" className="basic-img"/><br/><br/><br/>
            </div>
          </div>
          <div className="col">
            <div className="col-box left-box">
              <h1 className="header-large">
                Bluegrass Brunch
              </h1>
              <span className="header-medium">
                Sunday, April 30th<br/>
              </span>
              <span className="paragraph-text">
                <strong>The Lenox Hotel, Dome Room<br/>
                9:30am-12:30pm<br/><br/></strong>

                Esther Pearson, the groom's grandmother, is hosting a Sunday brunch in the newlyweds' honor.<br/><br/>
                <em>Come listen to bluegrass, eat some delicious food, and say farewell to Katie & Walter!<br/><br/><br/></em>
              </span>
            </div>
          </div>
        </div>
        <img src="https://res.cloudinary.com/hnswgapni/image/upload/c_scale,w_1000/v1477838775/masthead_pe8tfq.png" className="centered-masthead" />
      </div>
    );
  }
}
