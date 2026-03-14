import React from "react";

const Introduction = ({ onOpenBook }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FF] px-6">
      <div className="text-center max-w-xl">
        <p className="text-lg text-gray-500 mb-4">📖 The Story of</p>
        <h1 className="text-5xl font-bold text-[#2D3748] mb-4">Aditi Shaw</h1>
        <h2 className="text-xl text-[#6C8AE4] mb-6">Software Engineer</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Turning complex problems into elegant solutions through clean code and
          thoughtful design.
        </p>
        <button
          onClick={onOpenBook}
          className="px-8 py-3 rounded-xl bg-[#6C8AE4] text-white font-medium hover:scale-105 transition"
        >
          Open the Book →
        </button>
      </div>
    </div>
  );
};

export default Introduction;
