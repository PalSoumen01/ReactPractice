import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            if (!state.cartItems.includes(action.payload)) {
                state.cartItems.push(action.payload);
            }
        },
    }
});

export default cartSlice.reducer;
export const { setCartItems } = cartSlice.actions;