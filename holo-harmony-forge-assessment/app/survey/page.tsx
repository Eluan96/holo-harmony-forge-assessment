"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, HelpCircle, CheckCircle } from "lucide-react";

// --- Main Component ---
const SurveyIntroPage = () => {
  return (
    <main className="bg-[#F4F8FF] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {/* --- 1. Header Section --- */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            <Globe size={16} />
            <span>African Digital Trade Portal</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            AfCFTA Readiness Survey
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Before you register, please complete this 12-question readiness
            assessment. It helps us determine if your business is fully prepared
            to participate in AfCFTA trade.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 bg-yellow-100/80 border border-yellow-300 p-4 rounded-xl">
            <div className="bg-yellow-400 p-2 rounded-full">
              <CheckCircle size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-yellow-800">Required Score</p>
              <p className="text-lg font-bold text-yellow-900">100%</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/survey/questions"
              className="inline-flex items-center justify-center gap-x-2 bg-[#00429E] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
            >
              <span>Begin Assessment</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.section>

        {/* --- 2. Features Section --- */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <FeatureCard
            icon={<Globe size={24} className="text-blue-600" />}
            title="Continental Trade Access"
            description="Join the largest free trade area in the world and access markets across 54 African countries."
          />
          <FeatureCard
            icon={<TrendingUp size={24} className="text-green-600" />}
            title="Business Growth"
            description="Expand your business reach, increase revenue streams, and build international partnerships."
          />
          <FeatureCard
            icon={<HelpCircle size={24} className="text-yellow-600" />}
            title="Compliance Support"
            description="Get comprehensive guidance on meeting all regulatory requirements for cross-border trade."
          />
        </motion.section>

        {/* --- 3. How It Works Section --- */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-2 text-gray-600">Three simple steps to get started</p>
          </div>
          <div className="mt-12 space-y-4 max-w-2xl mx-auto">
            <HowItWorksStep
              step="1"
              title="Complete the Assessment"
              description="Answer 12 questions about your business readiness for AfCFTA trade. Each question takes only seconds to answer."
            />
            <HowItWorksStep
              step="2"
              title="Review Your Results"
              description="Get instant feedback on your readiness score. If you score 100%, proceed directly to registration."
            />
            <HowItWorksStep
              step="3"
              title="Get Guidance or Register"
              description="If requirements are missing, receive detailed steps to complete them. Once ready, register and start trading."
            />
          </div>
        </motion.section>

        {/* --- 4. Final CTA --- */}
        <section className="text-center">
            <Link
              href="/survey/questions"
              className="inline-flex items-center justify-center gap-x-2 bg-[#00429E] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
            >
              <span>Start Your Assessment Now</span>
              <ArrowRight size={20} />
            </Link>
        </section>
      </div>
    </main>
  );
};

// --- Reusable Sub-components for this page ---
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <motion.div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200" variants={cardVariants}>
        <div className="mb-4">{icon}</div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
    </motion.div>
);

const HowItWorksStep = ({ step, title, description }: { step: string; title: string; description: string; }) => (
    <motion.div className="bg-white p-5 flex items-start gap-5 rounded-lg shadow-sm border border-gray-200" variants={cardVariants}>
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-teal-600 text-white font-bold rounded-full">
            {step}
        </div>
        <div>
            <h3 className="font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
    </motion.div>
);


export default SurveyIntroPage;