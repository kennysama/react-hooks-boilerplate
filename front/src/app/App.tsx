import React from "react";
import { useSelector } from "react-redux";
import LogIn from "./containers/login/login";
import Template from "./containers/template/template";
import { AppState } from "./store/store";

function App() {
  const { user } = useSelector<AppState, AppState["user"]>(
    (state) => state.user
  );

  return <>{user.user.token !== "" ? <Template /> : <LogIn />}</>;
}

export default App;
