import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num1, num2 }) {
  // This function is expensive and will be memoized using useMemo
  const calculateResult = (a, b) => {
    console.log('Calculating...');
    return a + b;
  };

  // Memoize the result of the calculation
  const result = useMemo(() => calculateResult(num1, num2), [num1, num2]);

  return <div>Result: {result}</div>;
}

function App() {
  const [value1, setValue1] = useState(5);
  const [value2, setValue2] = useState(10);

  return (
    <div>
      <ExpensiveCalculation num1={value1} num2={value2} />
      <button onClick={() => setValue1(value1 + 1)}>Increment Value 1</button>
      <button onClick={() => setValue2(value2 + 1)}>Increment Value 2</button>
    </div>
  );
}

export default App;
