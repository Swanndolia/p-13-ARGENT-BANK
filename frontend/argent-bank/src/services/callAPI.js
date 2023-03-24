import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:3001/api/v1';

export async function tryLogin(data) {
    return (
        await axios.post('/user/login', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    )
}