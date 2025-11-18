"use client";

import { motion } from "framer-motion";

// SVG Icon Components (can be in the same file or imported)
const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const accessPoints = [
  {
    icon: <DocumentIcon />,
    iconBgClass: "bg-blue-600",
    title: "Apply to Trade Across Africa",
    description:
      "Register your business, complete verification, and submit required documents to start trading across Africa.",
    buttonText: "Apply Now",
  },
  {
    icon: <SearchIcon />,
    iconBgClass: "from-cyan-500 to-blue-500",
    title: "Find Verified Nigerian Businesses",
    description:
      "Browse our comprehensive directory of verified Nigerian exporters and service providers ready for cross-border trade.",
    buttonText: "Browse Directory",
  },
  {
    icon: <CheckIcon />,
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
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
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {point.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 flex-grow">
                {point.description}
              </p>
              <button className="mt-8 w-full bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                {point.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccess;
