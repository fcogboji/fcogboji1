'use client'; //  This marks the component as client-side only (needed for hooks like useState and useCart)

import React, { useState } from 'react'; //  React imports useState to handle menu toggle
import { Menu, X, ShoppingCart } from 'lucide-react'; //  Import icons for the menu and cart
import Link from 'next/link'; //  Next.js component for client-side navigation
import { useCart } from '../context/cartcontext'; //  Import the cart context hook (make sure path is correct)

const Navbar = () => {
  //  State to control whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  //  Destructure the cart from the context
  const { cart } = useCart();

  //  Calculate the total number of items in the cart
  // `reduce` sums all quantities in the cart array
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    //  Sticky header that stays at the top on scroll, with shadow
    <header className="sticky top-0 z-50 bg-white shadow-lg shadow-gray-300/50">
      {/*  Container for navbar content */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/*  Site logo/name linking to home */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ShopEase
        </Link>
        
        {/*  Desktop navigation links (hidden on small screens) */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/shop" className="hover:text-gray-900">Shop</Link>
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </nav>
        
        {/*  Cart icon and mobile menu toggle */}
        <div className="flex items-center space-x-4">
          {/*  Shopping cart link with item count badge */}
          <Link href="/shoppingcart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-900" />
            
            {/*  Red badge showing number of items in the cart */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount} {/*  This dynamically shows total quantity */}
            </span>
          </Link>

          {/*  Toggle button for mobile menu (hamburger or X icon) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)} //  Toggle menu open/close
            aria-label="Toggle Menu" //  Improves accessibility
          >
            {isOpen
              ? <X className="w-6 h-6 text-gray-700" /> //  Show X when menu is open
              : (
                <>
                  <Menu className="w-6 h-6 text-gray-700" />
                  {/* Show hamburger icon when menu is closed */}
                </>
              )}

          </button>
        </div>
      </div>

      {/*  Mobile navigation menu (only shows when isOpen is true) */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md shadow-gray-400/30 py-4 px-6 space-y-4">
          <Link href="/" className="block text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/shop" className="block text-gray-700 hover:text-gray-900">Shop</Link>
          <Link href="/about" className="block text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
