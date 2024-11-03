import React from "react";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  const { id, name, image, category, origin, type, popularity, rating } = coffee;
  return (
    <Link to={`/coffee/${id}`}>
      <div className="space-y-2 shadow-xl p-5 rounded">
        <img className="max-h-[250px] w-full rounded" src={image} alt="" />
        <h1 className="font-semibold text-xl">Name: {name}</h1>
        <p className="text-lg">Category: {category}</p>
        <p className="text-lg">Type: {type}</p>
        <p className="text-lg">Origin: {origin}</p>
        <p className="text-lg">Rating: {rating}</p>
        <p className="text-lg">Popular: {popularity}</p>
      </div>
    </Link>
  );
};

export default Card;
