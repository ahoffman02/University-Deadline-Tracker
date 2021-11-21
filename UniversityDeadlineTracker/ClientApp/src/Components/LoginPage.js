import React, {useState} from 'react';
import "./LoginPage.css"
import {Button, FormControl, Input, InputAdornment, InputLabel, Stack} from "@mui/material";
import {useHistory} from "react-router-dom";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import {Default} from "./Default";
import {Pages} from "../Utils/Enums";

export const LoginPage = (props) => {
        let history = useHistory();
        const [username, setUsername] = useState('')
        const [showPassword, setShowPassword] = useState(false)

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
                        <div className="login">
                            <form className="form">
                                <FormControl variant="standard" className="input">
                                    <InputLabel>Username</InputLabel>
                                    <Input
                                        type='text'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <AccountCircle/>
                                            </InputAdornment>
                                        }
                                        onChange={(event) => {
                                            setUsername(event.target.value)
                                        }}
                                    />
                                </FormControl>
                                <FormControl variant="standard" className="input">
                                    <InputLabel>Password</InputLabel>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end" style={{cursor: "pointer"}}>
                                                {showPassword ? <VisibilityOff
                                                        onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}/> :
                                                    <Visibility
                                                        onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}/>}
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Stack direction="row">
                                    <Button type="button" color="inherit" className="button" onClick={() => {
                                        props.setUser({username: username})
                                    }}>
                                        Login
                                    </Button>
                                    <Button type="button" color="inherit" className="button">
                                        Sign up
                                    </Button>
                                </Stack>
                            </form>
                        </div>
                    </React.Fragment>
            }
            </React.Fragment>
        );
    }
;
export default LoginPage;