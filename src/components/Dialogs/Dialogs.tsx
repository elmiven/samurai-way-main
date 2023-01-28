import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}


const MessageItem = (props: any) => {
    return (
        <div className={s.message}>{ props.message}</div>
    )
}


const Dialogs = (props: any) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Mitka</NavLink>
                </div> */}
                <DialogItem name="Mitka " id='1' />
                <DialogItem name="Mikha " id='2' />
                <DialogItem name="Petka " id='3' />
                <DialogItem name="Svetka " id='4' />
                <DialogItem name="Lenka " id='5' />
            </div>

            <div className={s.messages}>
                <MessageItem message="Hey"/>
                <MessageItem message="Ho"/>
                <MessageItem message="Lets go!"/>
            </div>
        </div>


    )

}


export default Dialogs;