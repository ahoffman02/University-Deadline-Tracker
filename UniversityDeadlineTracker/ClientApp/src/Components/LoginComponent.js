import React, {useState} from "react";
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
import {login} from "../Utils/Services";

export const LoginComponent = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [shouldSignUp, setShouldSignUp] = useState(false)

    const onLogin = () => {
        login(username, password).then(response => {
            if (response.status === 200) {
                props.setUser({username: username})
                response.text().then(token => {
                    props.setToken(token.substring(1, token.length - 1))
                })
            } else
                setError(true)
        })
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
                        onChange={(event) => {
                            setPassword(event.target.value)
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
                        }}
                        className='dialog'>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setShouldSignUp(false)
                        }}>
                            Cancel
                        </Button>
                        <Button onClick={() => {
                        }}>
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    )
}