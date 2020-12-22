import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bwaTKjAv6Xq43V9wlfeBckrjd5uki7lw5wD4PeBYApc'
    }
});