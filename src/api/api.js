import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/',
});
export const userAPI = {
    getUsers() {
        return instance.get(`users`)
            .then(response => {
                return response.data.users;
            });
    },
    getUser() {
        return instance.get(`user`)
            .then(response => {
                return response.data.user;
            });
    }
}