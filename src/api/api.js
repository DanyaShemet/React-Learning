import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/", 
    headers: {
        "API-KEY": 'dccb8e49-8f69-4521-b1de-a88b38babd4b'
        
    } 
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    getUnFollow:  (id) =>{
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getFollow: (id) => {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}




