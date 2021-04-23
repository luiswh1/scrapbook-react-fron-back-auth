import axios from 'axios';

export default axios.create({
    baseURL: 'https://scrap-roger.herokuapp.com/api/v1/',
});