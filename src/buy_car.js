import React from 'react';
import "./index.scss";
import { car_info } from './information';

const Find = () => 
    <div className="card buy-search-tabs m-5 border">
        <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-new-tab" data-toggle="tab" href="#nav-new" role="tab" aria-controls="nav-new" aria-selected="true">New car</a>
                <a class="nav-item nav-link" id="nav-used-tab" data-toggle="tab" href="#nav-used" role="tab" aria-controls="nav-used" aria-selected="false">Used car</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-new" role="tabpanel" aria-labelledby="nav-new-tab">
                <div class="input-group mb-3 mt-3 ml-2 row">
                    <select class="custom-select col" id="inputGroupSelect01">
                        <option selected>Price:Min</option>
                        <option value="1">sh.1000000</option>
                        <option value="2">sh.2000000</option>
                        <option value="3">sh.3000000</option>
                    </select>
                    <select class="custom-select col" id="inputGroupSelect01">
                        <option selected>Price:Max</option>
                        <option value="1">sh.5000000</option>
                        <option value="2">sh.6000000</option>
                        <option value="3">sh.7000000</option>
                    </select>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-used" role="tabpanel" aria-labelledby="nav-used-tab">
            <div class="input-group m-2 row">
                    <select class="custom-select col" id="inputGroupSelect01">
                        <option selected>Price:Min</option>
                        <option value="1">sh.1000000</option>
                        <option value="2">sh.2000000</option>
                        <option value="3">sh.3000000</option>
                    </select>
                    <select class="custom-select col" id="inputGroupSelect01">
                        <option selected>Price:Max</option>
                        <option value="1">sh.5000000</option>
                        <option value="2">sh.6000000</option>
                        <option value="3">sh.7000000</option>
                    </select>
                </div>
                <div className="input-group m-2">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Mileage</option>
                    <option value="1">10,000km</option>
                    <option value="2">20,000km</option>
                    <option value="3">30,000km</option>
                </select>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary w-10 mb-2 d-flex justify-content-center" type="submit">Find</button>
        </div>
    </div>

const CarDisplay = (props) => 
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {
                props.cars.map((pair, i) =>
                    <div className={`${pair.class}`}>
                        <div className="row">
                            <div className="card col h-1 p-0">
                                <img src={require(`${pair.Left.Path}`)} className="" alt="..."></img>
                                <div className="card-body">
                                    <p>{`name: ${pair.Left.name}`}</p>
                                    <div>
                                        {
                                            pair.Left.specs.map((spec, i) =>
                                                <ul style={{listStyle:"none"}}>
                                                    <li key={i}>{spec}</li>
                                                </ul>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card col h-1 p-0">
                                <img src={require(`${pair.Right.Path}`)} alt="..."></img>
                                <div className="card-body">
                                    <p>{`name: ${pair.Right.name}`}</p>
                                    <div>
                                        {
                                            pair.Right.specs.map((spec, i) =>
                                                <ul>
                                                    <li key={i}>{spec}</li>
                                                </ul>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>


function Buy(){
    return(
        <div>
            <Find />
            <CarDisplay cars={car_info} />
        </div>
    )
}

export default Buy