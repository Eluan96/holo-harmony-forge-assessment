"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-teal-50 overflow-hidden lg:py-20">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ y: ["15%", "-5%", "15%"] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-[26%] left-[5%] w-14 h-14 bg-yellow-100 rounded-full filter"
        />

        <motion.div
          animate={{ y: ["-15%", "15%", "-15%"] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[30%] left-[25%] w-12 h-12 bg-blue-200 rounded-full filter"
        />

        <motion.div
          animate={{ y: ["-5%", "5%", "-5%"] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[15%] right-[5%] w-20 h-20 bg-teal-100 rounded-full filter"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
              <Globe size={15} color="#002E5C" />
              <span className="text-xs font-medium text-[#002E5C]">
                Connecting Africa Through Trade
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002E5C] leading-tight">
              National AfCFTA
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">
                Digital Trade
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-400">
                Portal
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Connecting Nigerian businesses to Africa through seamless digital
              trade. Register, verify, and unlock new opportunities across the
              continent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <button className="flex items-center justify-center gap-x-2 bg-[#00429E] text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300">
                <span>Get Started</span>
                <MoveRight />
              </button> */}

<Link
  href="/survey"
  className="flex items-center justify-center gap-x-2 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300"
>
  <span>Get Started</span>
  <MoveRight /> 
</Link>
              <Link href="/coming-soon" className="bg-white text-gray-800 px-7 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-teal-300 hover:text-white transition-colors duration-300 shadow-sm">
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <TrendingUp />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-gray-500 text-sm">Registered Businesses</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-yellow-500 flex items-center justify-center shadow-md">
                  <Globe color="white"/>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">54</p>
                  <p className="text-gray-500 text-sm">African Countries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="">
              <Image
                src="/hero-illustration-BZZrFxTM.jpg"
                alt="Digital trade connections across Africa"
                width={600}
                height={500}
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
