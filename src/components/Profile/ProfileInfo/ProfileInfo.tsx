
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfoBlock}>
            <img src='https://www.researchgate.net/publication/330316450/figure/fig1/AS:713867541893125@1547210693443/The-Afterimage-Test-The-figure-illustrates-the-nature-of-an-afterimage-with-a-person.jpg' />
            <div>
                <img src='https://www.pickuplimes.com/static/images/logo/pul_logo_small_flat_250_279.d0527deb1499.png' /> ava + decription
            </div>
        </div>
    )
}

export default ProfileInfo;