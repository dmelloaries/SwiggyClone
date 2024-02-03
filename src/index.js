import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./App.js";
import Contact from "./components/Contact";
import Body from "./components/Body.jsx";
import Error from "./components/Error";
import  Search  from "./components/Search.jsx"
import Shimmer from "./components/Shimmer.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error></Error>,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        errorElement: <Error></Error>,
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
        errorElement: <Error></Error>,
      },
      {
        path: "Search",
        element:<Search />
        ,
        errorElement: <Error></Error>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
