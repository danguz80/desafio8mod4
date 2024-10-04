import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/CartContext';
import UserProvider from './context/UserContext'; // Importa el UserProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* Envuelve la app con UserProvider */}
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
