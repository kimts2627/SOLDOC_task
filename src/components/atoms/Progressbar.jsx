import React from 'react';

const Progressbar = ({ selectedData }) => {

  const checkProgress = () => {
    let progressNum = 0;
    for(let i in selectedData) {
      if(selectedData[i]) {
        progressNum += 1;
      }
    }

    if(progressNum > 0) {
      if(progressNum === 1) {
        return 'progress-one';
      }
      else if(progressNum === 2) {
        return 'progress-two';
      }
      else {
        return 'progress-three';
      }
    }
    else {
      return 'progress';
    }
  }

  return (
    <div
      className={checkProgress()}
    />
  );
}

export default Progressbar;
