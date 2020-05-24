import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) =>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" exact={true}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/buy" exact={true}>Buy</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/sell" exact={true}>Sell</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/hire" exact={true}>Hire</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/locations" exact={true}>Location</NavLink>
                </li>
            </ul>
        </div>
    </nav >