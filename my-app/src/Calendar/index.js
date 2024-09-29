import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../Calendar/style.css";
import eventsData from "../Calendar/event.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Modal component
const Modal = ({
  showModal,
  handleClose,
  selectedDate,
  selectedTime,
  handleBooking,
}) => {
  const [customer, setCustomer] = useState("");
  const [service, setService] = useState("");

  // Conditionally render the modal content based on `showModal`
  if (!showModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new event with the selected date, time, customer, and service
    const newEvent = {
      title: `${service} with ${customer}`, // Title of the event
      start: new Date(`${selectedDate}T${selectedTime}`), // Start date and time
      end: new Date(
        moment(`${selectedDate}T${selectedTime}`).add(1, "hour").toDate()
      ), // End time (assuming 1 hour for simplicity)
    };

    handleBooking(newEvent); // Add the new event to the calendar
    handleClose(); // Close the modal after booking
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Appointment</h2>
        <div className="time-picker-container">
          <div className="time-picker">
            <label>on</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => console.log("Date selected:", e.target.value)}
            />
          </div>

          <div className="time-picker">
            <label>at</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => console.log("Time selected:", e.target.value)}
            />
          </div>
        </div>
        <form
          className="d-flex flex-column justify-content-between flex-grow-1"
          onSubmit={handleSubmit} // Call handleSubmit on form submission
        >
          <div className="d-flex flex-column w-100 gap-3">
            <select
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              required
            >
              <option value="">Select Customer</option>
              <option value="Customer 1">Customer 1</option>
              <option value="Customer 2">Customer 2</option>
              <option value="Customer 3">Customer 3</option>
            </select>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
            </select>
          </div>
          <div className="modal-footer">
            <button type="button" className="close-btn" onClick={handleClose}>
              Close
            </button>
            <button type="submit" className="book-btn">
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CustomToolbar = (props) => {
  const goToBack = () => {
    props.onNavigate("PREV"); // Move to previous date (week, day, or month)
  };

  const goToNext = () => {
    props.onNavigate("NEXT"); // Move to next date (week, day, or month)
  };

  const goToToday = () => {
    props.onNavigate("TODAY"); // Move to the current date
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <div onClick={goToToday}>Today</div>
        <FontAwesomeIcon icon={faChevronLeft} onClick={goToBack} />
        <FontAwesomeIcon icon={faChevronRight} onClick={goToNext} />
      </span>
      <span className="rbc-toolbar-label">{props.label}</span>
      <span className="rbc-btn-group">
        <button onClick={() => props.onView("day")}>Day</button>
        <button onClick={() => props.onView("week")}>Week</button>
        <button onClick={() => props.onView("month")}>Month</button>
      </span>
    </div>
  );
};

const CalendarComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(""); // Date state
  const [selectedTime, setSelectedTime] = useState(""); // Time state
  const [events, setEvents] = useState(eventsData); // State for events

  // Handle the slot click to set the selected date and time
  const handleSlotClick = (slotInfo) => {
    const startDate = moment(slotInfo.start).format("YYYY-MM-DD"); // Format the start date
    const startTime = moment(slotInfo.start).format("HH:mm"); // Format the start time

    setSelectedDate(startDate); // Set the selected date
    setSelectedTime(startTime); // Set the selected time

    setShowModal(true); // Open modal
  };

  // Handle the form submission in the modal and add the new event
  const handleBooking = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]); // Add the new event to the existing events
  };

  const handleClose = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div style={{ height: 700 }}>
      <Calendar
        events={events} // Use the updated events state
        view={"day"}
        views={["day", "week", "month"]}
        defaultDate={new Date()}
        step={15}
        timeslots={4}
        localizer={momentLocalizer(moment)}
        selectable={true}
        onSelectSlot={handleSlotClick} // Handle click to open modal and get date/time
        style={{ height: "100%" }}
        components={{
          toolbar: CustomToolbar,
        }}
      />
      {/* Modal to display on slot click */}
      <Modal
        showModal={showModal}
        handleClose={handleClose}
        selectedDate={selectedDate} // Pass selected date
        selectedTime={selectedTime} // Pass selected time
        handleBooking={handleBooking} // Pass the booking function to the modal
      />
    </div>
  );
};

export default CalendarComponent;
