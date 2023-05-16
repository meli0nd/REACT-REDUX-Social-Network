import { setAuthUserData } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                initialized: true,
            }
        default: return state
    }

}


export const InitializedSuccess = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(InitializedSuccess())
        })
}

export default appReducer