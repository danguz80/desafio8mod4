import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  const obtenerInfo = async () => {
    let respuesta = await fetch('http://localhost:4000/api/pizzas');
    let data = await respuesta.json();
    setPizzas(data);
  };

  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            addToCart={addToCart} // Pasamos la función addToCart
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
