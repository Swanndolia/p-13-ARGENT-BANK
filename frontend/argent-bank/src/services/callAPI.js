import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:3001/api/v1';

export async function tryLogin(data) {
    try {
      const response = await axios.post('/user/login', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error('Invalid email or password / serveur connexion');
      }
      throw error;
    }
  }

export async function getProfile(token) {
    return (
        await axios.post('/user/profile', null, { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error
            })
    )
}
export async function editName(data, token) {
    return (
        await axios.put('/user/profile', data, { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error
            })
    )
}
