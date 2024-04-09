// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login process (replace with actual login logic)
    if (email === "agilaganesan08@gmail.com" && password === "Agila") {
      // Redirect to Onebox page after successful login
      navigate('/onebox');
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Reachinbox Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
