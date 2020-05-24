import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {HomePageDisplay, NavigationBar} from "./home";
import About from "./about";
import Buy from "./buy_car";
import Hire from "./hire_car";
import Sell from "./sell_car"

import { HashRouter, Switch, Route } from 'react-router-dom';

function App(){
    return(
        <div>
            <NavigationBar/>
            <div className="content">
                <Route path="/" component={HomePageDisplay} exact={true}/>
                <Route path="/buy" component={Buy} />
                <Route path="/sell" component={Sell} />
                <Route path="/hire" component={Hire} />
                <Route path="/about" component={About} />
            </div>
        </div>
    )
}

ReactDOM.render(
    <HashRouter>
        <Switch>
            <App/>
        </Switch>
    </HashRouter>,
    document.getElementById("root")
)

