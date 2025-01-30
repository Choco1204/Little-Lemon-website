// src/pages/Booking.js
import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../api"; // Import fetchAPI

// Reducer function to update available times based on the selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      const selectedDate = action.payload;
      return fetchAPI(selectedDate); // Use fetchAPI
    default:
      return state;
  }
};

// Initialize times for today's date
const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date
  return fetchAPI(today); // Use fetchAPI
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Booking;
