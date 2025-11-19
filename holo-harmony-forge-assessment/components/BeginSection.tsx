// "use client";

// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import { MoveRight } from "lucide-react";
// import Link from "next/link";

// const BeginSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   };

//   return (
//     <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-24 px-80 sm:py-32">
//       <motion.div
//         className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <motion.div
//           className="inline-flex items-center gap-x-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm"
//           variants={itemVariants}
//         >
//           <Sparkles />
//           <span>Join the Future of African Trade</span>
//         </motion.div>

//         <motion.h2
//           className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
//           variants={itemVariants}
//         >
//           Begin Your AfCFTA Digital <br /> Trade Journey Today
//         </motion.h2>

//         <motion.p
//           className="mt-6 max-w-3xl mx-auto text-lg text-blue-100"
//           variants={itemVariants}
//         >
//           Register your business and unlock new trade opportunities across the
//           African continent. Join thousands of businesses already trading
//           digitally.
//         </motion.p>

//         <motion.div
//           className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
//           variants={itemVariants}
//         >
//           <Link
//             href="/survey"
//             className="flex items-center justify-center gap-x-2 bg-white text-[#00429E] font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-[#00429E] hover:text-white transition-colors duration-300"
//           >
//             <span>Get Started Now</span>
//             <MoveRight />
//           </Link>

//           <Link
//             href="/coming-soon"
//             className="bg-[#00429E] p-2 w-48 h-12 text-white hover:text-[#00429E] rounded-lg shadow-lg hover:bg-white transition-colors duration-300 hidden sm:block"
//           >
//             <span>Schedule a Demo</span>
//           </Link>
//         </motion.div>

//         <motion.div
//           className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white"
//           variants={itemVariants}
//         >
//           <div className="flex flex-col items-center">
//             <span className="text-3xl font-bold">10,000+</span>
//             <span className="text-blue-200 mt-1">Registered Businesses</span>
//           </div>
//           <div className="flex flex-col items-center sm:border-x sm:border-white/20">
//             <span className="text-3xl font-bold">54</span>
//             <span className="text-blue-200 mt-1">African Countries</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-3xl font-bold">$2B+</span>
//             <span className="text-blue-200 mt-1">Trade Volume</span>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default BeginSection;

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-24 px-6 sm:py-32 sm:px-12 lg:px-24">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-x-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm"
          variants={itemVariants}
        >
          <Sparkles />
          <span>Join the Future of African Trade</span>
        </motion.div>

        <motion.h2
          className="mt-6 text-4xl font-extrabold text-white sm:text-5xl"
          variants={itemVariants}
        >
          Begin Your AfCFTA Digital <br className="hidden sm:block" /> Trade
          Journey Today
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
          <Link
            href="/survey"
            className="flex items-center justify-center gap-x-2 bg-white text-[#00429E] font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-[#00429E] hover:text-white transition-colors duration-300"
          >
            <span>Get Started Now</span>
            <MoveRight />
          </Link>

          <Link
            href="/coming-soon"
            className="flex items-center p-2 justify-center bg-[#00429E] w-48 h-12 text-white hover:text-[#00429E] rounded-lg shadow-lg hover:bg-white transition-colors duration-300 hidden sm:block"
          >
            <span>Schedule a Demo</span>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-10 text-white"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">10,000+</span>
            <span className="text-blue-200 mt-1">Registered Businesses</span>
          </div>
          <div className="flex flex-col px-10 items-center sm:border-x sm:border-white/20">
            <span className="text-3xl font-bold">54</span>
            <span className="text-blue-200 mt-1">African Countries</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">$2B+</span>
            <span className="text-blue-200 mt-1">Trade Volume</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BeginSection;
