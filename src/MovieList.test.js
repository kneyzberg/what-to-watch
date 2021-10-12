import MovieList from "./MovieList";
import React from "react";
import { render } from "@testing-library/react";

const movies = [
  {
    id: 1,
    title: "Testing Movie Card1",
    release_date: "2021-09-22",
    poster_path: "/test.jpg",
  },
  {
    id: 2,
    title: "Testing Movie Card2",
    release_date: "2021-09-22",
    poster_path: "/test.jpg",
  },
  {
    id: 3,
    title: "Testing Movie Card3",
    release_date: "2021-09-22",
    poster_path: "/test.jpg",
  },
];
const imgUrl = "testingmovies.com";
const posterSize = "w-3";

describe("MovieList test", () => {
  test("MovieList renders correctly", () => {
    render(
      <MovieList movies={movies} imgUrl={imgUrl} posterSize={posterSize} />
    );
  });

  test("matches snapshot", () => {
    const { container, getByAltText } = render(
      <MovieList movies={movies} imgUrl={imgUrl} posterSize={posterSize} />
    );
    expect(container).toMatchSnapshot();
    expect(getByAltText("Poster for Testing Movie Card1")).toBeInTheDocument();
  });
  test("Title is in the document", () => {
    const { getByText } = render(
      <MovieList movies={movies} imgUrl={imgUrl} posterSize={posterSize} />
    );
    expect(getByText("Testing Movie Card2")).toBeInTheDocument();
  });
});
