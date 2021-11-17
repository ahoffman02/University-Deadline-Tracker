import React from "react";
import "./Board.css";
import SimpleSlider from "./Slider";
import {Default} from "./Default";

export const Board = (props) => {
    return (
        <React.Fragment>{props.user ?
            <div className="board">
                <SimpleSlider user={props.user}/>
            </div>
            :
            <Default/>
        }
        </React.Fragment>
    );
};
