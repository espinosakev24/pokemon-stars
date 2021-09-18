import React, { createContext, memo, useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import http from 'services/http';
import jwtDecode from 'jwt-decode';

const tokenName = 'pokestars-access-token';

const AuthContext = createContext({ token: null });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = memo(({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem(tokenName);
    if (accessToken) {
      setToken(accessToken);
      http.setTokenInHeaders(accessToken);
      setUser(jwtDecode(accessToken));
    } else {
      setToken(false);
    }
  }, []);

  const login = (email, password) =>
    http.post('auth/login', { email, password }).then(({ access_token }) => {
      setToken(access_token);
      http.setTokenInHeaders(access_token);
      localStorage.setItem(tokenName, access_token);
    });

  const register = (email, password) =>
    http.post('users/register', { email, password });

  const logout = () => {
    localStorage.removeItem(tokenName);
    setToken(false);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
});
