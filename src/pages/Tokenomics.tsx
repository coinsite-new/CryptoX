import React from 'react';
import { TrendingUp, Globe2, PieChart, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-yellow-500">Tokenomics</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="bg-gray-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-yellow-500 mr-2" />
              Token Distribution
            </h3>
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <PieChart className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Public Sale</span>
                </div>
                <span className="text-yellow-500">40%</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <PieChart className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Team & Advisors</span>
                </div>
                <span className="text-yellow-500">20%</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <PieChart className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Development</span>
                </div>
                <span className="text-yellow-500">25%</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <PieChart className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Marketing</span>
                </div>
                <span className="text-yellow-500">15%</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Globe2 className="w-6 h-6 text-yellow-500 mr-2" />
              Token Details
            </h3>
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <Coins className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Total Supply</span>
                </div>
                <span className="text-yellow-500">1,000,000,000</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <Coins className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Initial Price</span>
                </div>
                <span className="text-yellow-500">$0.01</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <Coins className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Vesting Period</span>
                </div>
                <span className="text-yellow-500">12 months</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Invest?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            Buy Tokens Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}