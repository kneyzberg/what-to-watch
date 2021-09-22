import WatchForm from "./WatchForm";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

const genres = [
  {
    id: 1,
    name: "Comedy",
  },
  {
    id: 2,
    name: "Drama",
  },
  {
    id: 3,
    name: "Horror",
  },
];

describe("Testing the WatchForm component", () => {
  test("Watch Form renders correctly", () => {
    render(<WatchForm genres={genres} />);
  });
  test("matches snapshot", () => {
    const { container } = render(<WatchForm genres={genres} />);
    expect(container).toMatchSnapshot();
  });
  test("Picking a genre successfully", () => {
    const { getByTestId, getByText } = render(<WatchForm genres={genres} />);
    const selectElement = getByTestId("genre");
    fireEvent.change(selectElement, { target: { value: "2" } });
    expect(selectElement.value).toBe("2");
    expect(getByText("Drama")).toBeInTheDocument();
  });
});
