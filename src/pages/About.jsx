import React from "react";
import PageLayout from "../components/Book/PageLayout";
import profile from "../assets/illustrations/profile.png";

const About = () => {
  return (
    <PageLayout title="Chapter 1 — The Beginning" pageNumber={1}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#6C8AE4]">
          Hi, I'm Aditi 👋
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          I'm a software engineer passionate about building scalable
          applications and designing thoughtful user experiences. I enjoy
          solving complex problems and turning ideas into clean, maintainable
          code.
        </p>

        <p className="text-gray-700 leading-relaxed">
          My work focuses on creating reliable systems using modern technologies
          like React and Spring Boot while maintaining strong engineering
          principles and clean architecture.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <img
            src={profile}
            alt="Aditi Shaw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#2D3748]">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm">
              Java
            </span>
            <span className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm">
              Spring Boot
            </span>
            <span className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-[#EEF2FF] rounded-lg text-sm">
              MySQL
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#2D3748]">
            Quick Facts
          </h3>

          <ul className="text-gray-600 text-sm space-y-2">
            <li>💻 Software Engineer</li>
            <li>📍 India</li>
            <li>☕ Coffee-powered coding</li>
            <li>📚 Always learning new tech</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
