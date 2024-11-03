import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutriationImg from "../assets/nutrition.png";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id === parseInt(id));
    setCoffee(singleData);
  }, [data, id]);
  const {
    name,
    description,
    image,
    category,
    origin,
    popularity,
    rating,
    making_process,
    ingredients,
    nutrition_info,
  } = coffee;

  return (
    <div>
      <h1 className="font-semibold text-4xl mb-5">{description}</h1>
      <img className="w-full" src={image} alt="" />
      <h1 className="font-normal text-4xl my-3">{origin}</h1>
      <div className="flex justify-between">
        <div>
        <p className="text-lg">Popularity: {popularity}</p>
        <p className="text-lg">Rating: {rating}</p>
        </div>
        <div>
            <button className="btn bg-warning">Add Favourite</button>
        </div>
      </div>
      <p className="text-lg my-2 mt-5 font-medium">
        <span text-lg>Making Process:</span> <br />
        {making_process}
      </p>
      <div className="flex items-center">
        <div className="flex-1">
          <h1 className="font-semibold text-xl mb-2 mt-4">Ingredients:</h1>
          <ul>
            {ingredients &&
              ingredients.map((i) => (
                <li className="list-disc ml-4" key={i}>
                  {i}
                </li>
              ))}
          </ul>

          <h1 className="font-semibold text-xl mb-2 mt-4">Nutrition:</h1>
          <ul>
            {nutrition_info &&
              Object.keys(nutrition_info).map((n) => (
                <li className="list-disc ml-4" key={nutrition_info[n]}>
                  {n} : {nutrition_info[n]}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-1">
          <img src={nutriationImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
