"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// --- Reusable Icon Components ---
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const GlobeAltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>;
const LockClosedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const LightningBoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;


// --- Benefits Data Array ---
const benefits: {
  icon: ReactNode;
  iconBgClass: string;
  title: string;
  description: string;
}[] = [
  { icon: <TrendingUpIcon />, iconBgClass: "bg-blue-600", title: "Empower MSMEs", description: "Level the playing field for small businesses to compete in continental markets" },
  { icon: <GlobeAltIcon />, iconBgClass: "bg-gradient-to-br from-cyan-500 to-blue-500", title: "Break Trade Barriers", description: "Simplify complex cross-border processes and reduce time-to-market" },
  { icon: <LockClosedIcon />, iconBgClass: "bg-gradient-to-br from-green-400 to-yellow-500", title: "Ensure Compliance", description: "Built-in tools for AfCFTA rules of origin and regulatory requirements" },
  { icon: <LightningBoltIcon />, iconBgClass: "bg-gradient-to-br from-yellow-500 to-orange-500", title: "Drive Efficiency", description: "Automated workflows, smart matching, and digital documentation" },
];

const Benefits = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", duration: 0.5 },
        },
      };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Benefits & Impact
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transforming African trade through digital innovation
          </p>
        </div>

        <motion.div 
            className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col items-start text-left"
                variants={itemVariants}
            >
              <div className={`mb-6 p-4 rounded-2xl ${benefit.iconBgClass}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;