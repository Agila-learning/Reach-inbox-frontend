import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => { 
  const history = useHistory();

 
  const handleLogin = () => { 
    history.push('/onebox');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button> {}
    </div>
  );
};

export default Login; 
