import { setProducts } from "../slices/productSlice";

export const apiMiddleware = (store) => (next) => (action) => {
    if (action.type === 'api/fetchData') {
        next(action);
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                store.dispatch(setProducts(data));
            })
            .catch((error) => console.error("Error fetching products", error));
    } else {
        next(action);
    }
}