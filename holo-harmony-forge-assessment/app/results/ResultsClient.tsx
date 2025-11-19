"use client"; 

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";


const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const XCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


const ResultsClient = () => {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const isSuccess = score === "100";

  return (
    <main className="bg-gray-50 flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-lg"
      >
        <motion.div
          className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          }`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isSuccess ? <CheckCircleIcon /> : <XCircleIcon />}
        </motion.div>

        <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
          {isSuccess ? "Congratulations!" : "Almost There"}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          {isSuccess
            ? "You've successfully completed the readiness assessment. You are ready to proceed with registration."
            : "Based on your answers, there are a few more steps to take before you can register. Please try again."}
        </p>

        <div className="mt-10">
          {isSuccess ? (
            <Link
              href="/signup"
              className="inline-block bg-blue-600 text-white font-semibold px-10 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Proceed to Registration
            </Link>
          ) : (
            <Link
              href="/survey"
              className="inline-block bg-gray-700 text-white font-semibold px-10 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
            >
              Try Assessment Again
            </Link>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default ResultsClient;