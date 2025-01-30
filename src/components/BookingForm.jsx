import { useState, useEffect } from "react";
import { submitAPI } from "../api"; // Import submitAPI

const BookingForm = ({ availableTimes, dispatch, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [formErrors, setFormErrors] = useState({
    date: "",
    time: "",
    guests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Effect to validate the form and check if all fields are valid
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const errors = {};

    // Validate Date: Ensure it's not in the past
    if (!formData.date) {
      errors.date = "Date is required.";
    } else if (new Date(formData.date) < new Date()) {
      errors.date = "Date cannot be in the past.";
    }

    // Validate Time: Ensure time is selected
    if (!formData.time) {
      errors.time = "Time is required.";
    }

    // Validate Guests: Ensure at least 1 guest and no more than 20
    if (!formData.guests || formData.guests < 1 || formData.guests > 20) {
      errors.guests = "Number of guests must be between 1 and 20.";
    }

    setFormErrors(errors);
  };

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

    // Only submit if no errors
    if (Object.keys(formErrors).length === 0) {
      const submissionResult = submitAPI(formData);
      if (submissionResult) {
        console.log("Form Submitted:", formData);
        setIsSubmitted(true);
        setTimeout(() => {
          onClose(); // Close the modal after 2 seconds
        }, 2000);
      } else {
        console.error("Submission failed");
      }
    } else {
      console.log("Form has errors");
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
              min={new Date().toISOString().split("T")[0]} // Prevent selecting past dates
              className="w-full p-2 mt-1 border rounded"
            />
            {formErrors.date && (
              <p className="text-red-600">{formErrors.date}</p>
            )}
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
            {formErrors.time && (
              <p className="text-red-600">{formErrors.time}</p>
            )}
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
            {formErrors.guests && (
              <p className="text-red-600">{formErrors.guests}</p>
            )}
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
            disabled={Object.keys(formErrors).length > 0} // Disable if there are any errors
            className="mt-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition disabled:bg-gray-300"
          >
            Submit Reservation
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
