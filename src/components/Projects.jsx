import React from "react";

const projects = [
  {
    title: "Smart Health Tracker",
    stack: ["React", "AI", "Node.js"],
    abstract: "A wearable-powered health dashboard with AI-driven insights."
  },
  {
    title: "SecureChat",
    stack: ["Python", "Cybersecurity"],
    abstract: "A privacy-first chat app with end-to-end encryption."
  },
  {
    title: "VisionBot",
    stack: ["AI", "Data Science"],
    abstract: "A computer vision tool for real-time object detection."
  }
];

const Projects = () => (
  <section className="py-16 bg-black w-full" id="projects">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="bg-gray-700 text-purple-400 px-3 py-1 rounded-full text-xs font-medium shadow">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-300 flex-1">{project.abstract}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
