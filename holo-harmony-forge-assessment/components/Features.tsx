"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { Shield } from "lucide-react";
import { FileText } from "lucide-react";
import { Upload } from "lucide-react";
import { Box } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Users } from "lucide-react";
import { BookOpen } from "lucide-react";
import { ChartColumn } from "lucide-react";
import Link from "next/link";

const features: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <Shield color="#002E5C" />,
    title: "Digital Identity Verification",
    description:
      "Secure and instant verification of business credentials and ownership",
  },
  {
    icon: <FileText color="#002E5C" />,
    title: "Trade Readiness Test",
    description: "Assess your business readiness for cross-border trade",
  },
  {
    icon: <Upload color="#002E5C" />,
    title: "Document & e-Certification",
    description: "Upload and manage all trade documents in one secure place",
  },
  {
    icon: <Box color="#002E5C" />,
    title: "Product & Service Catalog",
    description: "Showcase your offerings to potential buyers across Africa",
  },
  {
    icon: <CreditCard />,
    title: "Payment & Escrow",
    description:
      "Secure payment processing and escrow services for safe transactions",
  },
  {
    icon: <Users color="#002E5C" />,
    title: "Smart Matchmaking",
    description:
      "AI-powered matching with relevant trade partners and opportunities",
  },
  {
    icon: <BookOpen color="#002E5C" />,
    title: "Knowledge Hub",
    description:
      "Access trade guides, regulations, and expert support via chatbot",
  },
  {
    icon: <ChartColumn color="#002E5C" />,
    title: "Government Dashboard",
    description: "Real-time analytics and monitoring for policy makers",
  },
];

const Features = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="platform-features" className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#002E5C] sm:text-5xl">
            Platform Features
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Everything you need for successful cross-border trade in one
            comprehensive platform
          </p>
        </div>
        <Link href="/coming-soon">
        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="mb-6 text-[#002E5C]">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#002E5C]">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-600 text-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Features;
