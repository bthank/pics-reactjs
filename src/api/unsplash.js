import axios from 'axios';

// axios.create allows us to create a customized object; customized just to make
// requests to some url with specific headers
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kZE4HrG4VmNHfeg4PuZlrYhafwDEH-kDXI2T-YJDcbc'
    }

});