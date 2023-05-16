import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
    return (
        instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    )
}


export const setUserProfileAPI = (userId) => {
    return (
        instance
            .get(`profile/${userId}`)
    )
}


export const authAPI = () => {
    return (
        instance
            .get(`auth/me`)
    )
}


export const followAPI = (userId) => {
    return (
        instance
            .post(`follow/${userId}`
            )
    )
}

export const unfollowAPI = (userId) => {
    return (
        instance
            .delete(`follow/${userId}`
            )
    )
}

export const getStatusAPI = (userId) => {
    return (
        instance.get(`profile/status/${userId}`)
    )
}

export const updateStatusAPI = (status) => {
    return (instance.put(`profile/status`, { status })
        .then(response => response.data)
    )
}

export const loginAPI = (email, password, rememberMe = false, captcha = null) => {
    return (
        instance.post('auth/login', { email, password, rememberMe, captcha })
    )
}

export const logoutAPI = (email, password, rememberMe = false) => {
    return (
        instance.delete('auth/login')
    )
}

export const savePhotoAPI = (file) => {
    let formData = new FormData()
    formData.append('image', file)

    return (
        instance.put('profile/photo', formData, { headers: 'Content-type: "multipart/form-data" ' })
    )
}

export const saveProfileAPI = (profile) => {
    return (
        instance.put('profile', profile)
    )
}

export const getCaptchaUrl = () => {
    return (
        instance.get(`security/get-captcha-url`)
    )
}