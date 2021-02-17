import React from 'react';

const Dates = () => {

  const getTodayDates = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();

    if(month < 10) {
      month = '0' + month;
    }
    else if(date < 10) {
      date = '0' + date;
    }

    return `${month} / ${date} / ${year}`;
  }

  return (
    <p className="today">
      {getTodayDates()}
    </p>
  );
}

export default Dates;