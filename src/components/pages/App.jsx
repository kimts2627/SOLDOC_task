import React from 'react';
import Header from '../organisms/Header.jsx';
import DatesAndTime from '../organisms/DatesAndTime.jsx';
import Footer from '../organisms/Footer.jsx';
import Progressbar from '../atoms/Progressbar.jsx';

const App = () => {
  return (
    <div className="App">
      <Progressbar />
      <Header />
      <DatesAndTime />
      <Footer />
    </div>
  );
}

export default App;
