import React from "react";
import PageLayout from "../components/Book/PageLayout";

const ThankYou = () => {
  return (
    <PageLayout title="The End" pageNumber={6}>
      <div className="flex flex-col items-center justify-center text-center h-full">
        <h2 className="text-2xl font-semibold text-[#6C8AE4] mb-4">
          Thank You for Visiting 🙏
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed max-w-md">
          Thank you for taking the time to explore my portfolio. I hope you
          enjoyed going through my journey as much as I enjoyed building it.
        </p>

        <p className="text-gray-600 italic">“The story doesn’t end here…”</p>
      </div>
    </PageLayout>
  );
};

export default ThankYou;
