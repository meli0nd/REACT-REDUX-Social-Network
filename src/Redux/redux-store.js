import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import messagesReducer from './message-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk';
import { reducer as FormReducer } from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: FormReducer,
    app: appReducer,

})

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware))

window.store = store

export default store;   