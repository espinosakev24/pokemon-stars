import React from 'react';
import { useAuthContext } from 'context/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'components/Spinner';

export const Protected = ({ children }) => {
  const { token } = useAuthContext();

  if (token === null) {
    return <Spinner size="xlarge" />;
  }
  if (token === false) {
    return <Redirect to="/login" />;
  }

  return <div>{children}</div>;
};
