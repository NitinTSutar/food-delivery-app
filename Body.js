import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=19.0836891&lng=72.84047029999999&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1"
    );

    const json = await response.json();

    if (json?.data?.cards) {
      const RestaurantCards = json.data.cards.slice(2);

      const extractedCards = RestaurantCards.map(
        (card) => card?.card?.info
      ).filter((res) => res !== undefined);

      setListOfRestaurant(extractedCards);
      console.log(extractedCards);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
