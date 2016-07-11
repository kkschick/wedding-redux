import React from 'react';

export default class Accommodations extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-large">Accommodations</h1>
        <div className="paragraph-text">
          <span className="one-line-text">We have hotel blocks at four hotels around the Boston Public Library.</span>
          <span className="one-line-text">All hotels are within walking distance of the library.</span>
        </div>
        <h1 className="header-medium">The Midtown Hotel</h1>
        <div className="paragraph-text">
          <span className="one-line-text">
            Rate: $189/night
          </span>
          <span className="one-line-text">
            Block Name: Schick Klyce Wedding
          </span>
          <span className="one-line-text">
            Block Code: SCHKLYWED
          </span>
          <span className="one-line-text">
            Reserve Online: Go to 
            <a href="http://www.midtownhotel.com" target="_blank">
              www.midtownhotel.com
            </a> and type in the block code SCHKLYWED.
          </span>
          <span className="one-line-text">
            Reserve via Phone: Call the hotel at 617-262-1000 or 1-800-343-1177 and mention the Schick Klyce Wedding block.
          </span>
          <span className="one-line-text">
            Other Info: Cancellations must be made 24 hours prior to arrival to avoid a first night room and tax penalty. Parking is available for $29/night.
          </span>
        </div>
        <h1 className="header-medium">The Marriott Courtyard Copley Square</h1>
        <div className="paragraph-text">
          <span className="one-line-text">
            Rate: $257/night
          </span>
          <span className="one-line-text">
            Block Name: Schick Klyce Wedding
          </span>
          <span className="one-line-text">
            Reserve Online: Go to 
            <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Schick%20Klyce%20Wedding%5Ebosdt%60SKWSKWA%7CSKWSKWB%60259.00%60USD%60false%601%604/28/17%604/30/17%603/28/17&app=resvlink&stop_mobi=yes" target="_blank">
              our special reservations link
            </a> to reserve directly.
          </span>
          <span className="one-line-text">
            Reserve via Phone: Call the hotel at 1-800-228-9290 and mention the Schick Klyce Wedding block.
          </span>
          <span className="one-line-text">
            Other Info: Cancellations must be made 24 hours prior to arrival to avoid a first night room and tax penalty. Parking is available for $45/night.
          </span>
        </div>
        <h1 className="header-medium">The Lenox Hotel</h1>
        <div className="paragraph-text">
          $279/night
        </div>
        <h1 className="header-medium">The Westin Copley Square</h1>
        <div className="paragraph-text">
          $299/night
        </div>
      </div>
    );
  }
}
