// // import { useEffect, useState } from "react";
// // import Shimmer from "./Shimmer";
// // import { MENU_API } from "../utils/constants";
// // import {useParams} from "react-router-dom";

// // const RestaurantMenu = () => {
// //   const [resInfo, setresInfo] = useState(null);
// //   const{resId}= useParams();

// //   useEffect(() => {
// //     fetchMenu();
// //     // eslint-disable-next-line
// //   }, []);

// //   const fetchMenu = async () => {
// //     const data = await fetch(MENU_API+resId);
// //     const json = await data.json();
// //     console.log(json);
// //     setresInfo(json.data);
// //   };
// //   // const categories = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>
// //   //     c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
// //   //   )

// //   if (resInfo === null) return <Shimmer></Shimmer>;

// //   return (
// //     <div className="Menu">
// //       <h1>
// //         {
// //           resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle
// //             ?.restaurants[0]?.info?.name
// //         }
// //       </h1>
// //       <h2>
// //         {
// //           resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle
// //             ?.restaurants[0]?.info?.cuisines
// //         }
// //       </h2>
// //       <uL>
// //         <li></li>
// //         <li>Burgers</li>
// //         <li>Diet Coke</li>
// //       </uL>
// //     </div>
// //   );
// // };

// // export default RestaurantMenu;
// import { useState } from "react";
// import React from "react";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import useRestaurantName from "../utils/useRestaurantName";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const resMenu = useRestaurantMenu(resId);
//   const resInfo = useRestaurantName(resId);
//   const [showIndex, setShowIndex] = useState(null);

//   console.log(resMenu);

//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1>{resInfo}</h1>
//       <ul>
//         {resMenu.map((item, index) => (
//           <RestaurantCategory
//             cardData={item.card.card}
//             showItems={index === showIndex ? true : false}
//             setShowItems={() => {
//               if (showIndex === null) setShowIndex(index);
//               else if (showIndex === index) setShowIndex(null);
//             }}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
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
