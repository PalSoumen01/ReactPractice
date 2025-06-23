import { combineReducers, createStore } from "redux";
import { productList } from "./productList";
import productReducer from "./reducers/productReducer";
import cartReducer, { ADD_QUANTITY, ADD_TO_CART, addQuantity, addToCart, REDUCE_QUANTITY, reduceQuantity, REMOVE_FROM_CART, removeFromCart } from "./reducers/cartReducer";
import wishListReducer, { ADD_TO_WISHLIST, addToWishList, REMOVE_FROM_WISHLIST, removeFromWishList } from "./reducers/wishlistReducer";

const initialState = {
    products: productList,
    cart: [],
    wishList: [],
};

// const ADD_TO_CART = 'cart/addToCart';
// const REMOVE_FROM_CART = 'cart/removeFromCart';
// const ADD_QUANTITY = 'cart/addQuantity';
// const REDUCE_QUANTITY = 'cart/reduceQuantity';
// const ADD_TO_WISHLIST = 'wishlist/addToWishlist';
// const REMOVE_FROM_WISHLIST = 'wishlist/removeFromWishlist';


// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return { ...state, cart: [...state.cart, action.payload] }
//         case REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 cart: [...state.cart.filter((item) => item.id !== action.payload.id)]
//             }
//         case ADD_QUANTITY:
//             return {
//                 ...state,
//                 cart: state.cart.map((item) => {
//                     if (item.id === action.payload.id) {
//                         return { ...item, quantity: item.quantity + action.payload.quantity }
//                     }
//                     return item;
//                 })
//             }
//         case REDUCE_QUANTITY:
//             return {
//                 ...state,
//                 cart: state.cart.map((item) => {
//                     if (item.id === action.payload.id) {
//                         return { ...item, quantity: item.quantity - action.payload.quantity }
//                     }
//                     return item;
//                 })
//             }
//         case ADD_TO_WISHLIST:
//             return { ...state, wishList: [...state.wishList, action.payload] }
//         case REMOVE_FROM_WISHLIST:
//             return {
//                 ...state,
//                 wishList: [...state.wishList.filter((item) => item.id !== action.payload.id)]
//             }
//         default:
//             return { ...state }
//     }
// }

const reducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.subscribe(() => {
    console.log("State changed:", store.getState());
});

const response = addQuantity(2, 5);
console.log("Action response:", response);

store.dispatch({ type: 'NOTHING' })
store.dispatch(addToCart(1));
store.dispatch(addToCart(2));
store.dispatch(addToCart(3));
store.dispatch(removeFromCart(3));
store.dispatch(addQuantity(1, 5));
store.dispatch(addQuantity(2, 5));
store.dispatch(reduceQuantity(1, 1));
store.dispatch(addToWishList(4));
store.dispatch(addToWishList(8));
store.dispatch(removeFromWishList(4));
