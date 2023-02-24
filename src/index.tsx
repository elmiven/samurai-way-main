import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let posts = [
  {id: 1, message: 'Hi! HRU?', likescount: 5 },
  {id: 2, message: 'Hello I\'m fine!', likescount: 12},
  ]


  let dialogs = [
    { id: 1, name: 'Mitka' },
    { id: 2, name: 'Mikha' },
    { id: 3, name: 'Petka' },
    { id: 4, name: 'Petka' },
    { id: 5, name: 'Lenka' },
]


let messages = [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'Ho' },
    { id: 3, message: 'Les Go!' },
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);


