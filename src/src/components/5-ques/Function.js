import React from 'react';

const MyComponent = () => {
  const handleUnknownEvent = (event) => {
    // You can access common properties of the event
    const eventType = event.type;
    const targetValue = event.target.value;

    // Handle the event based on its type or other properties
    console.log(`Received unknown event of type: ${eventType}`);
    console.log(`Target value: ${targetValue}`);

    // Add your custom logic here based on the event type or other properties
  };

  return (
    <div>
      <input type="text" onChange={handleUnknownEvent} />
      <button onClick={handleUnknownEvent}>Click me</button>
    </div>
  );
};

export default MyComponent;
