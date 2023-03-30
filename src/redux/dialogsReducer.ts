
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Mitka' },
        { id: 2, name: 'Mikha' },
        { id: 3, name: 'Petka' },
        { id: 4, name: 'Petka' },
        { id: 5, name: 'Lenka' },
    ],
    messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Ho' },
        { id: 3, message: 'Les Go!' },
    ],
    newMessageBody: ""

}

const dialogsReducer = (state: any = initialState, action: any) => {
    
    switch (action.type) {
    // if (action.type === SEND_MESSAGE) {
        case SEND_MESSAGE:
        let newPost = {
            id: 6,
            message: state.newMessageBody,
        }; if (state.newMessageBody.trim()) {
            state.messages.push(newPost);
        }
        state.newMessageBody = '';
        return {...state, 
            newMessageBody: '',
        newPost} 
        
        
        // this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        case UPDATE_NEW_MESSAGE_BODY:
            
        // state.newMessageBody = action.body;
        return {...state, newMessageBody: action.body};
        // this._callSubscriber(this._state);
    }

    return state

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body: any) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default dialogsReducer