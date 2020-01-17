import axios from 'axios';

const api = axios.create({ baseURL: 'https://dev.bckstg.com.br' });

export default api;