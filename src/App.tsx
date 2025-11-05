import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import MainPortal from './components/MainPortal';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <MainPortal onLogout={handleLogout} />
      )}
    </div>
  );
}
