import React from "react";
import { useDispatch } from "react-redux";

import { logIn } from "../../store/user/thunk";

function LogIn() {
  const dispatch = useDispatch();

  const onSignIn = () => {
    dispatch(logIn());
  };
  return (
    <>
      <p>Sign In Component</p>

      <button onClick={onSignIn}>Sign In</button>
    </>
  );
}

export default LogIn;
