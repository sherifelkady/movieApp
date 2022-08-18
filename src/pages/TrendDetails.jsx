import React, { useEffect, useState } from "react";
import bg from "../assets/images/home__bg.jpg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import ReactPlayer from "react-player";
import Categories from "../components/movies/Categories";

export default function TrendDetails() {
  const param = useParams();
  const trendList = useSelector((state) => state.movies.trendsList);
  const movie = trendList.find((item) => item.id === Number(param.id));
  console.log("THE MOVIE", movie.id);
  // -------------- Hooks -----------------
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const apiKey = "e3f1a7c4ecf25f611f80d142e8fe251f";
    fetch(
      `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("THE DATA", data);
        data.results.length > 0 && setVideo(data.results);
      });
    setTimeout(() => {
      console.log("VIDO_API", video);
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
          <h4 className="text-4xl font-bold py-6">{movie.title}</h4>
          <div className="movie-info flex gap-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="rounded-md h-96"
              alt="card"
            />
            <div className="movie-details font-normal text-gray-300 flex flex-col gap-2">
              <p className="flex gap-1 items-center">
                <AiFillStar className="text-secondary" />
                <span>{movie.vote_average}</span>
              </p>
              <p>
                Category:
                <span className="text-secondary ml-1">
                  <Categories ids={movie.genre_ids} />
                </span>
              </p>
              <p>
                Release Date: <span className="ml-1">{movie.release_date}</span>
              </p>
              <p className="mt-2">{movie.overview}</p>
            </div>
            <div className="movie-video">
              <ReactPlayer
                light={true}
                width="440px"
                height="240px"
                url={`https://www.youtube.com/watch?v=${
                  video &&
                  video.find(
                    (item) => item.type === "Teaser" || item.type === "Trailer"
                  ).key
                }`}
              ></ReactPlayer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
