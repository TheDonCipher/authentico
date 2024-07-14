"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WalletIcon, CloudArrowUpIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const steps = [
  { icon: WalletIcon, title: 'Connect Wallet', description: 'Sign up using your Web3 wallet for secure authentication.' },
  { icon: CloudArrowUpIcon, title: 'Upload Document', description: 'Securely upload your document to the Authentico platform.' },
  { icon: ShieldCheckIcon, title: 'Verification Process', description: 'Authorized organizations verify your document on the blockchain.' },
  { icon: DocumentCheckIcon, title: 'Access Verified Document', description: 'Access your verified document anytime, anywhere.' },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">How Authentico Works</h1>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `${-activeStep * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {steps.map((step, index) => (
                <div key={step.title} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <step.icon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
                    <p className="text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-gray-300"
                animate={{
                  scale: activeStep === index ? 1.5 : 1,
                  backgroundColor: activeStep === index ? "#3B82F6" : "#D1D5DB"
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
