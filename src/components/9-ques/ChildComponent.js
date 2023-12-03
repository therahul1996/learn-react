import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
}

export default ChildComponent;
