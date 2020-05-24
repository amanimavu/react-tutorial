import React from 'react';
import "./index.scss";

const Sell = () => 
    <div className="m-5">
        <h2>Sell us your car</h2>
        <hr></hr>
        <div className="container">
            <div className="row row-cols-2">
                <div className="col">
                    <div className="card">
                        <h5 className="card-header">Guidelines</h5>
                        <div className="card-body">
                            <ol>
                                <li>Register as a private seller</li>
                                <li>Login to our website</li>
                                <li>Post a photo of your car in our social media handles</li>
                                <li>We shall then send our response through your email</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    </div>

export default Sell