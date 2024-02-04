// import ItemList from "./ItemList";
// const RestaurantCategory=({data,showItems,setShowIndexFxn})=>{

//     const HandleClick=()=>{
//        setShowIndexFxn();
//     }
//     return<div className="my-6 mx-auto bg-gray-100 shadow-lg p-4 w-6/12 ">
//         <div className=" flex justify-between cursor-pointer hover:scale-105 duration-300"
//         onClick={HandleClick}
//         >
//         <span className="font-semibold text-lg">{data?.title} ({data?.itemCards.length})</span>
//         <span>▼</span>
//         </div>
//         <div>
//         {showItems&&<ItemList items={data.itemCards} addButton={true}/>}
//         </div>
//     </div>

// }
// export default RestaurantCategory;

import React from "react";
//import ItemList from "./ItemsList.jsx";

const RestaurantCategory = (props) => {
  const handleClick = () => {
    props.setShowItems();
  };
  return (
    <div className="mx-auto my-6 bg-gray-50 shadow-lg p-4 flex justify-between flex-col w-[800px]">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-semibold text-lg">{props.cardData.title}</h1>
        <p className="">˅</p>
      </div>
      {/* {props.showItems && <ItemsList itemData={props.cardData.itemCards}/>} */}
      {/* <ItemList items={props.cardData}></ItemList> */}
    </div>
  );
};

export default RestaurantCategory;
