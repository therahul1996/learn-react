import React, { useState } from 'react';

function EventLoopExample() {
  const [message, setMessage] = useState('Initial Message');

  const handleClick = () => {
    console.log('Button Clicked');
    setTimeout(() => {
      console.log('Timeout callback executed');
      setMessage('Message Updated');
    }, 2000);
    console.log('After setTimeout');
  };

  console.log('Component Rendered');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update Message</button>
    </div>
  );
}

export default EventLoopExample;
