import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Makeup from './components/Makeup';
import Header from './components/Header';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Jewellery from './components/Jewellery';
import { UserProvider } from './context/UserContext';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/men" element={<Men addToCart={addToCart} />} />
        <Route path="/women" element={<Women addToCart={addToCart} />} />
        <Route path="/kids" element={<Kids addToCart={addToCart} />} />
        <Route path="/makeup" element={<Makeup addToCart={addToCart} />} />
        <Route path="/jewellery" element={<Jewellery addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
