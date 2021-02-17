import React from 'react';

const InputBox = ({ inputType }) => {
  return (
    <input
      type='text'
      placeholder={
        inputType === 'additional' ? '평소 앓고 있던 질병, 또는 처방전 솔닥 닥터가 알아야 할 내용이 있다면 여기에 적어주세요.' : undefined
      }
      className={
        inputType === 'additional' ? 'input additional' : 'input etc'
      }
    >
    </input>
  );
}

export default InputBox;
