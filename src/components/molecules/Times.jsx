import React, { useState, useEffect } from 'react';
import SingleTime from '../atoms/SingleTime';

const Times = () => {

  const [times, setTimes] = useState(
    ['16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '>']
  ); 

  return (
    <div className="Times">
      {times.map(time => <SingleTime time={time} setTimes={setTimes} />)}
    </div>
  );
}

export default Times;