"use client";

import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { WalletIcon, UserIcon, CloudArrowUpIcon, LockClosedIcon, ShieldCheckIcon, DocumentCheckIcon, ShareIcon, EyeIcon } from '@heroicons/react/24/outline';

const steps = [
  { 
    icon: WalletIcon, 
    title: 'Connect Wallet', 
    description: 'Sign up using your Web3 wallet for secure authentication. This ensures that your identity is protected and verified on the blockchain.' 
  },
  { 
    icon: UserIcon, 
    title: 'Select User Type', 
    description: 'Choose whether you are signing up as an individual or an organization. This helps tailor the verification process to your needs.' 
  },
  { 
    icon: CloudArrowUpIcon, 
    title: 'Upload Document', 
    description: 'Securely upload your document to the Authentico platform. Your documents are encrypted and stored with the highest security standards.' 
  },
  { 
    icon: LockClosedIcon, 
    title: 'Blockchain Introduction', 
    description: 'Blockchain technology provides a tamper-proof ledger where your document verification status is stored securely and immutably.' 
  },
  { 
    icon: ShieldCheckIcon, 
    title: 'Verification Process', 
    description: 'Authorized organizations verify your document on the blockchain. The verification status and relevant details are recorded immutably.' 
  },
  { 
    icon: DocumentCheckIcon, 
    title: 'Access Verified Document', 
    description: 'Access your verified document anytime, anywhere. Share it with other users or organizations directly through the platform.' 
  },
  { 
    icon: ShareIcon, 
    title: 'Share Documents', 
    description: 'Easily share your verified documents with other users or organizations. They can quickly verify the authenticity through the blockchain.' 
  },
  { 
    icon: EyeIcon, 
    title: 'OCR Technology', 
    description: 'Our OCR technology extracts and verifies details from your document, ensuring accuracy and speeding up the verification process.' 
  },
];

export default function HowItWorks() {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">How Authentico Works</h1>

        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              style={{ y }}
              className="flex items-center justify-center my-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                <step.icon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

