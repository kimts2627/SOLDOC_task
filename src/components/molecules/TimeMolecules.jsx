import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import Times from '../molecules/Times';

const TimeMolecules = () => {
  return (
    <section className="TimeMolecules">
      <SectionTitle sectionName={'시간'} />
      <Times />
    </section>
  );
}

export default TimeMolecules;