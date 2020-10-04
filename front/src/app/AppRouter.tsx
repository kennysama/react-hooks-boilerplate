import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import Inference from "./containers/inference/Inference";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Inference} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default AppRouter;
