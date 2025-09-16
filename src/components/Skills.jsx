import React from "react";

const skills = [
  "React", "Python", "AI", "Cybersecurity", "Node.js", "Figma", "Linux", "Data Science", "TailwindCSS", "JavaScript"
];

const Skills = () => (
  <section className="py-12 bg-black w-full" id="skills">
    <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Our Skills</h2>
  <div className="flex flex-wrap justify-center gap-4 w-full px-4 md:px-8">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-gray-800 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 hover:shadow-cyan-400/30 transition">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
