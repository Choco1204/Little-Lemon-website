import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock the necessary props
const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
const mockDispatch = jest.fn();
const mockOnClose = jest.fn();

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
});
