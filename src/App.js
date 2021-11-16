import { GlobalStyle } from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Product from './components/Product';
import Signup from './components/Signup';
import Signin from './components/Signin';
import UserContext from './contexts/UserContext';
import React, { useState, useEffect } from 'react';
import GuitarLesson from './components/GuitarLesson';
import Cart from './components/Cart';
import Orders from './components/Orders';

function App() {
  const [userData, setUserData] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const sessionCart = JSON.parse(sessionStorage.getItem('cart'));
    if (sessionCart) {
      console.log(sessionCart);
      setCart(sessionCart);
    }
    const loginUser = JSON.parse(localStorage.getItem('loginUser'));
    if (loginUser) {
      setUserData(loginUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, cart, setCart }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/guitar" element={<GuitarLesson />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
