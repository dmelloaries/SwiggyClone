import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//import React from "react";
//import ReactDOM from "react-dom";
//import Body from "./components/Body";
//import Header from "./components/Header";
import AppLayout from "./App.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body.jsx";
import Error from "./components/Error";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
// );
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body></Body>,
        errorElement: <Error></Error>,
      },
      {
        path: "/about",
        element: <About></About>,
        errorElement: <Error></Error>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        errorElement: <Error></Error>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
