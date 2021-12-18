import React, { useEffect, useState } from "react";
import "./Board.css";
import SimpleSlider from "./Slider";
import { Default } from "./Default";
import { getAllTasks, getAllUserTasks, getTaskById } from "../Utils/Services";

export const Board = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (!props.token) return;

        getAllUserTasks(props.token).then((data) => {
            setTasks(data);
        });
    }, [props.token]);

    return (
        <React.Fragment>
            {props.user ? (
                <div className="board">
                    <SimpleSlider
                        user={props.user}
                        token={props.token}
                        tasks={tasks}
                    />
                </div>
            ) : (
                <Default />
            )}
        </React.Fragment>
    );
};
