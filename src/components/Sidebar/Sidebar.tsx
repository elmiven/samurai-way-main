import { Link, NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'


const Sidebar = (props: any) => {
    return (
        <div className={s.sbar}>
               {props.state.friends.map ( (t: any) => {
                    return (
                    <span> [{t.name}]</span>
                    )



               }  ) 
               
               }

            {console.log(props.state.friends[1])}



        </div>



        //     <nav className={s.nav}>
        //     <div className={s.item}>
        //       <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        //     </div>
        //     <div className={`${s.item} ${s.activeLink}`}>
        //       <NavLink to='/dialogs'>Messages</NavLink>
        //     </div>
        //     <div className={s.item}>
        //       <NavLink to='/news'  activeClassName={s.activeLink}>News</NavLink>
        //     </div>
        //     <div className={s.item}>
        //       <a href='/music'>Music</a>
        //     </div>
        //     <div className={s.item}>
        //       <a href='/settings'>Settings</a>
        //     </div>
        //   </nav>
    )
}

export default Sidebar;