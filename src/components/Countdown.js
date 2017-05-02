import React from 'react';

export default class Countdown extends React.Component {
  calculateDaysLeft() {
    let today = new Date();
    let weddingDate = new Date("April 29, 2017");
    let distance = today - weddingDate;
    return Math.ceil(distance / 86400000);
  }

  render() {
    let daysSince = this.calculateDaysLeft();
    return (
      <div className="countdown">
        <i className="fa fa-hourglass-half"></i>
          &nbsp;&nbsp;{daysSince} days since our wedding!&nbsp;&nbsp;
        <i className="fa fa-hourglass-half"></i>
      </div>
    );
  }
}
