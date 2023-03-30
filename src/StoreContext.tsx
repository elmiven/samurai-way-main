import React from "react"
import store from "./redux/reduxStore"

// interface IContextProps {
//     state: StateType;
//     dispatch: ({type}:{type:string}) => void;
//     getState: () => StateType
// }


const StoreContext = React.createContext(store);

export const Provider = (props: any) => {
    // return <StoreContext.Provider value={props.store}>
    //     {props.children}
    // </StoreContext.Provider>
}


export default StoreContext