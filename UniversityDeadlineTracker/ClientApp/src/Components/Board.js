import React, {useEffect, useState} from "react";
import "./Board.css";
import SimpleSlider from "./Slider";
import {Default} from "./Default";
import {getAllTasks} from "../Utils/Services";

export const Board = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (!props.token) return;

        getAllTasks(props.token).then(data => {
            setTasks(data.map(task => {
                return {...task, status: 'New'}
            }))
        })
    }, [props.token])

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
