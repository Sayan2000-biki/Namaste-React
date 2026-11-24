import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutClass from "./components/AboutClass";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurantMenu";
// import Grocery from "./components/grocery";

const Grocery = lazy(() => import("./components/grocery"))
const Contact = lazy(() => import("./components/Contact"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
     
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Grocery />
      },
      {
        path:"restaurants/:resId",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />
    
  },

 

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
