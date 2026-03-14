import React from "react";
import { motion } from "framer-motion";

const BookLayout = ({ leftPage, rightPage, chapterKey }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex items-center justify-center px-6">
      <div className="flex w-full max-w-6xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden perspective-[2000px]">
        <div className="w-1/2 bg-white p-12 relative">{leftPage}</div>
        <div className="w-[2px] bg-gray-200"></div>
        <motion.div
          key={chapterKey}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "left" }}
          className="w-1/2 bg-white p-12 relative"
        >
          {rightPage}
        </motion.div>
      </div>
    </div>
  );
};

export default BookLayout;
