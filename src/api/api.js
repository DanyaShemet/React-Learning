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
        return instance.delete(`follow/${id}`)
    },  
    getFollow: (id) => {
        return instance.post(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    } ,
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
    }  
}


export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`, )
    },
    logIn (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
    },
    logOut () {
        return instance.delete(`auth/login`)
    }
}

