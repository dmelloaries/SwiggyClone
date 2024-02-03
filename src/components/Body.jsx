import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";
import MockRes from "./MockRes";
import Footer from "./Footer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus === false) {
    return <h1>"You are Offline"</h1>;
  }

  const fetchData = async () => {
    const data = await fetch(MENU_API);

    const json = await data.json();

    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const filteredRestaurant = listofRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const handleFilterByRating = () => {
    const filteredList = listofRestaurants.filter(
      (res) => res.info.avgRating > 4.0
    );
    setFilteredRestaurant(filteredList);
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div>
      <div className="bg-white mx-40">
        <div className="mt-7">
          <div className="flex justify-between items-center ">
            <div className="flex w-1/2">
              <input
                type="text"
                className="search-box px-4 py-2 w-full rounded-l-md border border-gray-300 focus:border-black"
                placeholder="Search your favorite restaurant..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="bg-gray text-black px-4 py-2 rounded-r-md border border-gray-300 hover:bg-gray-400"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-gray-600  "
              onClick={handleFilterByRating}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <br></br>

        <div className=" font-extrabold pl-4">
          <h1 className="text-lg font-bold">Top Restaurants Chains Near You</h1>
        </div>
        <div>
          <div className="res-container scroll-smooth focus:scroll-auto flex overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {filteredRestaurant?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <br className="shadow-xl"></br>
      <div class="mx-40">
        <div class="border-t-2 border-gray-300 shadow-md my-4 w-full"></div>
      </div>

      <div>
        <MockRes></MockRes>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Body;
