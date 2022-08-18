import React from "react";
import BigCard from "../components/BigCard";
import { useSelector } from "react-redux";

export default function Favorites() {
  // ------------------ Hooks -------------------
  const favorites = useSelector((state) => state.favorites.favoritList);
  return (
    <section
      id="favorites-lis"
      className="flex gap-3 my-10 pt-36 px-52 text-white flex-wrap"
    >
      {favorites.map((item) => (
        <BigCard {...item} />
      ))}
    </section>
  );
}
