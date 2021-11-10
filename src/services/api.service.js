import axios from 'axios';
const URL = 'http://localhost:4000';

function fetchProducts() {
    return axios.get(`${URL}/products`);
}

export { fetchProducts };