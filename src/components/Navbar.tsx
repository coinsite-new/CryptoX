import React from 'react';
import { Bitcoin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Bitcoin className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">CryptoX</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/home', label: 'Home' },
              { path: '/features', label: 'Features' },
              { path: '/tokenomics', label: 'Tokenomics' },
              { path: '/roadmap', label: 'Roadmap' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="relative text-white hover:text-yellow-500 transition-colors"
              >
                {location.pathname === path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 h-0.5 bg-yellow-500 bottom-[-4px]"
                  />
                )}
                {label}
              </Link>
            ))}
          </div>
          <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}