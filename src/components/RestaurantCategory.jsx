

import React from "react";
import ItemList from "./ItemList.jsx";



const RestaurantCategory = (props) => {

  return (
    <>
    <div className="">
      {/* <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      > */}
        <h1 className="font-extrabold p-2 m-2 border-gray-400 border-b-2 mx-80">{props?.cardData?.title}</h1>
        {/* <p className="font-extrabold p-2 m-2 border-gray-400 border-b-2 mx-80">˅</p> */}
      </div>
      

      
      <ItemList itemData={props.cardData.itemCards}></ItemList> 
      </>
    
  );
};

export default RestaurantCategory;
