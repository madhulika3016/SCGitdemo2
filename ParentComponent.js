import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
function ParentComponent() 
{
  const [message, setMessage] = useState('');
  const handleChildClick = (newMessage) => {
    setMessage(newMessage);
  };
  return (
    <div>
      <p>Message from Child: {message}</p>
      <ChildComponent onChildClick={handleChildClick} />
    </div>
  );
}
export default ParentComponent;