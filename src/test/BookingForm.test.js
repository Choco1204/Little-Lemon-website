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
  // Test: Validate HTML5 attributes are applied correctly
  it("applies HTML5 validation attributes to form inputs", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Date input - Check required and min attributes
    const dateInput = screen.getByLabelText("Date:");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");

    // Time input - Check required attribute
    const timeSelect = screen.getByLabelText("Time:");
    expect(timeSelect).toHaveAttribute("required");

    // Guests input - Check min and max attributes
    const guestsInput = screen.getByLabelText("Number of Guests:");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "20");

    // Occasion select (no validation, so just checking if the field exists)
    const occasionSelect = screen.getByLabelText("Occasion:");
    expect(occasionSelect).toBeInTheDocument();
  });
  // Test: Form validation - Invalid guests
  it("displays an error for invalid number of guests", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Change the number of guests to an invalid value (e.g., 0)
    fireEvent.change(screen.getByLabelText("Number of Guests:"), {
      target: { value: "0" },
    });

    // Trigger form validation
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Check that the error message appears for guests
    const errorMessage = screen.getByText(
      "Number of guests must be between 1 and 20.",
    );
    expect(errorMessage).toBeInTheDocument();
  });

  // Test: Form validation - Invalid date (past date)
  it("displays an error for invalid date (past date)", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Change the date to a past date
    const pastDate = "2020-01-01";
    fireEvent.change(screen.getByLabelText("Date:"), {
      target: { value: pastDate },
    });

    // Trigger form validation
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Check that the error message appears for the date
    const errorMessage = screen.getByText("Date cannot be in the past.");
    expect(errorMessage).toBeInTheDocument();
  });

  // Test: Form validation - Valid form submission
  it("submits the form successfully when valid", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Fill out valid form fields
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

    // Check that the onClose function was called (indicating successful submission)
    expect(mockOnClose).toHaveBeenCalled();
  });

  // Test: Form validation - Missing time
  it("displays an error when the time field is not selected", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        onClose={mockOnClose}
      />,
    );

    // Change other fields but leave the time field blank
    fireEvent.change(screen.getByLabelText("Date:"), {
      target: { value: "2023-10-15" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests:"), {
      target: { value: "4" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit Reservation"));

    // Check for time validation error
    const errorMessage = screen.getByText("Time is required.");
    expect(errorMessage).toBeInTheDocument();
  });
});
