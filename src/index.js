import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgi9TVBTcI0JT9My7iZmSZ8JSHRbVqrrA",
  authDomain: "proyecto-final---reactjs.firebaseapp.com",
  projectId: "proyecto-final---reactjs",
  storageBucket: "proyecto-final---reactjs.appspot.com",
  messagingSenderId: "553391570194",
  appId: "1:553391570194:web:0885df413d4e50d38f87cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
