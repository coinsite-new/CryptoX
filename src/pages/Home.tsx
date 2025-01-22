import React from 'react';
import { Bitcoin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 pt-32 pb-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              The Future of <span className="text-yellow-500">Digital Currency</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join the revolution of decentralized finance with CryptoX. Secure, fast, and built for the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-colors"
              >
                Whitepaper
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600"
              alt="Cryptocurrency illustration"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Quick Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="py-20 bg-gray-800/50"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Features", path: "/features", description: "Discover what makes CryptoX unique" },
              { title: "Tokenomics", path: "/tokenomics", description: "Understand our token distribution" },
              { title: "Roadmap", path: "/roadmap", description: "See our vision for the future" }
            ].map((item, index) => (
              <Link key={index} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Bitcoin className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold">CryptoX</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2024 CryptoX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}