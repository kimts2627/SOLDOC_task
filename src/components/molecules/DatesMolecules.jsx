import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import Dates from '../atoms/Dates';

const DatesMolecules = ({ selectedData, changeSelectedData }) => {
  return (
    <section className="DatesMolecules">
      <SectionTitle sectionName={'날짜'} />
      <Dates selectedData={selectedData} changeSelectedData={changeSelectedData} />
    </section>
  );
}

export default DatesMolecules;
