import axios from 'axios';

const api = axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://vouchernet.com.ng/vadmin/api2/apiLine.php'
});

export const login = (payload) => api.post(``,payload);

const apis = {
    login
}

export default apis;