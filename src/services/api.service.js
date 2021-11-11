import axios from 'axios';
const URL = 'http://localhost:4000'; //mudar depois para heroku

function fetchProducts() {
  return axios.get(`${URL}/products`);
}

function addToCart(body) {
  return axios.post(`${URL}/add-to-cart`, body);
}

export { fetchProducts, addToCart };
