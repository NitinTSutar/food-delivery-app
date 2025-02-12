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
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="restaurant-container">
                // restaurantCard
            </div>
        </div>
    )
}

const AppLayout = () => <div className="app">
    <Header />
    <Body />
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
