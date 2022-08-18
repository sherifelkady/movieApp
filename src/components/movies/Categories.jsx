import React from "react";
import { useSelector } from "react-redux";

export default function MovieCategories(props) {
  const categories = useSelector((state) => state.categories.moviesCategories);
  return (
    <>
      {categories
        .filter((cat) => props.ids.includes(cat.id))
        .slice(0, 2)
        .map((cat) => cat.name)
        .join(", ")}
    </>
  );
}
