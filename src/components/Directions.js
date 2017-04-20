import React from 'react';

export default class Directions extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <div className="flex-grid">
          <div className="col">
            <div className="col-box">
              <h1 className="header-large">
                Drive
              </h1>
              <div className="paragraph-text">
                If you're driving, we recommend using Google Maps for directions.<br/><br/>
                Parking is available in the Back Bay Garage (
                  <a href="https://www.google.com/maps/place/199+Clarendon+St,+Boston,+MA+02116/@42.3501805,-71.07692,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a0ca1394d57:0x4129d7b0c5202d2a!8m2!3d42.3501805!4d-71.0747313" target="_blank">
                    199 Clarendon Street
                  </a>)
                and is $8 for the night with a voucher from the library.<br/><br/>
                <span className="small-text">
                  Vouchers will be available at the coat check and bars,
                  or you can ask any library staff for one!
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-box">
              <h1 className="header-large">
                Fly
              </h1>
              <div className="paragraph-text">
                The closest airport is Logan International Airport in Boston (15 minute drive).<br/><br/>
                If you need a cab,&nbsp;
                <a href="https://lyft.com/ici/KATIE625173" target="_blank">
                  click here
                </a>&nbsp;
                for $50 off Lyft, or&nbsp;
                <a href="http://www.uber.com/invite/jiaih" target="_blank">
                  click here
                </a>&nbsp;
                for $20 off Uber!
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-box">
              <h1 className="header-large">
                Train
              </h1>
              <div className="paragraph-text">
                If you're coming via Amtrak or the MBTA Commuter Rail,
                the closest station is Back Bay (5 min walk).<br/><br/>
                If you're coming via the T, the closest stations are
                Back Bay (Orange Line) and Copley (Green Line).
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grid">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10717.754287792144!2d-71.08557928933894!3d42.35035521123144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0c429bf853%3A0xb9d45dfe5bc1ac73!2sBoston+Public+Library!5e0!3m2!1sen!2sus!4v1459113254232"
                  width="600"
                  height="350">
          </iframe>
        </div>
      </div>
    );
  }
}
