import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp({
  apiKey: "AIzaSyAGLjoOrYCBgZpWo-WsqJ9R5ClR44LvRdg",
  authDomain: "instagram-508cc.firebaseapp.com",
  databaseURL: "https://instagram-508cc.firebaseio.com",
  projectId: "instagram-508cc",
  storageBucket: "instagram-508cc.appspot.com",
  messagingSenderId: "4509960271"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
