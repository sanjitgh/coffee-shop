import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categorys from "../components/Categorys";

const Home = () => {
    const categories = useLoaderData();
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      {/* tabs */}
      <Categorys categories={categories}></Categorys>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
