import React from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import {IconButton, ListItemIcon, Menu, MenuItem, Stack} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {AccountCircle, Logout, Settings} from "@mui/icons-material";
import Logo from '../Resources/timetable.png'

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<header>
        <Stack className="navmenu" direction="row" spacing="50px">
            <Stack direction="row">
                <div className="logo">
                    <img src={Logo} alt="logo" height="50px" width="50px"/>
                </div>
                <div className="title">
                    University Deadline Tracker
                </div>
            </Stack>
            <div className="link">
                Boards
            </div>
            <div className="link">
                Community
            </div>
        </Stack>
        <Stack direction="row" className="right"
               onClick={handleClick}>
            <div className="avatar">
                <Avatar alt="User"
                        src="https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png"
                        sx={{width: 30, height: 30}}/>
            </div>
            <div className="dropdown-icon">
                <IconButton color="inherit" aria-label="upload picture" component="span">
                    <ArrowDropDownIcon/>
                </IconButton>
            </div>
        </Stack>
        <Menu dense anchorEl={anchorEl}
              open={open}
              onClose={handleClose}>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <AccountCircle fontSize="small"/>
                </ListItemIcon>
                Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small"/>
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    </header>);
}