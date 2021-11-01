import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { loading, authenticated, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
