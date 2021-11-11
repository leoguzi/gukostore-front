import axios from 'axios';
const URL = 'https://gukostore.herokuapp.com';

function fetchProducts() {
  return axios.get(`${URL}/products`);
}

function trySignup(user) {
  return axios.post(`${URL}/signup`, user);
}

function trySignin(user) {
  return axios.post(`${URL}/signin`, user);
}

export { fetchProducts, trySignup, trySignin };
