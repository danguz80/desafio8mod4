// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Oops! Página no encontrada.</p>
      <Link to="/" style={styles.link}>
        Volver al Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: '10rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1rem',
    border: '1px solid #007bff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  },
};

export default NotFound;
