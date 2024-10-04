// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} /> {/* Ruta dinámica */}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
