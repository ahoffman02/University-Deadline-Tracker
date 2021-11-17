import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import {Header} from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Backlog from "./Components/Backlog";
import Community from "./Components/Community";

export const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/backlog" component={Backlog}/>
                    <Route path="/community" component={Community}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App
