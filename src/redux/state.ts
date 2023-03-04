let rerenderEntireTree = (a: any) => {
    console.log("state is changed!")
    }


let state = {
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
        ]
    },
    sidebar: {
        friends:
            [{ id: 1, name: "Frendy Friend" },
            { id: 2, name: "Hrendy Hren" },
            { id: 3, name: "Andy Mand" },
            ],
    }

}



export const addPost = () => { 
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likescount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newText: string) => { 
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export const subscribe = (observer: any) => {
 rerenderEntireTree = observer;
}


export default state 