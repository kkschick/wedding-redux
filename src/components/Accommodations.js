import React from 'react';

export default class Accommodations extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <div className="paragraph-text">
          <span>
            We have hotel blocks at four hotels near the Boston Public Library,<br/>
            all of which are within walking distance (see map below!).<br/><br/>
          </span>
          <span className="small-text">
            N.B. We realize that Boston hotels are expensive.<br/>
            If you're looking for a cheaper option, we recommend checking out&nbsp;
            <a href="http://www.airbnb.com/c/kschick" target="_blank">
              Airbnb
            </a>.<br/>
            (Use <a href="http://www.airbnb.com/c/kschick" target="_blank">
              this link
            </a> for $30 off!)
          </span>
        </div>
        <table className="paragraph-text">
          <thead>
            <tr>
              <th>Hotel</th>
              <th>Rate</th>
              <th>Make a Reservation</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr className="small-text">
              <td>The Lenox Hotel</td>
              <td>$279/night</td>
              <td>Online: Go to&nbsp;
                <a href="http://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=BOSLH&arrivalDate=04/28/2017&group=sc042817" target="_blank">
                  our special reservations link
                </a>&nbsp; to reserve.<br/><br/>
                Phone: Call the hotel at 617-536-5300 or 1-800-225-7676 and
                mention the Schick/Klyce Wedding block.
              </td>
              <td>—</td>
            </tr>
            <tr className="small-text">
              <td>The Westin Copley Place</td>
              <td>$299/night</td>
              <td>Phone: Call the hotel at 1-888-627-7054 and mention
                  the Schick/Klyce Wedding block.
              </td>
              <td>—</td>
            </tr>
            <tr className="small-text">
              <td>The Marriott Courtyard Copley Square</td>
              <td>$257/night</td>
              <td>Online: Go to&nbsp;
                <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Schick%20Klyce%20Wedding%5Ebosdt%60SKWSKWA%7CSKWSKWB%60259.00%60USD%60false%601%604/28/17%604/30/17%603/28/17&app=resvlink&stop_mobi=yes" target="_blank">
                  our special reservations link
                </a>&nbsp; to reserve.<br/><br/>
                Phone: Call the hotel at 1-800-228-9290 and mention
                the Schick/Klyce Wedding block.
              </td>
              <td>Parking is available for $45/night.</td>
            </tr>
            <tr className="small-text">
              <td>The Midtown Hotel</td>
              <td>$189/night</td>
              <td>Online: Go to &nbsp;
                <a href="http://www.midtownhotel.com" target="_blank">
                  www.midtownhotel.com
                </a>&nbsp;
                and type in the block code SCHKLYWED.<br/><br/>
                Phone: Call the hotel at 617-262-1000 or 1-800-343-1177 and
                mention the Schick/Klyce Wedding block.
              </td>
              <td>Parking is available for $29/night.</td>
            </tr>
          </tbody>
        </table>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1R4azUJxyyXr4x2hLiLaMqJvMqXI"
                width="640"
                height="480">
        </iframe>
      </div>
    );
  }
}
