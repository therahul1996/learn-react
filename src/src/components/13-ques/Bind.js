import React, { useState } from 'react';

function BindExample() {
  const [count, setCount] = useState(0);

  const increment = function() {
    setCount(count + 1);
  };

  const decrement = increment.bind(null, -1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default BindExample;
