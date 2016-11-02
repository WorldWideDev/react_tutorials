import axios from 'axios';

export function login(data){
    console.log('in login dispatch with', data);
    return dispatch => {
        return axios.post('/api/auth', data)
    }
}
