import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://167.99.46.0/'
});

export default instance;