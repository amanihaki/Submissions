import axios from 'axios';
const KEY = 'AIzaSyAWexm5yXwfN2ik5pPzBYIgQkVL5GxQOh8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
})