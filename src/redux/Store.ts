// export type ProfilePageType ={
//     messageForNewPost: string
//     post: Array<PostType>
// }


// export type RootStateType ={
//     profilePage: ProfilePageType
//     dialogsPage: DialogPageType
//     sidebar: SidebarType
// }


// export type StoreType = {
//     _state: RootStateType 
//     changeNewText: (newText: string) => void
//     addPost: (postText: string) => void
//     _onChange: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: any) => void
// }   




const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'


let rerenderEntireTree = (a: any) => {
    console.log("state is changed!")
}



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi! HRU?', likescount: 5 },
                { id: 2, message: 'Hello I\'m fine!', likescount: 12 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends:
                [{ id: 1, name: "Frendy Friend" },
                { id: 2, name: "Hrendy Hren" },
                { id: 3, name: "Andy Mand" },
                ]
            
        }

    },
    getState() {
        return this._state
    },
    _callSubscriber(a: any) {
        console.log("State changed!")
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likescount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer: any) {
        this._callSubscriber = observer
    }, dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likescount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newPost = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody,
                likescount: 0
            }; if (this._state.dialogsPage.newMessageBody.trim()) {
            this._state.dialogsPage.messages.push(newPost);}
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}




export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text: any) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body: any) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })




export default store


// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likescount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }


// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }


// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer;
// }


