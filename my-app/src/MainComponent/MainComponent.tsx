import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Appointment from "./Appointment/index.tsx";
import Dashboard from "./Dashboard/index.tsx";
import Customer from "./Customer/index.tsx";
import Markerting from "./Markerting/index.tsx";
import Services from "./Services/index.tsx";
import Employees from "./Employees/index.tsx";
import Reports from "./Reports/index.tsx";
import Settings from "./Settings/index.tsx";
import LeftNavigation from "./LeftNavigation/index.tsx";

const MainComponent = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <LeftNavigation />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/marketing" element={<Markerting />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainComponent;