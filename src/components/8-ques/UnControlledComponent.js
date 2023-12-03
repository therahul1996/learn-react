import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    alert('Input Value: ' + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}

export default UncontrolledInput;
