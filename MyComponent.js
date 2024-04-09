// MyComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Perform any necessary logic
    // Then navigate to the desired route
    navigate('/target-route');
  };

  return (
    <div>
      <h2>My Component</h2>
      <button onClick={handleNavigation}>Navigate</button>
    </div>
  );
}

export default MyComponent;
