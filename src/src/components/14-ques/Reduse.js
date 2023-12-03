import React from 'react';

function ReduceExample() {
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default ReduceExample;
