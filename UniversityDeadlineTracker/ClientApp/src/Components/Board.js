import React, {useEffect, useState} from "react";
import "./Board.css";
import SimpleSlider from "./Slider";
import {Default} from "./Default";
import {getUserTasksForUser} from "../Utils/Services";
import {CircularProgress} from "@mui/material";

export const Board = (props) => {
        const [tasks, setTasks] = useState(null)

        useEffect(() => {
            if (!props.token) return;

            getUserTasksForUser(props.token, props.user?.id).then(data => {
                setTasks(data)
            })
        }, [props.token])

        return (
            <React.Fragment>{props.user ?
                (tasks ?
                        <div className="board">
                            <SimpleSlider user={props.user} token={props.token} tasks={tasks}/>
                        </div>
                        :
                        <div className="spinner">
                            <CircularProgress color="inherit"/>
                        </div>
                )
                :
                <Default/>
            }
            </React.Fragment>
        );
    }
;
