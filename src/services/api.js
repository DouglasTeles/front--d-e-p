import axios from 'axios';


const api = axios.create({
    baseURL:'https://getao-republica.herokuapp.com'
    
});

export default api;   