import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ coffee, handelRemove }) => {
  const { pathname } = useLocation();
  const { id, name, image, category, origin, type, popularity, rating } =
    coffee;
  return (
    <>
      <div className="relative">
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
        {pathname === "/dashboard" && (
          <div
            onClick={() => handelRemove(id)}
            className="absolute cursor-pointer text-2xl -top-5 -right-5 hover:text-red-500"
          >
            <MdDeleteForever />
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
