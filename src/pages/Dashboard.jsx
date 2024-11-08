import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavourite, removeFavourite } from "../../public/utilities";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favourite = getAllFavourite();
    setCoffees(favourite);
  }, []);

  const handelRemove = id =>{
    removeFavourite(id);
    const favourite = getAllFavourite();
    setCoffees(favourite);
  }
  return (
    <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffees that you have previously added as favorite. You can view or remove them from here."
        }
      ></Heading>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {coffees.map((coffee) => (
          <Card handelRemove={handelRemove} key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
