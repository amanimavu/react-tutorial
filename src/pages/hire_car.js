import React, {useState} from 'react';
import "../index.scss";
import Datepicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import {hire_cars} from "../information";

function Dates(props){
    const [selectedDate, setSelectedDate] = useState(null)
    return(
        <div>
            <Datepicker 
                style={{width:"100%"}}
                selected={selectedDate} 
                onchange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                showTimeSelect
                placeholderText={props.text}
            />
        </div>
    )
}

function CarSelection(props){
    return(
        <div>
            {
                props.car_display.map((car)=>
                    <div className="card container m-3 " >
                        <div className="row">
                            <div className="col-5">
                                <img src={require(`${car.Path}`)} alt="..." style={{width:"400px"}} />
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center justify-content-center">
                                <p>{car.charges_now}</p>
                                <button type="button" class="btn btn-outline-dark">Pay Now</button>
                            </div>
                            <div className="col-2 d-flex flex-column align-items-center justify-content-center">
                                <p>{car.charges_later}</p>
                                <button type="button" class="btn btn-dark">Pay Later</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

const Hire = () => 
    <div  style={{backgroundColor:"#d4d4dc"}}>
        <div className="m-0, p-5">
            <div className="grid">
                <div className="row">
                    <div className="col-5">
                        <div className="card hire" style={{width:"400px", backgroundColor:" #feda6a"}}>
                            <form>
                                <div className="form-group">
                                    <label className="align-left" for="pickUp" style={{marginLeft:"40px", marginBottom:"0px"}}>PICK UP</label>
                                    <div className="d-flex justify-content-center">
                                        <select className="form-control" id="pickUp" style={{width:"320px"}}>
                                            <option>Choose office</option>
                                            <option>Karen</option>
                                            <option>South B</option>
                                            <option>Kileleshwa</option>
                                            <option>south C</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <Dates text="Pickup date"/>
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <Dates text="Return date"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
        </div>

        <section className="cars">
            <CarSelection car_display={hire_cars}/>
        </section>
    </div>


export default Hire