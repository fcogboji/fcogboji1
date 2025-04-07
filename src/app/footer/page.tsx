'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">ShopEase</h3>
          <p className="text-sm">
            Your one-stop shop for the best deals on electronics, fashion, and more.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping & Delivery</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns & Refunds</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/" className="hover:text-white">📘 Facebook</Link>
            <Link href="https://www.instagram.com/" className="hover:text-white">📷 Instagram</Link>
            <Link href="https://x.com/" className="hover:text-white">🐦 Twitter</Link>
            <Link href="https://www.youtube.com/" className="hover:text-white">🎥 YouTube</Link>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;