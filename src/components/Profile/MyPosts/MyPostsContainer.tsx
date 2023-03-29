import { updateNewMessageBodyCreator } from "../../../redux/dialogsReducer";
import { addPostActionCreator, updateNewPostActionCreator, UPDATE_NEW_POST_TEXT } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
    // let state = props.store.getState();


    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }

    // let onPostChange = (text: any) => {
  
    //     let action = updateNewPostActionCreator(text)
    //     props.store.dispatch(action)
    // }
    return (
        <StoreContext.Consumer> 
            { (store: any) => {
                let state = store.getState();


                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
            
                let onPostChange = (text: any) => {
              
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer