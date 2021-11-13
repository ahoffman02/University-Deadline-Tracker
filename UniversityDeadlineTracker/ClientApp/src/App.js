import React from 'react';
import {Home} from "./Components/Home";
import {NavMenu} from "./Components/NavMenu";

export const App = () => {
    return (
        <React.Fragment>
            <NavMenu/>
            <Home/>
        </React.Fragment>
    );
}
export default App
