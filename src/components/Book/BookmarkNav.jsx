import React from "react";

const BookmarkNav = ({ onSelect }) => {
  const chapters = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <div className="fixed right-0 top-1/3 flex flex-col gap-2">
      {chapters.map((chapter) => (
        <button
          key={chapter.id}
          onClick={() => onSelect(chapter.id)}
          className="bg-[#6C8AE4] text-white px-4 py-2 rounded-l-lg hover:bg-[#5a74c9] transition"
        >
          {chapter.label}
        </button>
      ))}
    </div>
  );
};

export default BookmarkNav;
