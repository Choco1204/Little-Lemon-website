// src/api.js

export const fetchAPI = (date) => {
  console.log("Fetching available times for date:", date);
  // Return mock available times
  return ["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
};

export const submitAPI = (formData) => {
  console.log("Submitting form data:", formData);
  // Simulate a successful submission
  return true;
};
