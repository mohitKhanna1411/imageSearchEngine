import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 1bc080716a41bcf19bb3dc96f9b4abfaf2e65b4ba19ae84e9deea48bcb59ffca'
    }
})

