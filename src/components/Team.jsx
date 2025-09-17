import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Alex Kim",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["React", "Node.js", "AI"]
  },
  {
    name: "Priya Singh",
    role: "Cybersecurity Analyst",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Cybersecurity", "Python", "Linux"]
  },
  {
    name: "Sam Lee",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    skills: ["Figma", "CSS", "Branding"]
  },
  {
    name: "Maya Patel",
    role: "ML Engineer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["Machine Learning", "Python", "Data Science"]
  }
];

const Team = () => (
  <section className="py-16 bg-gray-900 w-full" id="team">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Meet the Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full px-4 md:px-8">
      {teamMembers.map((member, idx) => (
        <div key={idx} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg object-cover mt-8" />
          </div>
          <div className="p-6 flex flex-col items-center">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {member.name}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased mb-2">
              {member.role}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {member.skills.map((skill, i) => (
                <span key={i} className="bg-gray-700 text-purple-400 px-3 py-1 rounded-full text-xs font-medium shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 pt-0 flex justify-center">
            <Link
              to={`/team/${member.name.replace(/\s+/g, '').toLowerCase()}`}
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);


export default Team;
