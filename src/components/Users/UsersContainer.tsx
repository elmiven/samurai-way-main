import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Dialogs from "../Dialogs/Dialogs";
import Users from "./Users";

let mapStateToPros = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: any) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: any) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        
        }
    }
}

const UsersContainer = connect(mapStateToPros, mapDispatchToProps)(Users)
export default UsersContainer