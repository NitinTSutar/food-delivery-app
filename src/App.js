import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { HashRouter as Router, Routes, Route } from "react-router";
import { Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Nitin Sutar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet /> {/* This renders child routes dynamically */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<Shimmer />}>
              <About />
            </Suspense>
          }
        />

        <Route path="restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </Router>
);
