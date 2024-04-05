import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import OneboxScreen from './OneboxScreen';
import './App.css'; // Import your CSS file containing styles for both light and dark modes

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <Routes>
        <Route path="/google-login" element={<Login />} />
        <Route path="/onebox" element={<OneboxScreen />} />
        <Route path="*" element={<Navigate to="/google-login" />} />
      </Routes>
    </Router>
  );
}

export default App;
