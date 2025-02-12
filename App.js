import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/7139/7139899.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
    const{name, img, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={resData.data.img}
        alt="Restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Starting at just Rs.{costForTwo/100}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
const resList = [
  {
    data: {
      name: "Starboy Pizza & Shakes",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/30/d8fd12f3-b5aa-48e3-ab59-6c9698393eb7_279fbaee-1789-4a3d-acb6-4378413a43e4.jpg",
      cuisines: ["Pizzas", "Pastas", "Italian", "Fast Food"],
      avgRating: "4.4",
      costForTwo: 99,
      deliveryTime: "35",
    },
  },
  {
    data: {
      name: "Tossin Pizza",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/olsw0adnj6ycpgqval01",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: "4.3",
      costForTwo: 12000,
      deliveryTime: "25",
    },
  },
  {
    data: {
      name: "Quick Combos",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2e47507544e63f20a9d31f519fe7ec0e",
      cuisines: ["North Indian", "Thalis", "Indian", "Punjabi"],
      avgRating: "4.2",
      costForTwo: 9900,
      deliveryTime: "40",
    },
  },
  {
    data: {
      name: "Sbarro - New York Pizza",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/16/7e3196d9-1ebb-4700-b8cc-cda8b16c96ab_0c01eb59-b79d-4f2d-9e5f-e44610ccf579.jpg",
      cuisines: ["Pizzas", "Pastas", "Rolls & Wraps"],
      avgRating: "",
      costForTwo: 12000,
      deliveryTime: "25",
    },
  },
  {
    data: {
      name: "Winners Pizza (Fresh Dough)",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/27/c697be5e-0d0b-47fe-9d88-ae6cd74996bf_296267.jpg",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks"],
      avgRating: "3.9",
      costForTwo: 45000,
      deliveryTime: "25-30",
    },
  },
  {
    data: {
      name: "Hundo Pizza",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hj9qooifrfnwidwmkpzf",
      cuisines: ["Italian", "Pizzas", "Fast Food"],
      avgRating: "",
      costForTwo: 10000,
      deliveryTime: "25-30",
    },
  },
  {
    data: {
      name: "La Pino'z Pizza",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qt2ojkafzprlgpdl4a4y",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts"],
      avgRating: "4.3",
      costForTwo: 12000,
      deliveryTime: "35-40",
    },
  },
  {
    data: {
      name: "pizzeria",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c7fcd9e43f4b995c3cd08d7632b426f0",
      cuisines: ["pizzas"],
      avgRating: "4.4",
      costForTwo: 9900,
      deliveryTime: "20-25",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {
            resList.map(Restaurant => <RestaurantCard resData={Restaurant} />)
        }
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
