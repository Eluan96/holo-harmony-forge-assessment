"use client"; 

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, Variants } from "framer-motion";


const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>
);
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);


// This component contains all the previous logic
const ComingSoonClient = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "This Page";
  const pageName = page.charAt(0).toUpperCase() + page.slice(1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <main className="bg-gray-50">
      <div className="flex items-center justify-center min-h-[70vh] px-6 py-24">
        <motion.div
          className="text-center max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg"
            variants={itemVariants}
          >
            <RocketIcon />
          </motion.div>

          <motion.h1
            className="mt-8 text-4xl font-extrabold text-gray-900 sm:text-5xl"
            variants={itemVariants}
          >
            Launching Soon!
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-gray-600"
            variants={itemVariants}
          >
            We're working hard to bring you the{" "}
            <span className="font-semibold text-blue-700">{pageName}</span>{" "}
            page. Stay tuned!
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-x-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeftIcon />
              <span>Go Back Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ComingSoonClient;