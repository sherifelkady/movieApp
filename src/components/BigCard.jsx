import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../store/actions/favorites";
// icons
import { AiFillStar } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Categories from "./movies/Categories";

export default function BigCard(props) {
  // ------------------------Hooks ----------------------------
  const dispatch = useDispatch();
  // ----------------------- Handlers -------------------------
  const inFavorit = useSelector((state) =>
    state.favorites.favoritList.some((item) => item.id === props.id)
  );
  console.log(props);
  const toggleItemInFavoritesList = () =>
    inFavorit
      ? dispatch(deleteFromFavorites(props.id))
      : dispatch(addToFavorites(props));
  console.log("Favorit: ", inFavorit);
  return (
    <div className="big-card w-60 ">
      <div className="group relative flex justify-end">
        <div className="opacity-0 right-10 group-hover:opacity-100 absolute  z-[999] m-2 cursor-pointer ease-in-out duration-300 group-hover:right-0">
          {inFavorit ? (
            <MdFavorite
              onClick={() => toggleItemInFavoritesList()}
              className="text-red-800"
              size={30}
            />
          ) : (
            <MdFavoriteBorder
              onClick={() => toggleItemInFavoritesList()}
              className=""
              size={30}
            />
          )}
        </div>

        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          className="rounded-md h-96 -z-30"
          alt="card"
        />
        <div className="transition ease-in-out delay-150 duration-300 ovelay opacity-0 bg-gradient-to-l from-pink-600 to-rose-700 group-hover:opacity-60 absolute top-0 z-50 w-full h-full flex justify-center items-center rounded-md">
          <Link to={`/trend/${props.id}`}>
            <AiOutlinePlayCircle size={60} className="text-white" />
          </Link>
        </div>
      </div>

      <div className="card-content flex flex-col gap-2 mt-3">
        <Link to={`/trend/${props.id}`}>
          <h3>
            {props.title.substring(0, 28)} {props.title.length > 28 && " ..."}
          </h3>
        </Link>
        <span className="card_category text-secondary">
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
