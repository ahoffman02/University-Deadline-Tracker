import React, {useEffect, useState} from "react";
import "./BoardPage.css";
import {getUserTasksForUser} from "../Utils/Services";
import {CircularProgress} from "@mui/material";
import SimpleSlider from "../Components/Slider";
import {Default} from "../Components/Default";

export const BoardPage = (props) => {
        const [tasks, setTasks] = useState(null)

        useEffect(() => {
            if (!props.token) return;

            getUserTasksForUser().then(data => {
                setTasks(data)
            })
        }, [props.token])

        return (
            <React.Fragment>
                {props.token ?
                    (tasks ?
                            <div className="board-page">
                                <SimpleSlider tasks={tasks}/>
                            </div>
                            :
                            <div className="board-spinner">
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
