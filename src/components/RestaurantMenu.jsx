
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantName from "../utils/useRestaurantName";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "../pages/Shimmer";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const resInfo = useRestaurantName(resId);
  const [showIndex, setShowIndex] = useState(null);

 

  return (
    <div className="flex justify-center items-center mt-4 font-bold text-2xl flex-col">
      {!resInfo ? <Shimmer /> : null}
      
      <h1>{resInfo}</h1>
      <ul>
        {resMenu.map((item, index) => (
          <RestaurantCategory
            key={index} // Add a unique key to each item in the array
            cardData={item.card.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() => {
              if (showIndex === null) setShowIndex(index);
              else if (showIndex === index) setShowIndex(null);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
