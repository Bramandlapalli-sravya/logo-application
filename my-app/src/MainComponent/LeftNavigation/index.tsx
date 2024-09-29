import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LeftNavigationStyles } from "../LeftNavigation/styles.ts";
//@ts-ignore
import Home from "../../assets/dasboard.svg";
//@ts-ignore
import SelectedHome from "../../selected-assets/selected-dasboard.svg";
//@ts-ignore
import CalendarIcon from "../../assets/calendar.svg";
import SelectedcalendarIcon from "../../selected-assets/selected-calendar.svg";
//@ts-ignore
import CustomerIcon from "../../assets/customer.svg";
import SelectedCustomer from "../../selected-assets/selected-customer.svg";
//@ts-ignore
import MarketingIcon from "../../assets/marketing.svg";
import SelectedMarketingIcon from "../../selected-assets/selected-marketing.svg";
//@ts-ignore
import ServicesIcon from "../../assets/services.svg";
import SelectedServicesIcon from "../../selected-assets/selected-services.svg";
//@ts-ignore
import EmployeesIcon from "../../assets/employee.svg";
import SelectedEmployeesIcon from "../../selected-assets/selected-employee.svg";
//@ts-ignore
import ReportsIcon from "../../assets/reports.svg";
import SelectedReportIconIcon from "../../selected-assets/selected-reports.svg";
//@ts-ignore
import SettingsIcon from "../../assets/settings.svg";
import SelectedSettingsIcon from "../../selected-assets/selected-settings.svg";
//@ts-ignore
import LogoutIcon from "../../assets/logout.svg";
import SelectedLogoutIcon from "../../selected-assets/selected-logout.svg";

const LeftNavigation = () => {
    const location = useLocation();

    // Define nav items without the icon logic
    const navList = [
        { name: 'Dashboard', path: '/dashboard', defaultSrc: Home, selectedSrc: SelectedHome },
        { name: 'Appointment', path: '/appointment', defaultSrc: CalendarIcon, selectedSrc: SelectedcalendarIcon },
        { name: 'Customer', path: '/customer', defaultSrc: CustomerIcon, selectedSrc: SelectedCustomer },
        { name: 'Marketing', path: '/marketing', defaultSrc: MarketingIcon, selectedSrc: SelectedMarketingIcon },
        { name: 'Services', path: '/services', defaultSrc: ServicesIcon, selectedSrc: SelectedServicesIcon },
        { name: 'Employees', path: '/employees', defaultSrc: EmployeesIcon, selectedSrc: SelectedEmployeesIcon },
        { name: 'Reports', path: '/reports', defaultSrc: ReportsIcon, selectedSrc: SelectedReportIconIcon },
        { name: 'Settings', path: '/settings', defaultSrc: SettingsIcon, selectedSrc: SelectedSettingsIcon },
        { name: 'Logout', path: '/logout', defaultSrc: LogoutIcon, selectedSrc: SelectedLogoutIcon },
    ];

    return (
        <LeftNavigationStyles>
            <h1 className="d-flex align-self-start ps-4">LOGO</h1>
            <div className="navigation">
                {navList.map((nav) => {
                    const isSelected = nav.path === location.pathname;

                    // Select the correct icon based on the `isSelected` status
                    const iconSrc = isSelected ? nav.selectedSrc : nav.defaultSrc;

                    return (
                        <Link to={nav.path} key={nav.name} className={`${isSelected && "selected-item "} item`}>
                            <img src={iconSrc} alt={nav.name} />
                            <span>{nav.name}</span>
                        </Link>
                    );
                })}
            </div>
        </LeftNavigationStyles>
    );
};

export default LeftNavigation;
