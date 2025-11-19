"use client";

import Link from "next/link";
import { motion,Variants } from "framer-motion";
import { Globe, TrendingUp, Users, CheckCircle } from "lucide-react";


const SignUpHomePage = () => {
  return (
    <main className="bg-gradient-to-b from-white via-[#F4F9FF] to-[#E9F5F3]">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28 space-y-24 sm:space-y-32">
        
       
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
            <span>AfCFTA Digital Trade Platform</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-[#002E5C]">
            Join Africa's Digital Trade <br/> Revolution
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Connect with 54 African countries, access trade opportunities, and grow 
            your business across the continent through the National AfCFTA Digital 
            Trade Platform.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-4">
            <Link href="/signup/form" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-6 py-2.5 rounded-md shadow-lg hover:opacity-90 transition-opacity">
              Start Registration
            </Link>
            <Link href="/" className="font-semibold text-gray-700 px-6 py-2.5 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
              Learn More
            </Link>
          </div>
        </motion.section>

     
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <FeatureCard
            icon={<Globe className="text-blue-600" />}
            title="54 African Markets"
            description="Access trade opportunities across all African countries with seamless cross-border transactions."
          />
          <FeatureCard
            icon={<TrendingUp className="text-green-600" />}
            title="Trade Growth"
            description="Leverage AfCFTA's $3.4 trillion market to expand your business and reach new customers."
          />
          <FeatureCard
            icon={<Users className="text-orange-500" />}
            title="Business Network"
            description="Connect with verified businesses, exporters, and trade partners across Africa."
          />
        </motion.section>

       
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-center text-[#002E5C]">
                Why Register with AfCFTA?
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <BenefitItem text="Verified business profile on national platform" />
                <BenefitItem text="Access to trade financing and support" />
                <BenefitItem text="Real-time market intelligence and insights" />
                <BenefitItem text="Simplified customs and regulatory compliance" />
                <BenefitItem text="Priority access to trade missions and events" />
                <BenefitItem text="Business matchmaking with African partners" />
            </div>
          </div>
        </motion.section>

       
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold text-[#002E5C]">Ready to Go Continental?</h2>
            <p className="mt-2 text-gray-600">Take the first step towards expanding your business across Africa. Complete your registration today.</p>
            <div className="mt-6">
                <Link href="/signup/form" className="bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold px-6 py-2.5 rounded-md shadow-lg hover:opacity-90 transition-opacity">
                    Begin Registration Process
                </Link>
            </div>
        </motion.section>
      </div>
    </main>
  );
};



const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <motion.div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200" variants={cardVariants}>
        <div className="mb-4">{icon}</div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
    </motion.div>
);

const BenefitItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-x-3">
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        <span className="text-gray-700">{text}</span>
    </div>
);

export default SignUpHomePage;