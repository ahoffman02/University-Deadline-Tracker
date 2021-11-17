import React from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import {Divider, IconButton, ListItemIcon, Menu, MenuItem, MenuList, Paper, Stack} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {AccountCircle, Logout, Settings} from "@mui/icons-material";
import Logo from '../Resources/timetable.png'
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

export const Header = () => {
    let history = useHistory();
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
                    <img src={Logo} alt="logo" height="40px" width="40px"/>
                </div>
                <div className="title">
                    <Link to="/home">University Deadline Tracker</Link>
                </div>
            </Stack>
            <div className="link">
                <Link to="/home">Boards</Link>
            </div>
            <div className="link">
                <Link to="/backlog">Backlog</Link>
            </div>
            <div className="link">
                <Link to="/community">Community</Link>
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
                <ArrowDropDownIcon htmlColor="white"/>
            </div>
        </Stack>
        <Menu anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className="dropdown"
              anchorOrigin={{vertical: 'center', horizontal: 'right'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}>
            <MenuItem className="dropdown-logged-user">
                <p>Logged in as</p>
                <p className="name">PacoPakkun</p>
            </MenuItem>
            <Divider light="true"/>
            <MenuItem className="dropdown-item"
                      onClick={() => {
                          handleClose();
                          history.push('/home');
                      }}>
                <ListItemIcon>
                    <AccountCircle fontSize="small" htmlColor="#9D9D9D" className="icon"/>
                </ListItemIcon>
                <Link to="/home">Profile</Link>
            </MenuItem>
            <MenuItem className="dropdown-item"
                      onClick={() => {
                          handleClose();
                          history.push('/home');
                      }}>
                <ListItemIcon>
                    <Settings fontSize="small" htmlColor="#9D9D9D" className="icon"/>
                </ListItemIcon>
                <Link to="/home">Settings</Link>
            </MenuItem>
            <MenuItem className="logout"
                      onClick={() => {
                          handleClose();
                          history.push('/');
                      }}>
                <ListItemIcon>
                    <Logout fontSize="small" htmlColor="#9D9D9D" className="logout-icon"/>
                </ListItemIcon>
                <Link to="/">Logout</Link>
            </MenuItem>
        </Menu>
    </header>);
}