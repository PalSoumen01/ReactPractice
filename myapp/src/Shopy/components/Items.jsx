import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../reactredux/slices/cartSlice";

function Items() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  function handleAddToCart(productId) {
    console.log("Adding product with ID:", productId);
    dispatch(setCartItems(productId));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md flex flex-col items-center p-4 hover:shadow-xl transition-shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-2 text-center">
            {product.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2 text-center line-clamp-2">
            {product.description}
          </p>
          <p className="text-blue-600 font-bold mb-4">
            Price: ${product.price}
          </p>
          <button
            onClick={() => handleAddToCart(product.id)}
            className="cursor-pointer mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Items;
