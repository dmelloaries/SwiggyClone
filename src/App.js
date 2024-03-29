import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
//import resList from "./utils/MockData";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
