import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  // Si el token no está presente (false), redirige al usuario a la página de login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
