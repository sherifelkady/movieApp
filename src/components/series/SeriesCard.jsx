import React from "react";
// icons
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import Categories from "../movies/Categories";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const categories = useSelector((state) => state.categories.seriesCategories);
  return (
    <div className="big-card w-40 text-white mt-4">
      <Link to={`series/${props.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          className="rounded-md h-60"
          alt="card"
        />
      </Link>

      <div className="card-content flex flex-col gap-2 mt-3">
        <a href="#">
          <h3 className="text-lg">
            {props.name.substring(0, 14)} {props.name.length > 14 && " ..."}
          </h3>
        </a>
        <span className="card_category text-slate-400 text-xs">
          <Categories ids={props.genre_ids} />
        </span>
        <div className="card_rate flex gap-2 items-center">
          <AiFillStar className="text-secondary" />
          {props.vote_average}
        </div>
      </div>
    </div>
  );
}
