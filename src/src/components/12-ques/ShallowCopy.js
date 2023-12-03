import React, { useState, useEffect } from 'react';

function ShallowCopyExample() {
  const [originalArray, setOriginalArray] = useState([1, 2, 3]);
  const [copiedArray, setCopiedArray] = useState([]);

  useEffect(() => {
    // Shallow copy using spread operator
    setCopiedArray([...originalArray]);
  }, [originalArray]);

  const modifyCopiedArray = () => {
    copiedArray[0] = 999;
    setCopiedArray([...copiedArray]);
  };

  return (
    <div>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Copied Array: {copiedArray.join(', ')}</p>
      <button onClick={modifyCopiedArray}>Modify Copied Array</button>
    </div>
  );
}

export default ShallowCopyExample;
