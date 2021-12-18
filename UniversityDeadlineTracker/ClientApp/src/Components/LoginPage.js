import React, {useState} from 'react';
import "./LoginPage.css"
import {Button, FormControl, Input, InputAdornment, InputLabel, Stack} from "@mui/material";
import {useHistory} from "react-router-dom";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import {Default} from "./Default";
import {Pages} from "../Utils/Enums";
import {LoginComponent} from "./LoginComponent";

export const LoginPage = (props) => {
    let history = useHistory();

    return (
        <React.Fragment>{
            props.user ?
                <div className="welcome">
                    <p className="hello">Hello <span>{props.user.username}</span>!</p>
                    <p>Welcome back to your University Deadline Tracker!</p>
                    <div className="button" onClick={() => history.push(Pages.BOARD)}>Check your Boards!</div>
                </div>
                :
                <React.Fragment>
                    <Default main/>
                    <LoginComponent setUser={props.setUser} token={props.token} setToken={props.setToken}/>
                </React.Fragment>
        }
        </React.Fragment>
    );
};
export default LoginPage;