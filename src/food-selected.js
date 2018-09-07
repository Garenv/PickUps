import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://foodtruck-58c83.firebaseio.com/'
});

export default instance;

