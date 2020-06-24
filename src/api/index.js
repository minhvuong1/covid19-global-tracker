import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// Async deals with promises
const fetchData = async () => {
    // Try is going to be executed if fetch is successful
    try {
        const response = await axios.get(url);

        return response;

    } catch (error) {

    }
}

export default fetchData;