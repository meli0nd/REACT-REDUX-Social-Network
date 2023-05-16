import { stopSubmit } from "redux-form";
import { setUserProfileAPI, getStatusAPI, updateStatusAPI, savePhotoAPI, saveProfileAPI } from "../API/API";

const ADD_POST = 'ADD-POST'
const SET_USER_PROILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_USER_PHOTO = 'SAVE_USER_PHOTO'

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', likesCount: 12 },
        { id: 2, post: 'It\'s my first post', likesCount: 5 },
        { id: 3, post: 'It\'s post', likesCount: 10 },
        { id: 4, post: 'It\'s', likesCount: 222 },
    ],
    profile: null,
    status: '',
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, { id: 5, post: action.body, likesCount: 0 }] }
        case SET_USER_PROILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case SAVE_USER_PHOTO: {
            return { ...state, profile: { ...state.profile, photos: action.file } }
        }
        default:
            return state;
    }


}
export const addPostActionCreator = (body) => { return { type: ADD_POST, body } }
export const setUserProfile = (profile) => { return { type: SET_USER_PROILE, profile } }
export const setUserStatus = (status) => { return { type: SET_STATUS, status } }
export const deletePost = (postId) => { return { type: DELETE_POST, postId } }
export const saveUserPhoto = (file) => { return { type: SAVE_USER_PHOTO }, file }

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await setUserProfileAPI(userId)
    dispatch(setUserProfile(response))
}


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await getStatusAPI(userId)
    dispatch(setUserStatus(response.data))
}



export const updateUserStatus = (status) => async (dispatch) => {
    let response = await updateStatusAPI(status)
    dispatch(setUserStatus(status))
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await savePhotoAPI(file)
    dispatch(saveUserPhoto(response.data.data.photos))
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await saveProfileAPI(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer