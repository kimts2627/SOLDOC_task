import React from 'react';

const InputBox = ({ inputType, selectedData, changeSelectedData }) => {

  // additional input box 안에 타이핑 시 state에 자동으로 업데이트하는 함수
  const handleInputChange = (e) => {
    let changedData = Object.assign({}, selectedData, { additional: e.target.value });
    changeSelectedData(changedData);
  }

  return (
    <textarea
      wrap='virtual'
      placeholder={
        inputType === 'additional' ? '평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 알아야 할 내용이 있다면 여기에 적어주세요.' : undefined
      }
      className={
        inputType === 'additional' ? 'input additional' : 'input etc'
      }
      onChange={(e) => handleInputChange(e)}
    >
    </textarea>
  );
}

export default InputBox;
