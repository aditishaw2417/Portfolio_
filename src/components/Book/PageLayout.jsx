import React from "react";
import { motion } from "framer-motion";

const PageLayout = ({ title, children, pageNumber }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white w-full max-w-4xl min-h-[600px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-12"
      >
        <h1 className="text-3xl font-bold text-[#2D3748] mb-8">{title}</h1>
        <div className="text-gray-700 leading-relaxed">{children}</div>
        <div className="absolute bottom-6 right-10 text-sm text-gray-400">
          Page {pageNumber}
        </div>
      </motion.div>
    </div>
  );
};

export default PageLayout;
