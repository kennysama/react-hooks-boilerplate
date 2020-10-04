import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

import "./index.css";

import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./app/store/store";
import LogIn from "./app/containers/login/login";
import { firebaseConfig } from "./app/firebase";

const store = configureStore({});
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
