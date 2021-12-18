import React, {useRef, useState} from "react";
import {
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    Stack, TextField
} from "@mui/material";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import './LoginComponent.css'
import {addUser, login} from "../Utils/Services";

export const LoginComponent = (props) => {
    const [error, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [shouldSignUp, setShouldSignUp] = useState(false)
    const [user, setUser] = useState({})
    const inputFile = useRef(null)

    const onLogin = () => {
        login(user.username, user.password).then(data => {
            if (data) {
                props.setUser(data.user)
                props.setToken(data.token)
            } else
                setError(true)
        })
    }

    const onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];
        setUser({...user, profilePictureUrl: file.name});
    }

    return (
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
                            setUser({...user, username: event.target.value})
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
                        onChange={(event) => {
                            setUser({...user, password: event.target.value})
                        }}
                    />
                </FormControl>

                {error && <span>Invalid username or password. Please try again!</span>}

                <Stack direction="row">
                    <Button type="button" color="inherit" className="button" onClick={onLogin}>
                        Login
                    </Button>
                    <Button type="button" color="inherit" className="button" onClick={() => {
                        setShouldSignUp(true)
                    }}>
                        Sign up
                    </Button>
                </Stack>

                <Dialog open={shouldSignUp}
                        onClose={() => {
                            setShouldSignUp(false)
                        }}>
                    <DialogTitle>Create Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill in your personal information.
                        </DialogContentText>
                        <Stack direction="row" spacing={10}>
                            <TextField
                                autofocus
                                label="Username"
                                type="text"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, username: event.target.value})
                                }}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, password: event.target.value})
                                }}
                            />
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <TextField
                                label="First Name"
                                type="text"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, firstName: event.target.value})
                                }}
                            />
                            <TextField
                                label="Last Name"
                                type="text"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, lastName: event.target.value})
                                }}
                            />
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <TextField
                                label="Email Address"
                                type="email"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, email: event.target.value})
                                }}
                            />
                            <TextField
                                error={Object.is(user.group, NaN)}
                                label="Group"
                                type="text"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, group: Number.parseInt(event.target.value)})
                                }}
                            />
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <TextField
                                error={Object.is(user.year, NaN)}
                                label="Year"
                                type="text"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, year: Number.parseInt(event.target.value)})
                                }}
                            />
                            <TextField
                                error={Object.is(user.code, NaN)}
                                label="Code"
                                type="text"
                                variant="standard"
                                className="textfield"
                                onChange={(event) => {
                                    setUser({...user, code: Number.parseInt(event.target.value)})
                                }}
                            />
                        </Stack>
                        <Stack direction="row" spacing={10}>
                            <TextField
                                label="Profile Picture"
                                type="text"
                                value={user.profilePictureUrl}
                                variant="standard"
                                className="textfield"
                                onClick={() => inputFile.current.click()}
                            />
                            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}
                                   onChange={onChangeFile.bind(this)}/>
                            <TextField
                                label="Birthday"
                                type="date"
                                variant="standard"
                                className="textfield"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => {
                                    setUser({...user, dateOfBirth: event.target.value})
                                }}
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setShouldSignUp(false)
                        }}>
                            Cancel
                        </Button>
                        <Button onClick={() => {
                            addUser(props.token, {...user, role: 1, subjects: []}).then(response => {
                                if (response.status === 200)
                                    onLogin();
                            })
                        }}>
                            Sign Up
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    )
}