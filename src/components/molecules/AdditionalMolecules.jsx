import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import InputBox from '../atoms/InputBox';

const AdditionalMolecules = () => {
  return (
    <section className="AdditionalMolecules">
      <SectionTitle sectionName={'추가 사항 (옵션)'} />
      <InputBox inputType='additional'/>
    </section>
  );
}

export default AdditionalMolecules;
