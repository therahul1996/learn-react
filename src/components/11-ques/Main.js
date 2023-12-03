import React from 'react';

const ParentComponent = () => {
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  return (
    <div onClick={handleParentClick} style={{ border: '1px solid black', padding: '20px' }}>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  const handleChildClick = () => {
    console.log('Child clicked');
  };

  return (
    <div onClick={handleChildClick} style={{ border: '1px solid red', padding: '10px' }}>
      Click me (Child)
    </div>
  );
};

export default ParentComponent;
