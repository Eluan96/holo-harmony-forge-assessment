"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// --- Placeholder Survey Data ---
const surveyQuestions = [
  {
    question: "Do you have a registered business in Nigeria?",
    // The first option is the "correct" one for a 100% score
    options: ["Yes, it is registered with the CAC.", "No, not yet."],
  },
  {
    question: "Are your products or services ready for export?",
    options: ["Yes, we meet all quality standards.", "We are still in development."],
  },
  {
    question: "Do you have a basic understanding of export documentation?",
    options: ["Yes, I am familiar with the requirements.", "No, I need guidance."],
  },
];

const SurveyPage = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const progress = ((currentQuestionIndex) / surveyQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // End of survey, calculate score and navigate
      calculateAndSubmit(newAnswers);
    }
  };

  const calculateAndSubmit = (finalAnswers: number[]) => {
    // Score is 100 if all answers are the first option (index 0), otherwise 0.
    const isPerfect = finalAnswers.every((ans) => ans === 0);
    const score = isPerfect ? 100 : 0;
    router.push(`/results?score=${score}`);
  };

  const currentQuestion = surveyQuestions[currentQuestionIndex];

  return (
    <main className="bg-gray-50 flex items-center justify-center min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-2xl"
      >
        {/* Progress Bar */}
        <div>
          <p className="text-sm font-medium text-gray-600">
            Step {currentQuestionIndex + 1} of {surveyQuestions.length}
          </p>
          <div className="mt-2 bg-gray-200 rounded-full h-2 w-full">
            <motion.div
              className="bg-blue-600 rounded-full h-2"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Question Area */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {currentQuestion.question}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Options */}
        <div className="mt-8 space-y-4">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-left p-5 bg-gray-100 rounded-lg font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors border-2 border-transparent focus:outline-none focus:border-blue-500"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default SurveyPage;