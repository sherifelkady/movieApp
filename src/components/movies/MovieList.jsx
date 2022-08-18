import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import BigCard from "../BigCard";
import MovieCard from "./MovieCard";
import getMovies from "../../store/actions/getMovies";
import getMoviesCategories from "../../store/actions/getMoviesCategories";

export default function MovieList() {
  // -------------- Hooks -------------------
  const movies = useSelector((state) => state.movies.moviesList);
  const categories = useSelector((state) => state.categories.seriesCategories);
  const dispatch = useDispatch();
  // ---------------- Effects ---------------
  console.log(categories);
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getMoviesCategories());
  }, [dispatch]);
  return (
    <section
      id="movie-list"
      className="bg-dark relative  before:bg-gradient-to-r before:from-secondary before:to-third before:h-1 before:absolute before:w-full"
    >
      <header className="drop-shadow-lg shadow-darker h-20 w-full border-b border-gray-700 flex items-center text-white">
        <div id="header-content" className="px-52 text-3xl">
          Movies List
        </div>
      </header>
      <div
        id="movie-list"
        className="px-52 flex gap-6 justify-start flex-wrap mt-5 py-5"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
