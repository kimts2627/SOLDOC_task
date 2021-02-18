import React from 'react';
import DatesMolecules from '../molecules/DatesMolecules';
import TimeMolecules from '../molecules/TimeMolecules';

const DatesAndTime = ({ selectedData, changeSelectedData }) => {
  return (
    <main className="DatesAndTime">
      <DatesMolecules selectedData={selectedData} changeSelectedData={changeSelectedData} />
      <TimeMolecules selectedData={selectedData} changeSelectedData={changeSelectedData} />
    </main>
  );
}

export default DatesAndTime;