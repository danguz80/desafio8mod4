import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Token inicialmente null
  const [email, setEmail] = useState(null); // Estado para el email del usuario

  // Función de login
  const login = async (email, password) => {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      setToken(data.token);  // Guarda el token
      setEmail(data.email);  // Guarda el email
    }
  };

  // Función de register
  const register = async (email, password) => {
    const response = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      setToken(data.token);  // Guarda el token
      setEmail(data.email);  // Guarda el email
    }
  };

  // Función de logout
  const logout = () => {
    setToken(null); // Limpia el token
    setEmail(null); // Limpia el email
  };

  // **Función para obtener el perfil del usuario**
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`, // Usa el token almacenado
        },
      });
      const profileData = await response.json();
      return profileData; // Retorna los datos del perfil
    } catch (error) {
      console.error('Error al obtener el perfil:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, logout, login, register, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
