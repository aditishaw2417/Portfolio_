import React from "react";

const chapters = [
  { title: "Chapter 1 — About Me", id: "about" },
  { title: "Chapter 2 — Experience", id: "experience" },
  { title: "Chapter 3 — Projects", id: "projects" },
  { title: "Chapter 4 — Skills", id: "skills" },
  { title: "Final Chapter — Contact", id: "contact" },
];
const TableOfContents = ({ onSelectChapter }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FF] px-6">
      <div className="bg-white rounded-3xl shadow-xl p-12 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-[#2D3748] mb-8 text-center">
          📖 Table of Contents
        </h1>
        <ul className="space-y-4">
          {chapters.map((chapter) => (
            <li
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className="cursor-pointer flex justify-between text-lg text-gray-700 hover:text-[#6C8AE4] transition border-b pb-2"
            >
              {chapter.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
