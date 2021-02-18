import React, { useRef } from 'react';

const SingleTime = ({ time, times, setTimes, selectedData, changeSelectedData }) => {

  const buttonRef = useRef();

  
  // 하나의 시간 선택 버튼 선택시 작동하는 함수
  const handleButtonClick = () => {
    // > 버튼을 누를 시 시간표 변경
    if(buttonRef.current.textContent === '>') {
      if(times[0] === '09:00') {
        setTimes(['12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '>']);
        return;
      }
      else {
        setTimes(['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '>']);
        return;
      }
    }
    // 버튼 클릭 시 선택된 스타일 변경 및 해제
    if(buttonRef.current.className === 'SingleTime') {
      // 만약 다른 버튼이 선택되어 있을 경우 해제
      if(document.querySelector('.SingleTime-active')) {
        document.querySelector('.SingleTime-active').classList = 'SingleTime';
      }
      buttonRef.current.className = 'SingleTime-active';
      let changedData = Object.assign({}, selectedData, { time: buttonRef.current.textContent });
      changeSelectedData(changedData);
    }
    else if(buttonRef.current.className === 'SingleTime-active') {
      buttonRef.current.className = 'SingleTime';
      let changedData = Object.assign({}, selectedData, { time: null });
      changeSelectedData(changedData);
    }
  }

  return (
    <button className='SingleTime' ref={buttonRef} onClick={handleButtonClick}>
      {time}
    </button>
  );
}

export default SingleTime;