import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import Times from '../molecules/Times';

const TimeMolecules = ({ selectedData, changeSelectedData }) => {
  return (
    <section className="TimeMolecules">
      <SectionTitle sectionName={'시간'} />
      <Times selectedData={selectedData} changeSelectedData={changeSelectedData} />
    </section>
  );
}

export default TimeMolecules;