import {combineReducers, createStore} from "redux";
//import { configureStore } from '@reduxjs/toolkit'
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
profilePage: profileReducer,
dialogsPage: dialogsReducer,
// sidebar: sidebarReducer
});


let store = createStore(reducers)


export default store