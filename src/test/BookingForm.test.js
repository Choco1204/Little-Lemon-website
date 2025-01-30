// src/components/BookingForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock the necessary props
const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
const mockDispatch = jest.fn();
const mockOnClose = jest.fn();

// Mock submitAPI
jest.mock("../api", () => ({
  submitAPI: jest.fn(() => true), // Mocked return value for successful submission
}));

describe("BookingForm", () => {
  it("renders the static text 'Book a Table'", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Check if the static text "Book a Table" is rendered
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
  });

  it("submits the form successfully", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText("Date:"), {
      target: { value: "2023-10-15" },
    });
    fireEvent.change(screen.getByLabelText("Time:"), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests:"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion:"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Check if submitAPI was called
    expect(mockOnClose).toHaveBeenCalled(); // Ensure onClose is called after successful submission
  });

  it("displays an error message if submission fails", () => {
    // Mock submitAPI to return false (failed submission)
    jest.spyOn(require("../api"), "submitAPI").mockImplementation(() => false);

    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Submit the form without filling it out (should fail validation)
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Check if the error message is logged
    expect(console.error).toHaveBeenCalledWith("Submission failed");
  });
});
