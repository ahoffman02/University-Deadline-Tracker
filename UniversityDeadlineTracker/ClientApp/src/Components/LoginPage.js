import React, {useState} from 'react';
import "./LoginPage.css"
import {Button, CircularProgress, FormControl, Input, InputAdornment, InputLabel, Stack} from "@mui/material";
import {useHistory} from "react-router-dom";
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import {Default} from "./Default";
import {Pages} from "../Utils/Enums";
import {LoginComponent} from "./LoginComponent";
import {enrollUserToSubject, getAllSubjects} from "../Utils/Services";

export const LoginPage = (props) => {
        let history = useHistory();
        const [subjects, setSubjects] = React.useState(null)

        React.useEffect(() => {
            getAllSubjects(props.token).then(data => {
                setSubjects(data)
            })
        }, [])

        const getSubjectButtons = () => {
            return subjects?.map(subject => {
                return <div className="subject" onClick={() => {
                    console.log('call made')
                    enrollUserToSubject(props.token, props.user.id, subject.id).then(r => {
                        console.log(r.status)
                    })
                }}>{subject.name}</div>
            })
        }

        return (
            <React.Fragment>{
                props.user ?
                    <div className="welcome">
                        <p className="hello">Hello <span>{props.user.username}</span>!</p>
                        <p>Welcome back to your University Deadline Tracker!</p>
                        <div className="button" onClick={() => history.push(Pages.BOARD)}>Check your Boards!</div>
                        <p className="enroll">Enroll to subjects to stay up to date with upcoming tasks!</p>
                        <div className="subject-board">
                            <div className="filter"/>
                            {subjects ?
                                getSubjectButtons()
                                :
                                <div className="spinner">
                                    <CircularProgress color="inherit"/>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <React.Fragment>
                        <Default main/>
                        <LoginComponent setUser={props.setUser} token={props.token} setToken={props.setToken}/>
                    </React.Fragment>
            }
            </React.Fragment>
        );
    }
;
export default LoginPage;