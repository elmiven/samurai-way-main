import { PostPropsType } from '../../App';
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}

        // posts={props.state.posts} 
        // newPostText={props.state.newPostText}
        // dispatch={props.dispatch}
        
        // updateNewPostText={props.updateNewPostText} 
      />
    </div>
  )
}

export default Profile;