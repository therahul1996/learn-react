import React from 'react';

function MapExample() {
  const numbers = [1, 2, 3, 4, 5];

  const squaredNumbers = numbers.map(number => number * number);

  return (
    <div>
      <p>Original Numbers: {numbers.join(', ')}</p>
      <p>Squared Numbers: {squaredNumbers.join(', ')}</p>
    </div>
  );
}

export default MapExample;
