import s from './Post.module.css'

const Post = (props: any) => {

  return (

    <div className={s.item}>
      <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/16:9/w_1280,c_limit/t-ava-max-interview.jpg' />
      {props.message}
      <div>
        <span>likes: </span>
        {props.likecount}
      </div>


    </div>



  )
}

export default Post;