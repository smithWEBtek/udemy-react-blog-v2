import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'

});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';


// can also use request and response configs here, to taylor behavior

export default instance;