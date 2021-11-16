import axios from 'axios';
const URL = 'https://gukostore.herokuapp.com';

function setConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function fetchProducts() {
  return axios.get(`${URL}/products`);
}

function fetchProduct(id) {
  return axios.get(`${URL}/products/${id}`);
}

function trySignup(user) {
  return axios.post(`${URL}/signup`, user);
}

function trySignin(user) {
  return axios.post(`${URL}/signin`, user);
}

function registerOrder(token, body) {
  return axios.post(`${URL}/orders`, body, setConfig(token));
}

function fetchUserOrders(token) {
  return axios.get(`${URL}/orders`, setConfig(token));
}

function fetchProductsByCategory(category) {
  return axios.get(`${URL}/products/category/${category}`);
}

export {
  fetchProducts,
  fetchProduct,
  trySignup,
  trySignin,
  registerOrder,
  fetchUserOrders,
  fetchProductsByCategory,
};
