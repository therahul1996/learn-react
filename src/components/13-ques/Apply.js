import React from 'react';

function ApplyExample() {
  const calculateSum = function(a, b, c) {
    return a + b + c;
  };

  return (
    <div>
      <p>Sum: {calculateSum.apply(null, [1, 2, 3])}</p>
    </div>
  );
}

export default ApplyExample;
