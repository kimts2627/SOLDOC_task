import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import Dates from '../atoms/Dates';

const DatesMolecules = () => {
  return (
    <section className="DatesMolecules">
      <SectionTitle sectionName={'날짜'} />
      <Dates />
    </section>
  );
}

export default DatesMolecules;
