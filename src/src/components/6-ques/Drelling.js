import React from 'react';

// Grandchild component that needs access to a prop
function GrandchildComponent({ value }) {
  return <p>Value from parent: {value}</p>;
}

// Child component that passes the prop to the grandchild
function ChildComponent({ value }) {
  return <GrandchildComponent value={value} />;
}

// Parent component that passes the prop to the child
function ParentComponent({ value }) {
  return <ChildComponent value={value} />;
}

// App component
function App() {
  const data = "Hello, Prop Drilling!";

  return <ParentComponent value={data} />;
}

export default App;
