const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.messageBody
            return {
                ...state,
                messages: [...state.messages, { id: 0, message: body }],
            }

        default:
            return state;
    }

}
export const addNewMessageActionCreator = (messageBody) => {
    return {
        type: SEND_MESSAGE,
        messageBody,
    }
}

export default messageReducer