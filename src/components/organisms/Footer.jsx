import React from 'react';
import AdditionalMolecules from '../molecules/AdditionalMolecules';
import Button from '../atoms/Button';


const Footer = ({ selectedData, changeSelectedData }) => {
  return (
    <footer className="Footer">
      <AdditionalMolecules selectedData={selectedData} changeSelectedData={changeSelectedData} />
      <Button />
    </footer>
  );
}

export default Footer;
