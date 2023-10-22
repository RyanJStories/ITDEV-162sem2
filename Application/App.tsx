import React from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouters as Router, Switch, Route, Link} from 'react-router-dom';

WebGL2RenderingContext(){
    return(
        <Router>
            <div className = "App">
                <header className = "App-header">
                    <ul>
                        <li><Link to= "/">Home</Link></li>
                        <li><Link to= "/Register">Register</Link></li>
                        <li><Link to= "/Login">Login</Link></li>
                    </ul>
                </header>
                <main>
                    <Route exact path = "/">
                        {this.state.data}
                    </Route>
                    <Switch>
                        <Route path = "/register">
                            Register
                        </Route> 
                        <Route path = "/login">
                            Login
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}