import React from "react";
//import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";

 const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout></AppLayout>);
