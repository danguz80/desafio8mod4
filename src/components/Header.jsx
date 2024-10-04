import React from 'react';
import './header.css';

const Header = () => {
    return (
      <div className="background-container">
        <div className="overlay-text">
          <h1 className='titulo-header'>¡Pizzeria Mamma Mia!</h1>
          <p className='subtitulo-header'>¡Tenemos las mejores pizzas que podrías encontrar!</p>
        </div>
      </div>
    );
  };

export default Header;