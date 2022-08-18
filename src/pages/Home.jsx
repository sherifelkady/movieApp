import React from "react";
import MovieList from "../components/movies/MovieList";
import SeriesList from "../components/series/SeriesList";
import TrendMovies from "../components/TrendMovies";

export default function Home() {
  return (
    <>
      <TrendMovies />
      <MovieList />
      <SeriesList />
    </>
  );
}
