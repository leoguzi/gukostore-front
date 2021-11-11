import axios from 'axios';
//const URL = 'https://gukostore.herokuapp.com';
const URL = 'http://localhost:4000';

function fetchProducts() {
  return axios.get(`${URL}/products`);
}

function fetchProduct(id) {
  return axios.get(`${URL}/products/${id}`);
}

export { fetchProducts, fetchProduct };
