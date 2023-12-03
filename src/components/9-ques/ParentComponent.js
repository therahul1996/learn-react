import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
const [message, setMessage] =useState('hello')
  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
