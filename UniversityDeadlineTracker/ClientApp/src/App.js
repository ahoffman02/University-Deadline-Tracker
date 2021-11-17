import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";

export const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App
