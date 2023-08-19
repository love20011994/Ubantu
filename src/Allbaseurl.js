import axios from 'axios';
const tokenData= localStorage.getItem('token')

axios.defaults.headers.common['Authorization'] = `Bearer ${tokenData}`;

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/products'  // replace with your API base URL
});

export default instance;