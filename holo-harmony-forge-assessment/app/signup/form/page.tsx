"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Building2,
  Calendar,
  Globe,
  MapPin,
} from "lucide-react";

// --- Configuration for the multi-step form ---
const steps = [
  "Business Information",
  "Contact Details",
  "Identity Verification",
  "Documents",
  "Categories",
  "Trade Markets",
  "Review & Submit",
];

const initialFormData = {
  businessName: "",
  rcNumber: "",
  businessType: "",
  yearOfIncorporation: "",
  website: "",
  businessAddress: "",
  state: "",
  lga: "",
  // ...fields for other steps would go here
};

// --- Main Page Component ---
const SignUpFormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Helper function to update form state
  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="bg-[#F4F8FF] min-h-screen p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* --- Header --- */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              AfCFTA Registration
            </h1>
            <p className="text-gray-500">Complete your business registration</p>
          </div>
          <button className="flex items-center gap-x-2 px-4 py-2 border border-gray-300 bg-white rounded-md font-semibold text-sm text-gray-700 hover:bg-gray-50 transition">
            <Bookmark size={16} />
            Save & Exit
          </button>
        </header>

        {/* --- Stepper --- */}
        <RegistrationStepper currentStep={currentStep} steps={steps} />

        {/* --- Form Card --- */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-white rounded-xl shadow-lg"
        >
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800">
              {steps[currentStep - 1]}
            </h2>
            <p className="text-gray-500">
              Provide your official business registration details
            </p>

            <div className="mt-6 border-t border-gray-200 pt-6">
              {/* --- Conditionally Render Form for the current step --- */}
              {currentStep === 1 && (
                <BusinessInformationForm data={formData} update={updateFormData} />
              )}
              {/* Placeholders for other steps */}
              {currentStep > 1 && (
                 <div className="text-center py-16">
                    <h3 className="text-lg font-semibold text-gray-500">
                        {steps[currentStep-1]} form will be here.
                    </h3>
                 </div>
              )}
            </div>
          </div>

          {/* --- Form Footer / Navigation --- */}
          <div className="bg-gray-50 p-5 rounded-b-xl flex justify-between items-center border-t border-gray-200">
            <button
              onClick={handleBack}
              className={`flex items-center gap-x-2 px-4 py-2 rounded-md font-semibold text-sm text-gray-600 hover:bg-gray-200 transition ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentStep === 1}
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <span className="text-sm font-semibold text-gray-500">
              Step {currentStep} of {steps.length}
            </span>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold px-4 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity flex items-center gap-x-2"
            >
              {currentStep === steps.length ? "Submit" : "Next"}
              {currentStep < steps.length && <ArrowRight size={16} />}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};


// --- Stepper Sub-component ---
const RegistrationStepper = ({ currentStep, steps }: { currentStep: number; steps: string[]; }) => {
    return (
        <div className="mt-8 flex items-center justify-between">
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;

                return (
                    <div key={step} className="flex items-center w-full">
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                                ${isActive ? 'bg-blue-600 text-white' : ''}
                                ${isCompleted ? 'bg-blue-600 text-white' : ''}
                                ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-500' : ''}
                            `}>
                                {stepNumber}
                            </div>
                            <p className={`mt-2 text-xs font-semibold text-center ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                                {step}
                            </p>
                        </div>
                        {/* Connecting Line */}
                        {stepNumber < steps.length && (
                            <div className={`flex-1 h-1 mx-2 ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};


// --- Form for Step 1: Business Information ---
const BusinessInformationForm = ({ data, update }: { data: typeof initialFormData; update: Function; }) => {
    const InputField = ({ icon, label, name, placeholder, value, isOptional = false }: any) => (
        <div>
            <label className="flex items-center gap-x-2 text-sm font-semibold text-gray-700 mb-1">
                {icon} {label} {isOptional && <span className="text-xs text-gray-400">(Optional)</span>}
            </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={(e) => update(name, e.target.value)}
                placeholder={placeholder}
                className="w-full bg-gray-100/70 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );

    const SelectField = ({ label, name, value, children }: any) => (
        <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">{label}</label>
            <select
                name={name}
                value={value}
                onChange={(e) => update(name, e.target.value)}
                className="w-full bg-gray-100/70 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
            >
                {children}
            </select>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <div className="md:col-span-2">
                <InputField icon={<Building2 size={16} />} label="Registered Business Name" name="businessName" placeholder="Enter your registered business name" value={data.businessName} />
            </div>
            
            <InputField label="RC Number / CAC Number" name="rcNumber" placeholder="e.g., RC1234567" value={data.rcNumber} />
            
            <SelectField label="Business Type" name="businessType" value={data.businessType}>
                <option value="">Select business type</option>
                <option value="sole-proprietorship">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="llc">Limited Liability Company</option>
                <option value="plc">Public Limited Company</option>
            </SelectField>

            <InputField icon={<Calendar size={16} />} label="Year of Incorporation" name="yearOfIncorporation" placeholder="e.g., 2020" value={data.yearOfIncorporation} />

            <InputField icon={<Globe size={16} />} label="Website" name="website" placeholder="https://www.example.com" value={data.website} isOptional />

            <div className="md:col-span-2">
                 <InputField icon={<MapPin size={16} />} label="Business Address" name="businessAddress" placeholder="Enter your business address" value={data.businessAddress} />
            </div>

            <SelectField label="State" name="state" value={data.state}>
                <option value="">Select state</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kano">Kano</option>
                <option value="rivers">Rivers</option>
            </SelectField>
            
            <InputField label="Local Government Area" name="lga" placeholder="Enter LGA" value={data.lga} />
        </div>
    );
};

export default SignUpFormPage;