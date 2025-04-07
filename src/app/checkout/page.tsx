'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  address: string;
  card: string;
  expiry: string;
  cvv: string;
}

const Checkout = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    card: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, like sending data to an API
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Billing Information</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700">Shipping Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="123 Main St, City, Country"
              required
            />
          </div>
          <div>
            <label htmlFor="card" className="block text-gray-700">Credit Card Number</label>
            <input
              type="text"
              id="card"
              name="card"
              value={formData.card}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div>
            <label htmlFor="expiry" className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-gray-700">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="123"
              required
            />
          </div>
          <div className="mt-6 text-right">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;