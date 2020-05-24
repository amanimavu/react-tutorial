import React from 'react';
import "./index.scss";
import { NavLink } from 'react-router-dom';
import {Instagram, Twitter, Facebook} from 'react-feather';

const Carousel = (props) =>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" style={{ height: 720 }}>
            <div class="carousel-item active">
                <div style={{ height: 720, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://images.unsplash.com/photo-1588258220484-7a74de996856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)` }}>
                    <h1>HotRides</h1>  
                </div>
            </div>
            <div class="carousel-item">
                <div style={{ height: 720, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1253&q=80)`}}>
                    
                </div>
            </div>
            <div class="carousel-item">
                <div style={{ height: 720, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)` }}>
                    
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

const NavigationBar = (props) =>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/buy">Buy</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/sell">Sell</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/hire">Hire</NavLink>
                </li>
            </ul>
        </div>
    </nav >


const Footer = () =>
    <footer>
        <div>
            <h3 className="text-center">Location</h3>
            <div>
                <section>
                    <table className="table">
                        <tr>
                            <th scope="row">Nairobi</th>
                            <td className="text-right">West Gate Mall</td>
                        </tr>
                        <tr>
                            <th scope="row">Mombasa</th>
                            <td className="text-right">City Mall</td>
                        </tr>
                        <tr>
                            <th scope="row">Eldoret</th>
                            <td className="text-right">Khetia center</td>
                        </tr>
                    </table>
                </section>
            </div>
            <br></br>
            <div>
                <Instagram size="35" color="purple" className="ml-3"/>
                <Facebook size="35" color="#4267B2" className="ml-3" />
                <Twitter size="35" color="blue" className="ml-3" />
            </div>
        </div>
    </footer>


function HomePageDisplay() {
    return (
        <div>
            <Carousel/>
            <Footer />
        </div>
    )
}

export { HomePageDisplay, NavigationBar }