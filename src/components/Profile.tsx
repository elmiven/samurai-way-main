import s from './Profile.module.css'

const Profile = () => {
  return (
<div className={s.content}>
        <img src='https://www.researchgate.net/publication/330316450/figure/fig1/AS:713867541893125@1547210693443/The-Afterimage-Test-The-figure-illustrates-the-nature-of-an-afterimage-with-a-person.jpg' />
        <div>ava + decription
          <img src='https://www.pickuplimes.com/static/images/logo/pul_logo_small_flat_250_279.d0527deb1499.png ' />

        </div>

        <div className={s.posts}>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
        </div>



      </div>
  )
}

export default Profile;