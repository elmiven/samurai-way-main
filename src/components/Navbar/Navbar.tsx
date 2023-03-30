import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import s from './Navbar.module.css'


const Navbar = (props: any) => {
  return (
    <div className={s.navbar}>
      <nav className={s.navllinks}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.activeLink}`}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
          <a href='/music'>Music</a>
        </div>
        <div className={s.item}>
          <a href='/settings'>Settings</a>
        </div>
        <div className={s.item}>
          <a href='/users'>Users</a>
        </div>

      </nav>
      {/* <Sidebar state={props.state}/> */}

    </div>
  )
}

export default Navbar;