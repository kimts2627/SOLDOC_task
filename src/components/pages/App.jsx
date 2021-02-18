import React, { useState } from 'react';
import Header from '../organisms/Header.jsx';
import DatesAndTime from '../organisms/DatesAndTime.jsx';
import Footer from '../organisms/Footer.jsx';
import Progressbar from '../atoms/Progressbar.jsx';

const App = () => {

  const [selectedData, changeSelectedData] = useState(
    {
      date: null,
      time: null,
      additional: ''
    }
  );

  return (
    <div className="App">
      <Progressbar selectedData={selectedData} />
      <Header />
      <DatesAndTime />
      <Footer />
    </div>
  );
}

export default App;
