import firebase from "firebase/app";

// import * from"firebase/auth"

import { Dispatch } from "redux";
import { setLoggedInUser } from "../../services/auth";
import { IUser } from "../../types/user";
import { signIn } from "./actions";

export const logIn = () => async (dispatch: Dispatch, getState: () => any) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result: any) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var responseUser = result.user;

      const user: IUser = {
        email: responseUser.email,
        token: token,
        displayName: responseUser.displayName,
        photoURL: responseUser.photoURL,
      };
      //set cookies
      setLoggedInUser(user);
      //fill state
      dispatch(signIn(user));
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      alert(errorMessage);

      // ...
    });
};
