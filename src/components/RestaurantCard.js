const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={`https://res.cloudinary.com/swigee/image/upload/${cloudinaryImageId}`}
        alt="Restaurant-logo"
        style={{ height: 150, width: 200, objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
