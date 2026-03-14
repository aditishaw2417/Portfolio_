import React from "react";
import PageLayout from "../components/Book/PageLayout";

const About = () => {
  return (
    <PageLayout title="Chapter 1 — About Me" pageNumber={1}>
      <p className="mb-4">
        Hi, I'm Aditi, a software engineer passionate about building scalable
        applications and solving complex problems.
      </p>

      <p>
        I enjoy working across the stack and creating clean, maintainable
        systems that make a real impact.
      </p>
    </PageLayout>
  );
};

export default About;
