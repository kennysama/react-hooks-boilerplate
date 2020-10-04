import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import styles from "./header.module.scss";
import LogIn from "../login/login";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={styles.navBar}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.title}>
          Inference
        </Typography>

        <LogIn></LogIn>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
