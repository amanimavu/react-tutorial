import React from 'react';
import "../index.scss";

const About = () => 
    <div className="card m-5 p-3">
        <section className="">
            <h2>Who are we</h2>
            <p>Cheki is a trusted and cost effective online marketplace for the widest range of quality vehicles.
                We sell new cars, used cars, hire out cars and also buy used cars from people. We directly deal with 
                our customers, this is not an advertising platform. We also offer purchasing advice to anyone but mostly 
                to first-time buyers. 
            </p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>
                Have any inquiry? Need some advice on what car to purchase? We got you. We have a reliable response team to
                handle any question that you may have.
            </p>
            <p>If you have any specific query, you can fill the form below and we will get back to you</p>
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name"></input>
                </div>
                <div className="form-group">
                    <label for="email">Password</label>
                    <input type="password" className="form-control" id="email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with someone else</small>
                </div>
                <div className="form-row">
                    <div className="col">
                        <div className="input-group-prepend">
                            <label for="code">Country Code</label>
                        </div>
                        <select className="custom-select" id="code">
                            <option value="+254">Kenya</option>
                            <option value="+256">Uganda</option>
                            <option value="+255">Tanzania</option>
                            <option value="+257">Rwanda</option>
                            <option value="+258">Burundi</option>
                        </select>
                    </div>
                    <div className="col">
                        <label for="tel">Phone number</label>
                        <input type="text" className="form-control" id="tel"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="text-area">How can we help you?</label>
                    <textarea className="form-control" id="text-area" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">SEND ENQUIRY</button>
            </form>
        </section>
    </div>

export default About