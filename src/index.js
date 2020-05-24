import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HomePage from "./pages/home";
import LocationPage from "./pages/locations";
import AboutPage from "./pages/about";
import BuyPage from "./pages/buy_car";
import HirePage from "./pages/hire_car";
import SellPage from "./pages/sell_car";

import NavigationBar from './components/NavigationBar';

import { HashRouter, Switch, Route } from 'react-router-dom';

function App(){
    return(
        <div>
            <NavigationBar/>
            <div className="content">
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/buy" component={BuyPage}/>
                <Route path="/sell" component={SellPage}/>
                <Route path="/hire" component={HirePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/locations" component={LocationPage}/>
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

