import { connect } from "react-redux"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer"
import StoreContext from "../../StoreContext"
import Dialogs from "./Dialogs"

// const DialogsContainer = () => {
    //Code before Context
    // let state = props.store.getState().dialogsPage


    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // let onNewMessageChange = (body: any) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }


//Code w HandMadeContet createContext
//     return <StoreContext.Consumer>
//         {
//             (store: any) => {
//                 let state = store.getState().dialogsPage;

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (body: any) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }

//                 return <Dialogs
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={state}
//                 />

//             }
//         }
//     </StoreContext.Consumer>
// }



let mapStateToPros = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToPros, mapDispatchToProps)(Dialogs)

export default DialogsContainer