import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiMiddleware } from "../../reactredux/middleware/api";

// Example: hardcoded cart count. Replace with your cart state if available.
const cartCount = 3;

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "api/fetchData" });
  }, []);

  const { cartItems } = useSelector((state) => state.cart);

  console.log("cartItems : " + cartItems);

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow sticky top-0 z-50">
      <button className="relative cursor-pointer">
        {/* Cart Icon (Heroicons outline) */}
        <svg
          className="w-8 h-8 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h7a1 1 0 011 1v7"
          />
        </svg>
        {/* Cart count badge */}
        <span className="cursor-pointer absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {cartItems.length || cartCount}
        </span>
      </button>
    </div>
  );
}

export default Header;
