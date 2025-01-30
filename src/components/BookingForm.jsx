// src/components/BookingForm.js
import { useState } from "react";
import { submitAPI } from "../api"; // Import submitAPI

const BookingForm = ({ availableTimes, dispatch, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track successful submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Dispatch action when date changes
    if (name === "date") {
      dispatch({ type: "SET_DATE", payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionResult = submitAPI(formData); // Use submitAPI
    if (submissionResult) {
      console.log("Form Submitted:", formData);
      setIsSubmitted(true); // Set submission state to true
      setTimeout(() => {
        onClose(); // Close the modal after a short delay
      }, 2000); // Close after 2 seconds
    } else {
      console.error("Submission failed");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Book a Table</h2>

      {isSubmitted ? (
        <div className="text-green-600 font-semibold text-center">
          <p>Your reservation has been successfully submitted!</p>
          <p>Closing the form...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Date */}
          <label className="text-gray-700">
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded"
            />
          </label>

          {/* Time - Dynamically updated */}
          <label className="text-gray-700">
            Time:
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">Select a time</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>

          {/* Guests */}
          <label className="text-gray-700">
            Number of Guests:
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded"
            />
          </label>

          {/* Occasion */}
          <label className="text-gray-700">
            Occasion:
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Submit Reservation
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
