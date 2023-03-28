import { updateNewMessageBodyCreator } from "../../../redux/dialogsReducer";
import { addPostActionCreator, updateNewPostActionCreator, UPDATE_NEW_POST_TEXT } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: any) => {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: any) => {
        // let action = updateNewMessageBodyCreator(text);
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }
        return <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} 
            />




    
}

export default MyPostsContainer