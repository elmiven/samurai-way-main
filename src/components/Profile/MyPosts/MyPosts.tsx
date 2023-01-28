import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>

      <div>
        <textarea></textarea>

      </div>

      <div className={s.posts}>
        <Post message="Hi! HRU?" likecount='5' />
        <Post message="Hello! I'm fine!" likecount='15'/>
      </div>


    </div>

  )
}

export default MyPosts;