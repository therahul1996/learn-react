import React from 'react';

function FilterExample() {
  const numbers = [1, 2, 3, 4, 5];

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  return (
    <div>
      <p>Original Numbers: {numbers.join(', ')}</p>
      <p>Even Numbers: {evenNumbers.join(', ')}</p>
    </div>
  );
}

export default FilterExample;
