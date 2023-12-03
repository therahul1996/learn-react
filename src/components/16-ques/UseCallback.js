import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // The empty dependency array indicates that the function should never change

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={handleIncrement} />
    </div>
  );
}

function ChildComponent({ increment }) {
  console.log('ChildComponent rendering');
  return (
    <button onClick={increment}>Increment</button>
  );
}

export default ParentComponent;
