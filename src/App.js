// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import OneboxScreen from './OneboxScreen';
import './App.css';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div>
        <header>
          <div className="header-content">
            <div className="logo">ReachInbox</div>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <Routes>
            <Route path="/google-login" element={<Login />} />
            <Route path="/onebox" element={<OneboxScreen />} />
            <Route path="*" element={<Navigate to="/google-login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
