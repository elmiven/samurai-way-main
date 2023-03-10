import { PostPropsType } from '../../App';
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
        posts={props.state.posts} 
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText} 
      />
    </div>
  )
}

export default Profile;