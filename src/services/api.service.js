import axios from 'axios';
//const URL = 'https://gukostore.herokuapp.com';
const URL = 'http://localhost:4000';

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

export { fetchProducts, fetchProduct, trySignup, trySignin };
