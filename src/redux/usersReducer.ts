const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        // { id: 1, photoUrl:'https://thumbs.dreamstime.com/b/businessman-programmer-avatar-profile-userpic-white-background-vector-illustration-66140549.jpg', 
        // followed: false, fullName: 'Mitka', status: "I'm a bozzz", location:{city: 'Minsk', country: 'Belarus'}},
        // { id: 2, photoUrl:'https://thumbs.dreamstime.com/b/businessman-programmer-avatar-profile-userpic-white-background-vector-illustration-66140549.jpg', 
        // followed: true, fullName: 'Vitka', status: "I'm a boszsz", location:{city: 'Kiev', country: 'Ukraine'}},
        // { id: 3, photoUrl:'https://thumbs.dreamstime.com/b/businessman-programmer-avatar-profile-userpic-white-background-vector-illustration-66140549.jpg', 
        // followed: true, fullName: 'Andrew', status: "I'm a boooo", location:{city: 'Lviv', country: 'Ukraine'}},
    ]
    };

const usersReducer =  (state: any = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users:[...state.users, ...action.users]}
        }

        default:
            return state;
    }


}

export const followAC = (userID: any) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID: any) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users: any) => ({type: SET_USERS, users})


export default usersReducer


// replaces after moved from dispatch
// state -> state