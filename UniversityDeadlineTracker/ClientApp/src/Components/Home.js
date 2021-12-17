import React from 'react';
import {Board} from "./Board";
import './Home.css'

export const Home = (props) => {
    return (
        <div>
            <Board user={props.user} token={props.token}/>
        </div>
    );
}
export default Home;
