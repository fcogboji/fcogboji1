"use client"; // ✅ This tells Next.js that this is a client component (needed for useCart hook and local state)

import Link from 'next/link'; // ✅ For navigating between pages without full reloads
import Image from 'next/image'; // ✅ Optimized image component from Next.js
import { useCart } from "../context/cartcontext"; // ✅ Custom hook to access cart state and actions

const ShoppingCart = () => {
  // ✅ Destructure `cart` and `removeFromCart` from the cart context
  const { cart, removeFromCart } = useCart();

  // ✅ Calculate total price by summing up (price × quantity) for each item, fixed to 2 decimal places
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6"> {/* ✅ Centered container with padding */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1> {/* ✅ Page title */}

      {/* ✅ Show message if cart is empty */}
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        // ✅ Main cart UI if there are items
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* ✅ Loop through each cart item */}
          {cart.map((item) => (
            <div
              key={item.id} // ✅ React needs a unique key for each item
              className="flex items-center justify-between border-b py-4" // ✅ Layout each item in row
            >
              <div className="flex items-center space-x-4">
                {/* ✅ Product image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded"
                />
                {/* ✅ Product details */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-gray-500">
                    ${item.price.toFixed(2)} × {item.quantity} {/* ✅ Show unit price × quantity */}
                  </p>
                </div>
              </div>

              {/* ✅ Remove item button */}
              <button
                onClick={() => removeFromCart(item.id)} // ✅ Remove item by ID
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Total price and checkout button */}
          <div className="mt-6 text-right">
            <h3 className="mb-2 text-xl font-semibold">Total: ${totalPrice}</h3> {/* ✅ Show total price */}
            <Link
              href="/checkout" // ✅ Checkout page link
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}

      {/* ✅ Link to return to shopping */}
      <Link
        href="/" // ✅ Link back to home or shop
        className="mt-6 inline-block text-blue-600 hover:underline"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default ShoppingCart; // ✅ Export the component for use in routing
