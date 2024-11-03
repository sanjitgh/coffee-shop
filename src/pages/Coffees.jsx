import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handelSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted)
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-3xl">
            Sort Coffee's by Popularity & Rating
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handelSort("popularity")}
            className="btn bg-warning"
          >
            SortByPopularity
          </button>
          <button
            onClick={() => handelSort("rating")}
            className="btn bg-warning"
          >
            SortByRating
          </button>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
