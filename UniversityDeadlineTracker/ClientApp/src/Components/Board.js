import React, {useEffect, useState} from "react";
import "./Board.css";
import SimpleSlider from "./Slider";
import {Default} from "./Default";

export const Board = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('task').then(data =>
            data.json().then(data =>
                setTasks(data)
            ))
    }, [])

    const mockTasks = [{
        title: "LFTC lab1", date: "19.11.2021",
        description: 'Lorem ipsum dolor sit amet',
        penalty: "2p/week penalty"
    }, {
        title: "Mobile lab2", date: "19.11.2021",
        description: 'Lorem ipsum dolor sit amet',
        penalty: "2p/week penalty"
    }, {
        title: "PPD lab1", date: "20.11.2021",
        description: 'Lorem ipsum dolor sit amet',
        penalty: "2p/week penalty"
    }, {
        title: "LFTC lab2", date: "21.11.2021",
        description: 'Lorem ipsum dolor sit amet',
        penalty: "2p/week penalty"
    }, {
        title: "Mobile lab3", date: "21.11.2021",
        description: 'Lorem ipsum dolor sit amet',
        penalty: "2p/week penalty"
    }, {
        title: "PPD lab2", date: "21.11.2021",
        description: 'Lorem ipsum dolor sit amet',
        penalty: "2p/week penalty"
    }]

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
