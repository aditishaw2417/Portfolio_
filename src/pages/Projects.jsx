import React from "react";
import PageLayout from "../components/Book/PageLayout";

const projects = [
  {
    title: "Enterprise HRMS Platform",
    description:
      "A full-scale HR management system designed to streamline hiring, task management, and team collaboration within a single platform.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    points: [
      "Designed a centralized platform for HRs to manage hiring workflows efficiently.",
      "Built task management features for managers to assign and track work, similar to JIRA.",
      "Enabled employees to update task status and collaborate within the system.",
    ],
  },
  {
    title: "Watermarking Datasets",
    description:
      "A secure platform that allows datasets to be used for training without exposing direct access, improving data protection.",
    tech: ["React", "Spring Boot"],
    points: [
      "Designed and developed the complete frontend of the platform.",
      "Integrated frontend with backend services for seamless data flow.",
      "Focused on creating a clean and intuitive user experience.",
    ],
  },
  {
    title: "Automated Learning Platform",
    description:
      "An educational platform that recommends learning paths and skill roadmaps based on user interests.",
    tech: ["React"],
    points: [
      "Designed and built the complete frontend of the application.",
      "Created an intuitive UI to improve learning experience and navigation.",
    ],
  },
];

const Projects = () => {
  return (
    <PageLayout title="Chapter 3 — Creations" pageNumber={3}>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-[#FAFAFF] rounded-xl border border-gray-100 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#2D3748] mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#EEF2FF] text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
