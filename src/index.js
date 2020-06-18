import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAt_fKhtdMPUHpyGaScr68dCimQoyWThKc",
  authDomain: "cart-f5453.firebaseapp.com",
  databaseURL: "https://cart-f5453.firebaseio.com",
  projectId: "cart-f5453",
  storageBucket: "cart-f5453.appspot.com",
  messagingSenderId: "828096482735",
  appId: "1:828096482735:web:6305b9a36e17067baa735a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


