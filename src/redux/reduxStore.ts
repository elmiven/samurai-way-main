import {combineReducers, createStore} from "redux";
//import { configureStore } from '@reduxjs/toolkit'
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
profilePage: profileReducer,
dialogsPage: dialogsReducer,
sidebar: sidebarReducer,
usersPage: usersReducer
});


let store = createStore(reducers)


export default store