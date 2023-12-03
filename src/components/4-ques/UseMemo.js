import React, { useState, useMemo } from "react";

function ExpensiveCalculation({ num1, num2 }) {
  const calculateResult = (a, b) => {
    console.log("Calculating...");
    return a + b;
  };
  const result = useMemo(() => calculateResult(num1, num2), [num1, num2]);

  return <div>Result: {result}</div>;
}

function UseMemoExample() {
  const [value1, setValue1] = useState(5);
  const [value2, setValue2] = useState(10);

  return (
    <div>
      <ExpensiveCalculation num1={value1} num2={value2} />
      <button onClick={() => setValue1(value1 + 1)}>Increment Value 1</button>
      <button onClick={() => setValue2(value2 + 2)}>Increment Value 2</button>
    </div>
  );
}

export default UseMemoExample;
