import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Welcome onLoginClick={handleLoginClick} />
      ) : isAdmin ? (
        <AdminPage />
      ) : (
        <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
