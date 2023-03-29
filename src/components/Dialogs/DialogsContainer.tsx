import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer"
import StoreContext from "../../StoreContext"
import Dialogs from "./Dialogs"

const DialogsContainer = () => {

    // let state = props.store.getState().dialogsPage


    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // let onNewMessageChange = (body: any) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }


    return <StoreContext.Consumer>
        {
            (store: any) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body: any) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }




                return <Dialogs 
                updateNewMessageBody={onNewMessageChange} 
                sendMessage={onSendMessageClick} 
                dialogsPage={state} 
                />


            }
        }
    </StoreContext.Consumer>
}



export default DialogsContainer