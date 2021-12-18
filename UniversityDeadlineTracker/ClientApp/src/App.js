import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import {Header} from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Backlog from "./Components/Backlog";
import Community from "./Components/Community";
import {Pages} from "./Utils/Enums";
import {Board} from "./Components/Board";

export const App = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <React.Fragment>
            <Router>
                <Header user={user} token={token} setUser={setUser} setToken={setToken}/>
                <Switch>
                    <Route exact path={Pages.HOME}>
                        <LoginPage user={user} token={token} setUser={setUser} setToken={setToken}/>
                    </Route>
                    <Route path={Pages.BOARD}>
                        <Board user={user} token={token}/>
                    </Route>
                    <Route path={Pages.BACKLOG}>
                        <Backlog user={user} token={token}/>
                    </Route>
                    <Route path={Pages.COMMUNITY}>
                        <Community user={user} token={token}/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App
