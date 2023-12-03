import React, { useState, useMemo } from 'react';

const Memoization = () => {
  const [count, setCount] = useState(0);

  // Expensive calculation function
  const calculateExpensiveValue = (input) => {
    console.log('Calculating expensive value...');
    // Simulate a time-consuming calculation
    for (let i = 0; i < 1000000000; i++) {}
    return input * 2;
  };

  // Use useMemo to memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => {
    return calculateExpensiveValue(count);
  }, [count]);

  return (
    <div>
      <h1>Expensive Calculation Component</h1>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Memoization;
