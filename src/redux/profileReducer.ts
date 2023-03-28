export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'



let initialState = {
    posts: [
        { id: 1, message: 'Hi! HRU?', likescount: 5 },
        { id: 2, message: 'Hello I\'m fine!', likescount: 12 },
    ],
    newPostText: 'test-text'
};

const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        // if (action.type === ADD_POST) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        // this._callSubscriber(this._state); //rerender not our resoponsibility
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        // this._callSubscriber(this._state); //rerender not our resoponsibility
        default:
            return state;
    }

    return state

}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text: any) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer

// replaces after moved from dispatch
// state -> state