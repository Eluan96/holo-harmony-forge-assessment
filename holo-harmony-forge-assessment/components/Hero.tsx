"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- Reusable Icon Components (No change here) ---
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-blue-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.88 7.88l.005.005m8.23 8.23l.005.005M12 21a9 9 0 110-18 9 9 0 010 18z"
    />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);
const StatIcon1 = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    ></path>
  </svg>
);
const StatIcon2 = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.88 7.88l.005.005m8.23 8.23l.005.005M12 21a9 9 0 110-18 9 9 0 010 18z"
    ></path>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden py-20 lg:py-28">
      {/* --- CORRECTED Animated Background Circles --- */}
      <div className="absolute inset-0 z-0">
        {/* Teal Circle (Now at the TOP) */}
        <motion.div
          animate={{ y: ["15%", "-5%", "15%"] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-[26%] left-[5%] w-14 h-14 bg-yellow-100 rounded-full filter"
        />

        {/* Yellow Circle (Remains in the MIDDLE) */}
        <motion.div
          animate={{ y: ["-15%", "15%", "-15%"] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[30%] left-[25%] w-12 h-12 bg-blue-200 rounded-full filter"
        />

        {/* Blue Circle (Now at the BOTTOM) */}
        <motion.div
          animate={{ y: ["-5%", "5%", "-5%"] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[15%] right-[5%] w-20 h-20 bg-teal-100 rounded-full filter"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content (No change here) */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
              <GlobeIcon />
              <span className="text-sm font-medium text-blue-800">
                Connecting Africa Through Trade
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              National AfCFTA
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">
                Digital Trade
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-400">
                Portal
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Connecting Nigerian businesses to Africa through seamless digital
              trade. Register, verify, and unlock new opportunities across the
              continent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-x-2 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300">
                <span>Get Started</span>
                <ArrowRightIcon />
              </button>
              <button className="bg-white text-gray-800 px-7 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors duration-300 shadow-sm">
                Learn More
              </button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <StatIcon1 />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-gray-500 text-sm">Registered Businesses</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center shadow-md">
                  <StatIcon2 />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">54</p>
                  <p className="text-gray-500 text-sm">African Countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image (No change here) */}
          <div className="mt-10 lg:mt-0">
            <div className="">
              <Image
                src="/hero-illustration-BZZrFxTM.jpg"
                alt="Digital trade connections across Africa"
                width={600}
                height={500}
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
