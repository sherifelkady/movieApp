import React, { useEffect, useState } from "react";
import bg from "../assets/images/home__bg.jpg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import ReactPlayer from "react-player";
import Categories from "../components/movies/Categories";

export default function SeriesDetails() {
  const param = useParams();
  const movieList = useSelector((state) => state.movies.seriesList);
  const series = movieList.find((item) => item.id === Number(param.id));
  console.log(series);
  // -------------- Hooks -----------------
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const apiKey = "e3f1a7c4ecf25f611f80d142e8fe251f";
    fetch(
      `http://api.themoviedb.org/3/tv/${series.id}/videos?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setVideo(data.results));
    setTimeout(() => {
      console.log("MOVIE_API", video);
    }, 2);
  }, []);

  return (
    <div
      id="season-movies"
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content px-52 h-full bg-darker opacity-95 text-white">
        <div id="new-movies" className="pt-36">
          <h4 className="text-4xl font-bold py-6">{series.name}</h4>
          <div className="movie-info flex gap-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
              className="rounded-md h-96"
              alt="card"
            />
            <div className="movie-details font-normal text-gray-300 flex flex-col gap-2">
              <p className="flex gap-1 items-center">
                <AiFillStar className="text-secondary" />
                <span>{series.vote_average}</span>
              </p>
              <p>
                Category:
                <span className="text-secondary ml-1">
                  <Categories ids={series.genre_ids} />
                </span>
              </p>
              <p>
                Release Date:
                <span className="ml-1">{series.release_date}</span>
              </p>
              <p className="mt-2">{series.overview}</p>
            </div>
            <div className="movie-video">
              {video && (
                <ReactPlayer
                  light={true}
                  width="440px"
                  height="240px"
                  url={`https://www.youtube.com/watch?v=${
                    video.length > 0 &&
                    video.find((item) => item.type === "Trailer").key
                  }`}
                ></ReactPlayer>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
