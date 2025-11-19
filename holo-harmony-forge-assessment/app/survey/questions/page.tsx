"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";


const surveyQuestions = [
    { question: "Is your business registered with CAC?", options: ["Yes, my business is registered", "No, not yet registered"] },
    { question: "Do you have a corporate bank account for your business?", options: ["Yes, we do", "No, we use a personal account"] },
    { question: "Are your products or services ready for export?", options: ["Yes, they meet all quality standards", "We are still in the development phase"] },
    { question: "Have you identified potential markets in other African countries?", options: ["Yes, we have conducted market research", "No, we have not started yet"] },
    { question: "Is your product packaging compliant with international standards?", options: ["Yes, it is labeled and packaged for export", "No, we need to update our packaging"] },
    { question: "Do you have a clear pricing strategy for export?", options: ["Yes, our export pricing is defined", "No, we are still working on it"] },
    { question: "Are you familiar with basic export documentation (e.g., invoice, packing list)?", options: ["Yes, I understand the basic requirements", "No, I need guidance on this"] },
    { question: "Does your business have an online presence (e.g., website, social media)?", options: ["Yes, we are active online", "No, we do not have an online presence"] },
    { question: "Can you handle logistics and shipping to other African countries?", options: ["Yes, we have a logistics plan", "No, we need a logistics partner"] },
    { question: "Is your business financially ready to handle the costs of exporting?", options: ["Yes, we have the necessary capital", "No, we are seeking funding"] },
    { question: "Do you have a NAFDAC registration for your products (if applicable)?", options: ["Yes, our products are registered", "This is not applicable / No"] },
    { question: "Are you prepared to comply with the AfCFTA Rules of Origin?", options: ["Yes, we understand and can comply", "I need to learn more about this"] },
];

const SurveyQuestionsPage = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100;

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null); // Reset for next question

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      
      calculateAndSubmit(newAnswers);
    }
  };

  const calculateAndSubmit = (finalAnswers: number[]) => {
    const isPerfect = finalAnswers.every((ans) => ans === 0);
    const score = isPerfect ? 100 : 0;
    router.push(`/results?score=${score}`);
  };

  const currentQuestion = surveyQuestions[currentQuestionIndex];

  return (
    <main className="bg-[#F4F8FF] min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
      
        <div className="text-center">
            <p className="text-sm font-bold text-blue-700 tracking-wider">READINESS CHECK</p>
            <h1 className="text-3xl font-bold text-gray-800 mt-1">AfCFTA Readiness Survey</h1>
        </div>

    
        <div className="mt-8">
          <div className="flex justify-between items-center text-sm font-medium text-gray-600">
            <span>Question {currentQuestionIndex + 1} of {surveyQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2 w-full">
            <motion.div
              className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-full h-2"
              initial={{ width: `${(progress / (currentQuestionIndex + 1)) * currentQuestionIndex}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

     
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-green-500 shadow-lg">
            <HelpCircle size={32} className="text-white"/>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-800">
            {currentQuestion.question}
          </h2>
        </div>
        
     
        <div className="mt-8 space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex justify-between items-center
                ${selectedOption === index
                  ? 'bg-[#003B8A] text-white border-[#003B8A] shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                }`
              }
            >
              <span className="font-semibold">{option}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${selectedOption === index
                  ? 'border-white'
                  : 'border-gray-300'
                }`
              }>
                {selectedOption === index && (
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

      
        <div className="mt-10">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="w-full p-4 rounded-xl font-bold text-white bg-[#00429E] disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors shadow-md"
          >
            Next
          </button>
        </div>
      </motion.div>
    </main>
  );
};

export default SurveyQuestionsPage;