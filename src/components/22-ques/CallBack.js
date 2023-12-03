import React, { useState } from 'react';

function ChildComponent(props) {
  // This function is called when the button in ChildComponent is clicked
  const handleClick = () => {
    props.onButtonClick('Button in ChildComponent clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function ParentComponent() {
  // State to hold a message from ChildComponent
  const [message, setMessage] = useState('');

  // Callback function passed as a prop to ChildComponent
  const handleChildButtonClick = (childMessage) => {
    setMessage(childMessage);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>{message}</p>
      <ChildComponent onButtonClick={handleChildButtonClick} />
    </div>
  );
}

export default ParentComponent;
