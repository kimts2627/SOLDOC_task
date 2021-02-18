import React, { useState } from 'react';
import Header from '../organisms/Header.jsx';
import DatesAndTime from '../organisms/DatesAndTime.jsx';
import Footer from '../organisms/Footer.jsx';
import Progressbar from '../atoms/Progressbar.jsx';

const App = () => {

  // 작성 및 선택한 내용이 담기는 state 해당 state를 통해서 서버에 내용을 전송한다.
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
      <DatesAndTime selectedData={selectedData} changeSelectedData={changeSelectedData}/>
      <Footer selectedData={selectedData} changeSelectedData={changeSelectedData} />
    </div>
  );
}

export default App;
