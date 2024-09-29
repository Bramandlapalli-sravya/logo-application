import React from "react";
import AppointmentMenu from '../../assets/appointment-menu.svg';
import { AppointmentStyles } from "./styles.ts";
import CalendarComponent from "../../Calendar/index.js";

const Appointment = () => {
    return (
        <AppointmentStyles className="d-flex flex-column justify-content-start flex-grow-1 h-100">
            <div className="top-nav">
                <div className="d-flex w-100 justify-content-between">
                    <div className="left-wrapper">
                        <img src={AppointmentMenu} alt="Appointment Menu" />
                        <h1>Appointment</h1>
                    </div>
                    <div className="right-wrapper gap-2">
                        <select>
                            <option>Beautiful Minds Salon</option>
                        </select>
                        <select>
                            <option>EN</option>
                            <option>FR</option>
                        </select>
                    </div>
                </div>
            </div>
            <CalendarComponent />
        </AppointmentStyles>
    );
}

export default Appointment;