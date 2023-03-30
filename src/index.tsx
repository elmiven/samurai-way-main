// import store from './redux/Store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
// import StoreContext, { Provider } from './StoreContext';





let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <Provider store={store}>
      {/* older APP */}
    {/* // <App appState={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>, */}
    {/* //comment because of StoreContext */}
    {/* // <App appState={state} dispatch={store.dispatch.bind(store)} store={store}/>, */}
    <App />
    </Provider>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

//  store.subscribe(()=>{rerenderEntireTree(store.getState())});


store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
})