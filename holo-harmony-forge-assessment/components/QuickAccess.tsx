"use client";

import { motion } from "framer-motion";
import { FileCheck } from "lucide-react";
import { Search } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";

const accessPoints = [
  {
    icon: <FileCheck color="white" size={30} />,
    iconBgClass: "bg-blue-600",
    title: "Apply to Trade Across Africa",
    description:
      "Register your business, complete verification, and submit required documents to start trading across Africa.",
    buttonText: "Apply Now",
  },
  {
    icon: <Search color="white" size={30} />,
    iconBgClass: "from-cyan-500 to-blue-500",
    title: "Find Verified Nigerian Businesses",
    description:
      "Browse our comprehensive directory of verified Nigerian exporters and service providers ready for cross-border trade.",
    buttonText: "Browse Directory",
  },
  {
    icon: <CircleCheckBig color="white" size={30} />,
    iconBgClass: "from-green-400 to-yellow-500",
    title: "Check AfCFTA Compliance",
    description:
      "Access tools for Rules of Origin verification, tariff schedules, and compliance requirements for seamless trade.",
    buttonText: "Start Check",
  },
];

const QuickAccess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="quick-access" className="py-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#002E5C] sm:text-5xl">
            Quick Access
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to start trading across Africa in three simple
            steps
          </p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {accessPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${point.iconBgClass}`}
              >
                {point.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#002E5C]">
                {point.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 flex-grow">
                {point.description}
              </p>
              <Link
                href="/coming-soon"
                className="text-sm mt-8 w-full bg-[#00429E] text-white font-semibold py-1.5 pl-28 rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                {point.buttonText}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccess;
