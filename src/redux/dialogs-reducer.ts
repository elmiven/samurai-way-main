
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'


const dialogsReducer = (state: any, action: any) => {
    
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
        return state;
        // this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
        // this._callSubscriber(this._state);
    }

    return state

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body: any) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default dialogsReducer