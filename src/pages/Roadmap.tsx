import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Roadmap() {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Launch & Foundation",
      timeline: "Q1 2024",
      items: [
        "Token Launch on Major Exchanges",
        "Community Building and Marketing Campaign",
        "Security Audit Completion",
        "Partnership Announcements"
      ]
    },
    {
      phase: "Phase 2",
      title: "Growth & Development",
      timeline: "Q2-Q3 2024",
      items: [
        "Mobile Wallet Release",
        "Staking Platform Launch",
        "Strategic Partnerships",
        "Enhanced Security Features"
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      timeline: "Q4 2024",
      items: [
        "Cross-chain Integration",
        "NFT Marketplace Launch",
        "Governance Platform",
        "DeFi Products Suite"
      ]
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
          Our <span className="text-yellow-500">Roadmap</span>
        </motion.h1>

        <div className="space-y-16">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-start bg-gray-800/50 rounded-xl p-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="text-yellow-500 font-bold text-xl mb-2">{phase.phase}</div>
                  <div className="text-2xl font-semibold mb-2">{phase.title}</div>
                  <div className="text-gray-400">{phase.timeline}</div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <motion.ul
                    variants={containerVariants}
                    className="space-y-4"
                  >
                    {phase.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        variants={itemVariants}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Want to Join Our Journey?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}