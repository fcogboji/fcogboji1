"use client"; //  Required in Next.js 13+ to use hooks like useCart on the client side


import Image from "next/image"; //  Next.js optimized image component for better performance
import { useCart } from "./context/cartcontext"; // Import custom cart hook from your context

//  Type definition for each product object
type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
};

//  Static list of products to display on the homepage
const products: Product[] = [
  {
    id: 1,
    image: "/iphone16.jpg",
    name: "iPhone 16",
    price: 119.99,
    description: "High-performance iPhone",
  },
  {
    id: 2,
    image: "/latop.png",
    name: "MacBook Pro Max",
    price: 1299.99,
    description: "High-performance laptop",
  },
  {
    id: 3,
    image: "/keypad.png",
    name: "Laptop Keypad",
    price: 399.99,
    description: "Smart keys",
  },
  {
    id: 4,
    image: "/usb-c.png",
    name: "MacBook Laptop Charger",
    price: 70,
    description: "High-performance charger",
  },
  {
    id: 5,
    image: "/airpods-pro.png",
    name: "Airpods pro",
    price: 70,
    description: "High-Quality Airpod",
  },
  {
    id: 6,
    image: "/airpods-max.jpeg",
    name: "Airpods Max",
    price: 70,
    description: "Quality sound Airpod",
  },
];

//  Main homepage component
export default function Home() {
  //  Destructure `addToCart` from cart context to add items
  const { addToCart } = useCart();

  return (
    <div>
      {/*  Responsive product grid: 1 column on small, up to 4 on XL screens */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          //  Unique key for each product, necessary for React
          <div
            key={product.id}
            className="p-5 bg-white shadow-lg rounded-2xl text-gray-800 border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            {/*  Product image container with fixed height and overflow hidden */}
            <div className="w-full h-60 overflow-hidden rounded-xl">
              {/* Optimized image with cover fit */}
              <Image
                className="object-cover w-full h-full"
                src={product.image}
                width={1000}
                height={1000}
                alt={product.name}
              />
            </div>

            {/*  Product name */}
            <div className="mt-4 font-bold text-lg text-gray-900">
              {product.name}
            </div>

            {/*  Product description */}
            <div className="mt-2 text-sm text-gray-600">
              {product.description}
            </div>

            {/*  Product price */}
            <div className="mt-3 text-xl font-semibold text-blue-600">
              ${product.price}
            </div>

            {/* Add to Cart button */}
            <button
              // When clicked, adds the product to the cart with initial quantity 1
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.image,
                })
              }
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
