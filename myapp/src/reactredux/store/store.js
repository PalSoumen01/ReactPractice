import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../slices/productSlice";
import { cartSlice } from "../slices/cartSlice";
import { apiMiddleware } from "../middleware/api";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddleware),
})