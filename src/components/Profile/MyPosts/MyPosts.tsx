import Post from './Post/Post';
import s from './MyPosts.module.css'



let posts = [
  {id: 1, message: 'Hi! HRU?', likescount: 5 },
  {id: 2, message: 'Hello I\'m fine!', likescount: 12},
  ]


//lesson 25.map
let postElements = posts.map( post => <Post message={post.message} likecount={post.likescount} />)


const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts </h3>
      <div>
        <textarea></textarea>
        <div>
          <button>send message</button>
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