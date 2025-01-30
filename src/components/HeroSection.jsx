// src/components/HeroSection.js
import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
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

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <header className="relative bg-green-900 text-white py-12 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold text-yellow-400">Little Lemon</h1>
        <h2 className="text-xl mt-1">Chicago</h2>
        <p className="mt-2 text-gray-200">
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes with a modern twist.
        </p>

        {/* Reserve Table Button */}
        <button
          onClick={() => setShowForm(true)}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Reserve a Table
        </button>
      </div>

      {/* Right Image */}
      <img
        src="/bruchetta.svg"
        alt="Bruschetta"
        className="w-full md:w-1/3 mt-6 md:mt-0 rounded-lg shadow-md"
      />

      {/* Modal for Booking Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>

            {/* Booking Form with available times */}
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeroSection;
