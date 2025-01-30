// src/reducers/bookingTimesReducer.test.js
import { initializeTimes, updateTimes } from "./bookingTimesReducer";
import { fetchAPI } from "../api"; // Import fetchAPI

// Mock fetchAPI
jest.mock("../api", () => ({
  fetchAPI: jest.fn(() => ["12:00 PM", "1:00 PM", "2:00 PM"]), // Mocked return value
}));

describe("initializeTimes", () => {
  it("should return the expected initial available times", () => {
    const expectedTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
    expect(fetchAPI).toHaveBeenCalled(); // Ensure fetchAPI is called
  });
});

// src/reducers/bookingTimesReducer.test.js
describe("updateTimes", () => {
  it("should return the updated available times based on the selected date", () => {
    const selectedDate = "2023-10-15";
    const mockTimes = ["5:00 PM", "6:00 PM", "7:00 PM"];

    // Mock fetchAPI to return specific times for the selected date
    fetchAPI.mockImplementation((date) => {
      if (date === selectedDate) {
        return mockTimes;
      }
      return [];
    });

    const result = updateTimes([], { type: "SET_DATE", payload: selectedDate });
    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate); // Ensure fetchAPI is called with the correct date
  });
});
