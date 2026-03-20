import React from "react";
import PageLayout from "../components/Book/PageLayout";

const experiences = [
  {
    role: "SDE-1",
    company: "Byteridge Pvt Ltd",
    duration: "Oct 2025 — Present",
    location: "India",
    points: [
      "Built frontend features using Angular for a production project.",
      "Currently developing backend services using Spring Boot.",
      "Contributing to feature development and bug fixes in active projects.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Gap Inc",
    duration: "Jan 2025 — Jul 2025",
    location: "Hyderabad, India",
    points: [
      "Enhanced UI using React, TypeScript, and Material UI, improving UX by 25%.",
      "Built REST APIs with Spring Boot and increased test coverage by 40% using Jest.",
      "Optimized CI/CD pipelines with GitHub Actions and Argo CD, reducing deployment time by 30%.",
    ],
  },
  {
    role: "Full-Stack Web Developer Intern",
    company: "VIT-AP University",
    duration: "Aug 2023 — May 2024",
    location: "Amaravati, India",
    points: [
      "Revamped university website using Next.js and Strapi, improving performance by 60%.",
      "Streamlined content updates via CMS integration, increasing engagement by 20%.",
    ],
  },
];

const Experience = () => {
  return (
    <PageLayout title="Chapter 2 — The Journey" pageNumber={2}>
      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-[2px] bg-gray-200"></div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-6 h-6 rounded-full bg-[#6C8AE4] mt-1 z-10"></div>

              <div>
                <h3 className="text-lg font-semibold text-[#2D3748]">
                  {exp.role} — {exp.company}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {exp.duration} • {exp.location}
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
