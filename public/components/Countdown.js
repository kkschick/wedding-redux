import React from 'react';

export default class Countdown extends React.Component {
  calculateDaysLeft() {
    let today = new Date();
    let weddingDate = new Date("April 29, 2017");
    let distance = weddingDate - today;
    return Math.ceil(distance / 86400000);
  }

  render() {
    let daysLeft = this.calculateDaysLeft();
    return <div>{daysLeft} days to go!</div>;
  }
}
