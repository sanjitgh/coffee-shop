import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button onClick={()=> navigate('./coffees')} className="btn bg-yellow-600 text-white">View All</button>
    </>
  );
};

export default CoffeeCard;
