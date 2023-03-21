import { DialogsPropsType, DialogsType, MessagesPropsType } from '../../App';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


// const Dialogs = (props: DialogsPropsType & MessagesPropsType) => {

const Dialogs = (props: any) => {

    let state = props.store.getState().dialogsPage;


    // let dialogs = [
    //     { id: 1, name: 'Mitka' },
    //     { id: 2, name: 'Mikha' },
    //     { id: 3, name: 'Petka' },
    //     { id: 4, name: 'Petka' },
    //     { id: 5, name: 'Lenka' },
    // ]


    // let messages = [
    //     { id: 1, message: 'Hey' },
    //     { id: 2, message: 'Ho' },
    //     { id: 3, message: 'Les Go!' },
    // ]


    //lesson 25.map
    let dialogElements = state.dialogs
        .map((dialog: { name: any; id: any; }) => <DialogItem name={dialog.name} id={dialog.id} />);
    //lesson 25.map
    let messageElements = state.messages
        .map((messageEl: { message: any; }) => <Message classNmae="message" message={messageEl.message} />);

    let newMessageBody = state.newMessageBody;


    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

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

                <textarea
                    placeholder='enter your screwing message'
                    value={newMessageBody}
                    onChange={onNewMessageChange}

                > </textarea> 
                <button
                onClick={onSendMessageClick}
                
                >send</button>

            </div>
        </div>


    )

}


export default Dialogs;
