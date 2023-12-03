import React, { useState } from 'react';

function DeepCopyExample() {
  const [originalArray, setOriginalArray] = useState([1, 2, 3]);
  const [deepCopiedArray, setDeepCopiedArray] = useState([]);

  const deepCopyArray = () => {
    const copiedArray = JSON.parse(JSON.stringify(originalArray));
    setDeepCopiedArray(copiedArray);
  };

  const modifyDeepCopiedArray = () => {
    deepCopiedArray[0] = 999;
    setDeepCopiedArray([...deepCopiedArray]);
  };

  return (
    <div>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Deep Copied Array: {deepCopiedArray.join(', ')}</p>
      <button onClick={deepCopyArray}>Deep Copy Array</button>
      <button onClick={modifyDeepCopiedArray}>Modify Deep Copied Array</button>
    </div>
  );
}

export default DeepCopyExample;
