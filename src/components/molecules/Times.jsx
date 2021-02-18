import React, { useState } from 'react';
import SingleTime from '../atoms/SingleTime';

const Times = ({ selectedData, changeSelectedData }) => {

  const [times, setTimes] = useState(
    ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '>']
  ); 

  return (
    <div className="Times">
      {times.map(
        time =>
        <SingleTime
          key={time}
          time={time}
          times={times}
          setTimes={setTimes}
          selectedData={selectedData}
          changeSelectedData={changeSelectedData}
        />
      )}
    </div>
  );
}

export default Times;