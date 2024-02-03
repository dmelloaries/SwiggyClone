import MockData from "../utils/MockData";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const MockRes = () => {
  const [data] = useState(MockData); // Assuming MockData is an array of restaurant objects

  return (
    <div className="m-4">
        <br className="shadow-2xl"></br>
        <div>
            <h1>Restaurants with online food delivery</h1>
        </div>
    <div className="flex flex-wrap">
      {data.map((restaurant) => (
        <div
          key={restaurant.data.uuid} // Assuming uuid is a unique identifier for each restaurant
          className="res-card flex-shrink-0 w-64 p-4 m-4 rounded-lg bg-white transition-transform hover:scale-105"
        >
          <img
            className="res-logo w-full h-40 object-cover rounded-lg mb-4"
            alt="res-logo"
            src={CDN_URL+restaurant.data.cloudinaryImageId}
          />

          <h3 className="text-lg font-semibold mb-2 truncate">
            {restaurant.data.name}
          </h3>
          <h4 className="text-sm text-gray-600 mb-2 truncate">
            {restaurant.data.cuisines.join(", ")}
          </h4>
          <h4>{restaurant.data.avgRating} ❇️</h4>
          <h4>{`₹${restaurant.data.costForTwo/100} FOR TWO`}</h4>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MockRes;
