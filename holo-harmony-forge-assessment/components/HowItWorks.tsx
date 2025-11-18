"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { UserPlus } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Target } from "lucide-react";
import { Rocket } from "lucide-react";

const steps: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <UserPlus size={40} />,
    title: "Sign Up",
    description: "Create your business account with basic information",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Complete Verification",
    description: "Submit documents and complete identity verification",
  },
  {
    icon: <Target size={40} />,
    title: "Select Categories",
    description: "Choose your trade categories and target countries",
  },
  {
    icon: <Rocket size={40} />,
    title: "Start Trading",
    description: "Get matched with opportunities and start trading",
  },
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
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#002E5C] sm:text-5xl">
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
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-15 left-[12.5%] w-[75%] h-0.5 bg-gradient-to-r from-[#002E5C] to-blue-500"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <div className="relative z-10">
                  <div className="w-30 h-30 p-1.5 rounded-full bg-gradient-to-r from-[#002E5C] to-blue-500">
                    <div className="bg-white text-[#002E5C] w-full h-full rounded-full flex items-center justify-center relative">
                      {step.icon}
                      <div className="absolute -top-1 -right-1 bg-[#002E5C] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#002E5C]">
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
