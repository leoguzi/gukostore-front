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

function App() {
  const [userData, setUserData] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem('loginUser'));
    if (loginUser) {
      setUserData(loginUser);
    }
    const sessionCart = JSON.parse(localStorage.getItem('cart'));
    if (sessionCart) {
      console.log(sessionCart);
      setCart(sessionCart);
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
          <Route path="/guitar" element={<GuitarLesson />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
