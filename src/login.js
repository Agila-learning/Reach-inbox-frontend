// Login.js

import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login process (replace with actual login logic)
    if (email === "agilaganesan08@gmail.com" && password === "Agila") {
      alert("Login successful!"); // Replace with redirect to dashboard or next page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="container">
      <h2>Reachinbox Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
