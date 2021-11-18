import React from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import {Divider, ListItemIcon, Menu, MenuItem, Stack} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {AccountCircle, Logout, Settings, Login} from "@mui/icons-material";
import Logo from '../Resources/timetable.png'
import {useHistory, useLocation} from "react-router-dom";
import {Pages} from "../Utils/Enums";

export const Header = (props) => {
    let history = useHistory();
    const location = useLocation();
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
                <div className="title" onClick={() => {
                    history.push(Pages.HOME);
                }}>
                    University Deadline Tracker
                </div>
            </Stack>
            <div className={location.pathname === Pages.BOARD ? "selected" : "link"} onClick={() => {
                history.push(Pages.BOARD);
            }}>
                Boards
            </div>
            <div className={location.pathname === Pages.BACKLOG ? "selected" : "link"} onClick={() => {
                history.push(Pages.BACKLOG);
            }}>
                Backlog
            </div>
            <div className={location.pathname === Pages.COMMUNITY ? "selected" : "link"} onClick={() => {
                history.push(Pages.COMMUNITY);
            }}>
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
                <ArrowDropDownIcon htmlColor="white"/>
            </div>
        </Stack>
        <Menu anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className="dropdown"
              anchorOrigin={{vertical: 'center', horizontal: 'right'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}>
            {props.user ?
                <React.Fragment>
                    <MenuItem className="dropdown-logged-user">
                        <p>Logged in as</p>
                        <p className="name">{props.user.username}</p>
                    </MenuItem>
                    <Divider light="true"/>
                    <MenuItem className="dropdown-item"
                              onClick={() => {
                                  handleClose();
                                  history.push(Pages.BOARD);
                              }}>
                        <ListItemIcon>
                            <AccountCircle fontSize="small" htmlColor="#9D9D9D" className="icon"/>
                        </ListItemIcon>
                        Profile
                    </MenuItem>
                    <MenuItem className="dropdown-item"
                              onClick={() => {
                                  handleClose();
                                  history.push(Pages.BOARD);
                              }}>
                        <ListItemIcon>
                            <Settings fontSize="small" htmlColor="#9D9D9D" className="icon"/>
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem className="logout"
                              onClick={() => {
                                  props.setUser(null);
                                  handleClose();
                                  history.push(Pages.HOME);
                              }}>
                        <ListItemIcon>
                            <Logout fontSize="small" htmlColor="#9D9D9D" className="logout-icon"/>
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </React.Fragment>
                :
                <MenuItem className="dropdown-item"
                          onClick={() => {
                              handleClose();
                              history.push(Pages.HOME);
                          }}
                          sx={{width: '120px'}}>
                    <ListItemIcon>
                        <Login fontSize="small" htmlColor="#9D9D9D" className="icon"/>
                    </ListItemIcon>
                    Login
                </MenuItem>}
        </Menu>
    </header>);
}