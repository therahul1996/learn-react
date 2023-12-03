import React, { useState } from 'react';

function ControlledComponentExample() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default ControlledComponentExample;
