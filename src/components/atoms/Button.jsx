import React from 'react';

const Button = ({ selectedData }) => {

  // 모든 항목 작성 시 버튼 클릭 가능
  const handleMainButton = () => {
    for(let i in selectedData) {
      if(!selectedData[i]) {
        return alert('모든 항목을 입력해 주세요');
      }
      else {
        // fetch().... 서버로 전송
      }
    }
  }

  return (
    <button className="Button" onClick={handleMainButton}>
      예약
    </button>
  );
}

export default Button;
