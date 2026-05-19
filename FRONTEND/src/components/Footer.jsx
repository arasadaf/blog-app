import React from 'react';
import { NavLink } from 'react-router';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-6 pb-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black">B</div>
              <span className="text-xl font-black text-gray-900">BlogApp</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering voices through elegant storytelling. Join our community of creators and readers today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><NavLink to="/" className="hover:text-indigo-600 transition">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-indigo-600 transition">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-indigo-600 transition">Contact Us</NavLink></li>
              <li><NavLink to="/register" className="hover:text-indigo-600 transition">Join Community</NavLink></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Categories</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600 transition">Technology</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Design</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Programming</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Stay Inspired</h3>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-3 rounded-lg text-xs font-bold hover:bg-indigo-700 transition">
                  Join
                </button>
              </div>
              <p className="text-[11px] text-gray-400">Monthly digest of our best stories. No spam.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BlogApp. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-gray-600 transition text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;