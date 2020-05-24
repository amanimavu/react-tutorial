import React from 'react';
import "../index.scss";

export default (props) =>
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
            <div className="carousel-control-icon-wrapper d-flex justify-content-center align-items-center">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </div>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <div className="carousel-control-icon-wrapper d-flex justify-content-center align-items-center">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </div>
            <span class="sr-only">Next</span>
        </a>
    </div>
