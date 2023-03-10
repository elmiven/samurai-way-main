import Post from './Post/Post';
import s from './MyPosts.module.css'
import { PostPropsType } from '../../../App';
import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';



// let posts = [
//   {id: 1, message: 'Hi! HRU?', likescount: 5 },
//   {id: 2, message: 'Hello I\'m fine!', likescount: 12},
//   ]




const MyPosts = (props: PostPropsType) => {

//lesson 25.map
let postElements = props.posts.map( post => <Post message={post.message} likecount={post.likescount} />)

const newPostElement = React.createRef<any>();

const sendMessageHandler = ()=>{
  // let text = newPostElement.current.value; 
  props.addPost();
  // newPostElement.current.value = '';

} 

const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => 
{ props.updateNewPostText(e.currentTarget.value) } 

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={textareaOnChangeHandler} > </textarea>
        <div>
          <button onClick={ sendMessageHandler }>send message</button>
        </div>
      </div>



      <div className={s.posts}>
        {postElements}
        {/* <Post message={posts[0].message} likecount={posts[0].likescount} />
        <Post message="Hello! I'm fine!" likecount='15' /> */}
      </div>


    </div>

  )
}

export default MyPosts;