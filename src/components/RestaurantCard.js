import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[240px] rounded-xl bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant-logo"
        style={{ height: 150, width: 200, objectFit: "cover" }}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

// Higher order Component

// export const withPromotedLabel = (RestaurantCard) => {
//   return () => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard />
//       </div>
//     )
//   }
// }

export default RestaurantCard;
