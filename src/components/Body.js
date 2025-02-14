import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=19.0836891&lng=72.84047029999999&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    );

    const json = await response.json();

    if (json?.data?.cards) {
      const restaurantCards = json.data.cards.slice(2); // Start from the 3rd card

      const extractedRestaurants = restaurantCards
        .map((card) => card?.card?.card?.info)
        .filter((res) => res !== undefined); // Remove undefined values

      setListOfRestaurant(extractedRestaurants);
      setFilteredRestaurants(extractedRestaurants);
      console.log(extractedRestaurants);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search by restaurant name"
            className="search-box"
          /> 
          <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
