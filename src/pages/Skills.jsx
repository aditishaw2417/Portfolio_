import React from "react";
import PageLayout from "../components/Book/PageLayout";

const Skills = () => {
  return (
    <PageLayout title="Chapter 4 — The Toolbox" pageNumber={4}>
      <div className="space-y-10">
        <div>
          <h2 className="text-lg font-semibold text-[#2D3748] mb-3">
            Languages
          </h2>

          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#2D3748] mb-3">
            Frameworks & Libraries
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "Spring Boot",
              "Material UI",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#2D3748] mb-3">
            Tools & Technologies
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Git",
              "Jest",
              "MySQL",
              "OOP",
              "GitHub Actions",
              "Argo CD",
              "Strapi",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#2D3748] mb-3">
            Also Known For
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Communication, leadership, cross-functional collaboration, and a
            proactive approach to solving problems and learning new
            technologies.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
