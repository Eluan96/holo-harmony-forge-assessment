"use client";

import { motion } from "framer-motion";

// --- Reusable Icon Components ---
const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6.2 6.2l1.4 1.4M18 3v4M21 5h-4M17.8 6.2l-1.4 1.4M12 21v-4M4.2 19.8l1.4-1.4M18.4 19.8l-1.4-1.4M21 12h-4M5 12H1M12 17a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


const BeginSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100 },
        },
      };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-24 sm:py-32">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div 
            className="inline-flex items-center gap-x-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm"
            variants={itemVariants}
        >
          <SparkleIcon />
          <span>Join the Future of African Trade</span>
        </motion.div>

        <motion.h2 
            className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
            variants={itemVariants}
        >
          Begin Your AfCFTA Digital <br /> Trade Journey Today
        </motion.h2>

        <motion.p 
            className="mt-6 max-w-3xl mx-auto text-lg text-blue-100"
            variants={itemVariants}
        >
          Register your business and unlock new trade opportunities across the
          African continent. Join thousands of businesses already trading
          digitally.
        </motion.p>

        <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={itemVariants}
        >
          <button className="flex items-center justify-center gap-x-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
            <span>Get Started Now</span>
            <ArrowRightIcon />
          </button>
          {/* This button is styled as a blank white box to match the design */}
          <button className="bg-white/90 w-48 h-12 rounded-lg shadow-lg hover:bg-white transition-colors duration-300 hidden sm:block">
          </button>
        </motion.div>

        <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white"
            variants={itemVariants}
        >
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">10,000+</span>
                <span className="text-blue-200 mt-1">Registered Businesses</span>
            </div>
            <div className="flex flex-col items-center sm:border-x sm:border-white/20">
                <span className="text-4xl font-bold">54</span>
                <span className="text-blue-200 mt-1">African Countries</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">$2B+</span>
                <span className="text-blue-200 mt-1">Trade Volume</span>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BeginSection;