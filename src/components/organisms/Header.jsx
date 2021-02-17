import React from 'react';
import Titles from '../molecules/TitlesMolecules';
import SoldocLogo from '../atoms/SoldocLogo';


const Header = () => {
  return (
    <header className="Header">
      <SoldocLogo />
      <Titles />
    </header>
  );
}

export default Header;