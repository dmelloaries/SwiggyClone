import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (<div>
    
    <div className="res-card flex-shrink-0 w-64 p-4 m-4 rounded-lg bg-white transition-transform hover:scale-105">
      <img
        className="res-logo w-full h-40 object-cover rounded-lg mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="text-lg font-semibold mb-2 truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-2 truncate">
        {cuisines.join(", ")}
      </h4>
      <h4 className="font-semibold">{avgRating} ❇️   {costForTwo}</h4>
      
    </div>
    </div>
  );
};

export default RestaurantCard;
