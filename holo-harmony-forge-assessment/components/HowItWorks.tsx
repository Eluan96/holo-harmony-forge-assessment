"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// SVG Icon Components (no changes here, they are the same as before)
const SignUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const VerificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083A12.02 12.02 0 0018.618 7.984z" /></svg>
);
const CategoriesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.88 7.88l.005.005m8.23 8.23l.005.005M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>
);
const StartTradingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
);

const steps: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  { icon: <SignUpIcon />, title: "Sign Up", description: "Create your business account with basic information" },
  { icon: <VerificationIcon />, title: "Complete Verification", description: "Submit documents and complete identity verification" },
  { icon: <CategoriesIcon />, title: "Select Categories", description: "Choose your trade categories and target countries" },
  { icon: <StartTradingIcon />, title: "Start Trading", description: "Get matched with opportunities and start trading" },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get started in four simple steps
          </p>
        </div>

        <motion.div
          className="relative mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* CORRECTED Connecting line for desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-[12.5%] w-[75%] h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
          />
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <div className="relative z-10">
                  <div className="w-24 h-24 p-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500">
                    <div className="bg-white w-full h-full rounded-full flex items-center justify-center relative">
                      {step.icon}
                      <div className="absolute -top-1 -right-1 bg-blue-800 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
