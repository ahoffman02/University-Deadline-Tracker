import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import {Header} from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Backlog from "./Components/Backlog";
import Community from "./Components/Community";
import {Pages} from "./Utils/Enums";

export const App = () => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     setUser({username: 'PacoPakkun'})
    // }, [])

    return (
        <React.Fragment>
            <Router>
                <Header user={user} setUser={setUser}/>
                <Switch>
                    <Route exact path={Pages.HOME}>
                        <LoginPage user={user} setUser={setUser}/>
                    </Route>
                    <Route path={Pages.BOARD}>
                        <Home user={user}/>
                    </Route>
                    <Route path={Pages.BACKLOG}>
                        <Backlog user={user}/>
                    </Route>
                    <Route path={Pages.COMMUNITY}>
                        <Community user={user}/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App
