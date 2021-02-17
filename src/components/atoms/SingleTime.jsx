import React from 'react';

const SingleTime = ({ time, setTimes }) => {
  return (
    <button className='SingleTime'>
      {time}
    </button>
  );
}

export default SingleTime;