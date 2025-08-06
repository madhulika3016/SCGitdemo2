// ChildComponent.js
import React from 'react';
function ChildComponent({ onChildClick }) {
  const handleClick = () => {
    onChildClick('Hello from Child!');
  };
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
export default ChildComponent;