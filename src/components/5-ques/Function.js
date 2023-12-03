import React, { useState } from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button has been clicked {count} times.</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default ButtonCounter;
