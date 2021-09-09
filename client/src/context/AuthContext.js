import React, { createContext, memo, useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import http from 'services/http';

const tokenName = 'pokestars-access-token';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = memo(({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const accessToken = localStorage.getItem(tokenName);
    if (accessToken) {
      setToken(accessToken);
    } else {
      setToken(false);
    }
  }, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
});
