import React from 'react';
import "./LoginPage.css"
import {Pages} from "../Utils/Enums";
import {useHistory} from "react-router-dom";
import {enrollUserToSubject, getAllSubjects} from "../Utils/Services";
import {CircularProgress} from "@mui/material";
import {Default} from "../Components/Default";
import {Login} from "../Components/Login";
import {getUser} from "../Utils/Token";

export const LoginPage = (props) => {
        let history = useHistory();
        const [subjects, setSubjects] = React.useState(null)

        React.useEffect(() => {
            getAllSubjects().then(data => {
                setSubjects(data)
            })
        }, [])

        const getSubjectButtons = () => {
            return subjects?.map(subject => {
                return <div className="subject" onClick={() => {
                    enrollUserToSubject(subject.id).then(r => {
                        console.log(r.status)
                    })
                }}>{subject.name}</div>
            })
        }

        return (
            <React.Fragment>{
                props.token ?
                    <div className="login-page">
                        <p className="hello">Hello <span>{getUser().username}</span>!</p>
                        <p>Welcome back to your University Deadline Tracker!</p>
                        <div className="button" onClick={() => history.push(Pages.BOARD)}>Check your Boards!</div>
                        <p className="enroll">Enroll to subjects to stay up to date with upcoming tasks!</p>
                        <div className="subject-board">
                            <div className="filter"/>
                            {subjects ?
                                getSubjectButtons()
                                :
                                <div className="board-spinner">
                                    <CircularProgress color="inherit"/>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <React.Fragment>
                        <Default main/>
                        <Login token={props.token} setToken={props.setToken}/>
                    </React.Fragment>
            }
            </React.Fragment>
        );
    }
;
export default LoginPage;