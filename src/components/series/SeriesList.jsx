import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSeries from "../../store/actions/getSeries";
import getSeriesCategories from "../../store/actions/getSeriesCategories";
import SeriesCard from "./SeriesCard";

export default function SeriesList() {
  // -------------- Hooks ----------------
  const dispatch = useDispatch();
  const series = useSelector((state) => state.movies.seriesList);
  useEffect(() => {
    dispatch(getSeries());
    dispatch(getSeriesCategories());
  }, [dispatch]);
  console.log(series);
  return (
    <section
      id="movie-list"
      className="bg-dark relative  before:bg-gradient-to-r before:from-secondary before:to-third before:h-1 before:absolute before:w-full"
    >
      <header className="drop-shadow-lg shadow-darker h-20 w-full border-b border-gray-700 flex items-center text-white">
        <div id="header-content" className="px-52 text-3xl">
          Series List
        </div>
      </header>
      <div
        id="movie-list"
        className="px-52 flex gap-6 justify-start flex-wrap mt-5 py-5"
      >
        {series.map((item) => (
          <SeriesCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
