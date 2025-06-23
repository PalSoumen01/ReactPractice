export const ADD_TO_WISHLIST = 'wishlist/addToWishlist';
export const REMOVE_FROM_WISHLIST = 'wishlist/removeFromWishlist';

// Action creators
export function addToWishList(id) {
    return { type: ADD_TO_WISHLIST, payload: { id: id } }
}

export function removeFromWishList(id) {
    return { type: REMOVE_FROM_WISHLIST, payload: { id: id } }
}

export default function wishListReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WISHLIST:
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
}