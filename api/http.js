import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

function get(url, param) {
    return axios.get(url, {
        params: param,
        responseType: 'json'
    });
}

export {get};