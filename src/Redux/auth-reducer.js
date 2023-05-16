import { stopSubmit } from "redux-form"
import { authAPI, getCaptchaUrl, loginAPI, logoutAPI } from "../API/API"

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case TOGGLE_IS_FETCHING: {
            return { ...state, AuthisFetching: action.AuthisFetching }
        } case GET_CAPTCHA_URL: {
            return { ...state, captcha: action.captcha }
        }

        default: return state
    }

}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, payload: { userId, email, login, isAuth }
    }
}
export const toggleIsFetchingAuth = (AuthisFetching) => ({ type: TOGGLE_IS_FETCHING, AuthisFetching })
export const getCaptchaSuccess = (captcha) => ({ type: GET_CAPTCHA_URL, captcha })

export const setAuthProfile = () => async (dispatch) => {
    let response = await authAPI()

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleIsFetchingAuth(false))
    }

}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await loginAPI(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptcha())
    } else {
        let message = response.data.messages
        dispatch(stopSubmit('login', { _error: message }))
    }

}

export const getCaptcha = () => async (dispatch) => {
    let response = await getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaSuccess(captchaUrl))
}


export const logout = () => async (dispatch) => {
    let response = await logoutAPI()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
    reloadPage()
}

function reloadPage() {
    setTimeout(() => {
        window.location.reload()
    }, 300);
}

export default authReducer