import { connect } from "react-redux";
import { updateNewMessageBodyCreator } from "../../../redux/dialogsReducer";
import { addPostActionCreator, updateNewPostActionCreator, UPDATE_NEW_POST_TEXT } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import Dialogs from "../../Dialogs/Dialogs";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//Before context
// let state = props.store.getState();


// let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
// }

// let onPostChange = (text: any) => {

//     let action = updateNewPostActionCreator(text)
//     props.store.dispatch(action)
// }


//Code Afer HandMade Context
//     return (
//         <StoreContext.Consumer> 
//             { (store: any) => {
//                 let state = store.getState();


//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }

//                 let onPostChange = (text: any) => {

//                     let action = updateNewPostActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )

// }


let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePostChange: (text: any) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer