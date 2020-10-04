import Avatar from "@material-ui/core/Avatar/Avatar";
import Badge from "@material-ui/core/Badge/Badge";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import React from "react";
import { IUser } from "../../../../types/user";

type TProps = {
  user: IUser;
};

export const UserMenu = ({ user }: TProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={1} color="secondary">
          <Avatar alt={user.displayName} src={user.photoURL} />
        </Badge>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
