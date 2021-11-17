import React, {useState} from 'react';
import "./LoginPage.css"
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="login">
            <form className="form">
                <FormControl variant="standard">
                    <InputLabel>Username</InputLabel>
                    <Input
                        type='text'
                        endAdornment={
                            <InputAdornment position="end">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard">
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
                <Button type="button" color="inherit" className="button">
                    <Link to="/home">Login</Link>
                </Button>
            </form>
        </div>
    );
}
export default LoginPage;