import React, {useEffect, useState} from "react";
import "./Board.css";
import SimpleSlider from "./Slider";
import {Default} from "./Default";

export const Board = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('api/tasks').then(data =>
            data.json().then(data =>
                setTasks(data)
            ))
    }, [])

    return (
        <React.Fragment>{props.user ?
            <div className="board">
                <SimpleSlider user={props.user} tasks={tasks}/>
            </div>
            :
            <Default/>
        }
        </React.Fragment>
    );
};
