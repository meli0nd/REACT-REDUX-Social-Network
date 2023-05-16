import messageReducer from "./message-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 12 },
                { id: 2, post: 'It\'s my first post', likesCount: 5 },
                { id: 3, post: 'It\'s post', likesCount: 10 },
                { id: 4, post: 'It\'s', likesCount: 222 },
            ],
            newPostText: ''
        },

        messagesPage: {

            dialogs: [
                { id: 1, name: 'Veronika' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Jackson' },
                { id: 4, name: 'Eminem' },
                { id: 5, name: 'Unknown User' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'HYD?' },
                { id: 4, message: 'Fine, you?' },
                { id: 5, message: 'Im okay' },
            ],
            newMessageBody: ''
        },
        friendsPage: {
            friends: [
                { id: 1, name: 'Veronika' },
                { id: 2, name: 'Ktoto' },
                { id: 3, name: 'Eminem' },
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },



    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store