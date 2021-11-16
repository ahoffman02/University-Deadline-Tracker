import React from 'react';
import {Home} from "./Components/Home";
import {Header} from "./Components/Header";

export const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Home/>
        </React.Fragment>
    );
}
export default App
