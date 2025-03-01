import { createSlice } from "@reduxjs/toolkit";

// Load cart items from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage", error);
        return [];
    }
};

// Save cart items to localStorage
const saveCartToLocalStorage = (cartItems) => {
    try {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        console.error("Error saving cart to localStorage", error);
    }
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromLocalStorage(),
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            saveCartToLocalStorage(state.items); // Save updated cart
        },
        removeItem: (state) => {
            state.items.pop();
            saveCartToLocalStorage(state.items); // Save updated cart
        },
        clearCart: (state) => {
            state.items = []; // Mutate state correctly
            saveCartToLocalStorage([]); // Save empty cart
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
