import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams(); // Obtener el id de la pizza desde la URL
  const { addPizzaToCart } = useContext(CartContext); // Usar el contexto del carrito
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizzaData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data); // Guardar los datos de la pizza en el estado
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };
    getPizzaData();
  }, [id]);

  // Función para añadir la pizza al carrito
  const handleAddToCart = () => {
    if (pizza) {
      const pizzaToAdd = { id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img };
      addPizzaToCart(pizzaToAdd); // Añadir la pizza al carrito usando el contexto
    }
  };

  return (
    <div className="card" style={{ width: '30rem', margin: '2rem auto' }}>
      {pizza ? (
        <>
          <img src={pizza.img} className="card-img-top" alt={pizza.name} />
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <p className="card-text">{pizza.desc}</p>
            <ul className="card-text">Ingredientes:
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
            <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
            <button onClick={handleAddToCart} className="btn btn-dark">Añadir 🛒</button>
          </div>
        </>
      ) : (
        <p>Cargando información de la pizza...</p>
      )}
    </div>
  );
};

export default Pizza;
