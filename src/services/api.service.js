import axios from 'axios';
const URL = 'https://gukostore.herokuapp.com';

function fetchProducts() {
  return axios.get(`${URL}/products`);
}

export { fetchProducts };
