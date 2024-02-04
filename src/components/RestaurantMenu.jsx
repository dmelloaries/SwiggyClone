import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const{resId}= useParams();

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  if (resInfo === null) return <Shimmer></Shimmer>;

  return (
    <div className="Menu">
      <h1>
        {
          resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[0]?.info?.name
        }
      </h1>
      <h2>
        {
          resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[0]?.info?.cuisines
        }
      </h2>
      <uL>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </uL>
    </div>
  );
};

export default RestaurantMenu;
