import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const isItemInCart = (item) => {
    return cartItems.some(cartItem => cartItem.card.info.id === item.card.info.id);
  };

  return (
    <div className="basis-80">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4">
            {isItemInCart(item) ? (
              <div className="relative">
                <button
                  className="p-1 mx-2 rounded-lg top-25 absolute bg-black text-white shadow-lg cursor-pointer"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove from Cart
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  className="p-1 mx-2 rounded-lg top-25 absolute bg-black text-white shadow-lg cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  Add to Cart
                </button>
              </div>
            )}
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-30"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;