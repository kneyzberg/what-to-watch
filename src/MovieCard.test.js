import MovieCard from "./MovieCard";
import React from "react";
import { render } from "@testing-library/react";

const movie = {
  title: "Testing Movie Card",
  release_date: "2021-09-22",
  poster_path: "/test.jpg"
}
const imgUrl = "testingmovies.com";
const posterSize = "w-3";

describe("Movie card test", () => {
  test("Movie Card renders correctly", () => {
    render(<MovieCard movie={movie} imgUrl={imgUrl} posterSize={posterSize}/>);
  });

  test("matches snapshot", () => {
    const { container, getByAltText } = render(<MovieCard movie={movie} imgUrl={imgUrl} posterSize={posterSize} />);
    expect(container).toMatchSnapshot();
    expect(getByAltText("Poster for Testing Movie Card")).toBeInTheDocument();
  })
});