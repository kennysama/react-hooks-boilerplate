import Button from "@material-ui/core/Button/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../../components/organism/dropzone/user-menu/user-menu";
import { AppState } from "../../store/store";

import { logIn } from "../../store/user/thunk";

function LogIn() {
  const dispatch = useDispatch();

  const onSignIn = () => {
    dispatch(logIn());
  };

  const { user } = useSelector<AppState, AppState["user"]>(
    (state) => state.user
  );

  return (
    <>
      {user.user.token === "" ? (
        <Button color="inherit" onClick={onSignIn}>
          Sign In
        </Button>
      ) : (
        <UserMenu user={user.user}></UserMenu>
      )}
    </>
  );
}

export default LogIn;
