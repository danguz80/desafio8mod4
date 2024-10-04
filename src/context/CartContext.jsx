import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para agregar pizza al carrito
  const addPizzaToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      setCart(cart.map(item =>
        item.id === pizza.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };
  
  const increaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart => 
      cart.map(pizza => 
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      // Filtrar para eliminar pizzas con cantidad <= 0
      .filter(pizza => pizza.quantity > 0)
    );
  };
  
  // Función para actualizar el total
  const updateTotal = () => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  // Efecto para actualizar el total cada vez que cambie el carrito
  useEffect(() => {
    updateTotal();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity, setCart, total, addPizzaToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
