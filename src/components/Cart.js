import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    // Dispatch an action to clear the cart
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length == 0 ? <h1>Cart is Empty Add items to the card!</h1> : <button 
        onClick={handleClearCart}
        className="p-2 m-2 cursor-pointer rounded-lg bg-black text-white">
          Clear Cart
        </button>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
