import React from "react";

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
        <div key={idx} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition p-6 flex flex-col items-center">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full border-4 border-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-100">{member.name}</h3>
          <p className="text-cyan-400 mb-2">{member.role}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {member.skills.map((skill, i) => (
              <span key={i} className="bg-gray-700 text-purple-400 px-3 py-1 rounded-full text-xs font-medium shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
