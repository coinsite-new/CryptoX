import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';
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

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-16 h-16 text-yellow-500" />,
      title: "Secure & Private",
      description: "Advanced encryption and privacy features to protect your assets. Our security protocols are regularly audited by top firms in the industry to ensure maximum protection of your investments."
    },
    {
      icon: <Zap className="w-16 h-16 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Experience instant transactions with minimal fees. Our advanced blockchain technology ensures quick confirmations while maintaining decentralization and security."
    },
    {
      icon: <Users className="w-16 h-16 text-yellow-500" />,
      title: "Community Driven",
      description: "Join a thriving community of crypto enthusiasts. Participate in governance decisions and help shape the future of CryptoX through our democratic voting system."
    }
  ];

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
          Why Choose <span className="text-yellow-500">CryptoX</span>?
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            Join CryptoX Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}