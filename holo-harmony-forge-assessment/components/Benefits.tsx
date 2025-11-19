"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TrendingUp } from "lucide-react";
import { Earth } from "lucide-react";
import { Lock } from "lucide-react";
import { Zap } from "lucide-react";
import Link from "next/link";

const benefits: {
  icon: ReactNode;
  iconBgClass: string;
  title: string;
  description: string;
}[] = [
  {
    icon: <TrendingUp color="white" size={30} />,
    iconBgClass: "bg-blue-600",
    title: "Empower MSMEs",
    description:
      "Level the playing field for small businesses to compete in continental markets",
  },
  {
    icon: <Earth color="white" size={30}/>,
    iconBgClass: "bg-gradient-to-br from-cyan-500 to-blue-500",
    title: "Break Trade Barriers",
    description:
      "Simplify complex cross-border processes and reduce time-to-market",
  },
  {
    icon: <Lock color="white" size={30}/>,
    iconBgClass: "bg-gradient-to-br from-green-400 to-yellow-500",
    title: "Ensure Compliance",
    description:
      "Built-in tools for AfCFTA rules of origin and regulatory requirements",
  },
  {
    icon: <Zap color="white" size={30}/>,
    iconBgClass: "bg-gradient-to-br from-yellow-500 to-orange-500",
    title: "Drive Efficiency",
    description:
      "Automated workflows, smart matching, and digital documentation",
  },
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
    <section id="benefits" className="bg-white py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#002E5C] sm:text-5xl">
            Benefits & Impact
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transforming African trade through digital innovation
          </p>
        </div>
        <Link href="/coming-soon">
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
              <h3 className="text-xl font-bold text-[#002E5C]">
                {benefit.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Benefits;
