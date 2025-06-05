import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState([]);


  const a =11; 

  const [searchText, setSearchText] = useState("");

  

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0683073&lng=72.84490140000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const [filterStatus, setFilterStatus] = useState(true);

  if (onlineStatus === false)
    return (
      <h1>
        looks like you're offline!! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return !searchRestaurants || searchRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center h-20">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search border-1 border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-1 cursor-pointer bg-green-100 hover:bg-green-200 m-4 rounded-lg"
            onClick={() => {
              // Filter the restaurants cards and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-5 py-1 cursor-pointer bg-green-100  rounded-lg hover:bg-green-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                filterStatus
                  ? (res) => res.info.avgRating > 4.5
                  : (res) => res.info.avgRating > 0
              );
              filterStatus ? setFilterStatus(false) : setFilterStatus(true);
              console.log(filterStatus);
              setSearchRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {searchRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info?.id}
            to={"/restaurants/" + restaurant.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
