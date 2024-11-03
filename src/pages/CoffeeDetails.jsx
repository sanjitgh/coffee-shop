import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutriationImg from "../assets/nutrition.png";
import { addFavourite, getAllFavourite } from "../../public/utilities";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id === parseInt(id));
    setCoffee(singleData);
    const favourites = getAllFavourite();
    const isExist = favourites.find(item => item.id == singleData.id);
    if(isExist){
      setIsFavourite(true)
    }
  }, [data, id]);
  const {
    description,
    image,     
    origin,
    popularity,
    rating,
    making_process,
    ingredients,
    nutrition_info,
  } = coffee;

  const handelFavourite = (coffee) => {
    addFavourite(coffee);
    setIsFavourite(true)
  };

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
          <button
            disabled={isFavourite}
            onClick={() => handelFavourite(coffee)}
            className="btn bg-warning"
          >
            Add Favourite
          </button>
        </div>
      </div>
      <p className="text-lg my-2 mt-5 font-medium">
        <span className="text-lg">Making Process:</span> <br />
        {making_process}
      </p>
      <div className="flex items-center">
        <div className="flex-1">
          <h1 className="font-semibold text-xl mb-2 mt-4">Ingredients:</h1>
          <ul>
            {ingredients &&
              ingredients.map((item, i) => (
                <li className="list-disc ml-4" key={i}>
                  {item}
                </li>
              ))}
          </ul>

          <h1 className="font-semibold text-xl mb-2 mt-4">Nutrition:</h1>
          <ul>
            {nutrition_info &&
              Object.keys(nutrition_info).map((n, i) => (
                <li className="list-disc ml-4" key={i}>
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
