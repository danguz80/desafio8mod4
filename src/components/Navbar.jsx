import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importar useNavigate para la redirección
import { UserContext } from '../context/UserContext';  // Para gestionar el token
import { CartContext } from '../context/CartContext';  // Para gestionar el total del carrito
import './navbar.css';

const Navbar = () => {
  const { token, logout } = useContext(UserContext);  // Obtener el token y la función logout
  const { total } = useContext(CartContext);  // Obtener el total del carrito
  const navigate = useNavigate();  // Inicializar el hook useNavigate para redirección

  const handleLogout = () => {
    logout();  // Llamar a la función logout del contexto
    navigate('/login');  // Redirigir al usuario a la página de login después de cerrar sesión
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <Link to="/" className="text-white navbar-brand ms-4 text-decoration-none">Pizzeria Mamma Mía!</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {token ? (
            <>
              <li className="nav-item">
                <Link to="/profile" className="text-white ms-3 text-decoration-none">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-link text-white ms-3 text-decoration-none">🔓 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="text-white ms-3 text-decoration-none">🔓 Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="text-white ms-3 text-decoration-none">🔓 Register</Link>
              </li>
            </>
          )}
        </ul>
        <form className="position-absolute end-0 me-4">
          <button className="btn btn-outline-info" type="submit">
            <Link to="/cart" className="text-white ms-3 text-decoration-none nav-link btn-hover">
              🛒 Total: ${total.toLocaleString()}
            </Link>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
