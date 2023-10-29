import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nandinhatn.github.io/DataFakeMusic/'
})

export default api;