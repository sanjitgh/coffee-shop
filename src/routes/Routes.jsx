import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";
import CoffeeDetails from "../pages/CoffeeDetails";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children:[
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch('../coffees.json'),
          },
          {
            path: "/category/:category",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch('../coffees.json'),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch('../coffees.json'),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch('../coffees.json'),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
