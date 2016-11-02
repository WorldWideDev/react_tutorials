import axios from 'axios'

export function userSignupRequest(userData){
    console.log('posting user data', userData);
    return dispatch => {
        return axios.post('/api/users', userData)
    }
}

export function isUserExists(identifier){
    //console.log(field);
    return dispatch => {
        return axios.get(`/api/users/${identifier}`);
    }
}
// export function isUserExists(identifier, field){
//     console.log(field);
//     return dispatch => {
//         return axios.get(`/api/users/${identifier}/${field}`);
//     }
// }
