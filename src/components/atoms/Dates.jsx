import React, { useRef, useEffect } from 'react';

const Dates = ({ selectedData, changeSelectedData }) => {

  let todayRef = useRef();
  useEffect(() => {
    let changedData = Object.assign({}, selectedData, { date: todayRef.current.textContent });
    if(selectedData.date === null) {
      changeSelectedData(changedData);
    }
  }, [selectedData]);

  const getTodayDates = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
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
    <p className="today" ref={todayRef}>
      {getTodayDates()}
    </p>
  );
}

export default Dates;