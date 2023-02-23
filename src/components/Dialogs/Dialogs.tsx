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
        <div className={s.message}>{props.message}</div>
    )
}


let dialogs = [
    { id: 1, name: 'Mitka' },
    { id: 2, name: 'Mikha' },
    { id: 3, name: 'Petka' },
    { id: 4, name: 'Petka' },
    { id: 5, name: 'Lenka' },
]


let messages = [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'Ho' },
    { id: 3, message: 'Les Go!' },
]


//lesson 25.map
let dialogElements = dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
//lesson 25.map
let messageElements = messages
    .map(messageEl => <MessageItem message={messageEl.message} />);


const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

                {/* <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Mitka</NavLink>
                </div>
                <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[1].id} />
                <DialogItem name="Mikha " id='2' />
                <DialogItem name="Petka " id='3' />
                <DialogItem name="Petka " id='4' />
                <DialogItem name="Lenka " id='5' /> */}
            </div>

            <div className={s.messages}>
                {messageElements}
                {/* <MessageItem message={messages[0].message} />
                <MessageItem message={messages[1].message} />
                <MessageItem message="Ho" />
                <MessageItem message="Lets go!" /> */}
            </div>
        </div>


    )

}


export default Dialogs;