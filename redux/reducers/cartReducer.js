// Action Types
export const ADD_TO_CART = 'cart/addToCart';
export const REMOVE_FROM_CART = 'cart/removeFromCart';
export const ADD_QUANTITY = 'cart/addQuantity';
export const REDUCE_QUANTITY = 'cart/reduceQuantity';

// Action creators
export function addToCart(id, quantity = 1) {
    return { type: ADD_TO_CART, payload: { id: id, quantity: quantity } }
}

export function removeFromCart(id) {
    return { type: REMOVE_FROM_CART, payload: { id: id } }
}

export function addQuantity(id, quantity) {
    return { type: ADD_QUANTITY, payload: { id: id, quantity: quantity } }
}

export function reduceQuantity(id, quantity) {
    return { type: REDUCE_QUANTITY, payload: { id: id, quantity: quantity } };
}

// Reducer
export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id);
        case ADD_QUANTITY:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + action.payload.quantity };
                }
                return item;
            });
        case REDUCE_QUANTITY:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - action.payload.quantity };
                }
                return item;
            });
        default:
            return state;
    }
}