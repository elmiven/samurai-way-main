// import store from './redux/Store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';





let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
      // <App appState={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
      <App appState={state} dispatch={store.dispatch.bind(store)} store={store}/>,
      document.getElementById('root')
  );
  }

 rerenderEntireTree(store.getState())

//  store.subscribe(()=>{rerenderEntireTree(store.getState())});


store.subscribe(()=>{let state = store.getState();
rerenderEntireTree(state)})