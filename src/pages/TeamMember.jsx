import React from "react";
import { useParams, Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Alex Kim",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["React", "Node.js", "AI"],
    bio: "Alex is a passionate developer with 10+ years of experience in full-stack development and AI."
  },
  {
    name: "Priya Singh",
    role: "Cybersecurity Analyst",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Cybersecurity", "Python", "Linux"],
    bio: "Priya specializes in cybersecurity and has worked on several high-profile security projects."
  },
  {
    name: "Sam Lee",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    skills: ["Figma", "CSS", "Branding"],
    bio: "Sam is a creative UI/UX designer with a keen eye for detail and branding."
  },
  {
    name: "Maya Patel",
    role: "ML Engineer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["Machine Learning", "Python", "Data Science"],
    bio: "Maya is an ML engineer who loves building data-driven solutions."
  }
];

const TeamMember = () => {
  const { name } = useParams();
  const member = teamMembers.find(m => m.name.replace(/\s+/g, '').toLowerCase() === name);
  if (!member) return <div className="text-center text-red-500 mt-10">Team member not found.</div>;
  return (
    <section className="py-16 bg-gray-900 min-h-screen flex flex-col items-center">
      <Link to="/" className="mb-6 text-cyan-400 hover:underline">&larr; Back to Home</Link>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
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
              <span key={i} className="bg-gray-700 text-purple-400 px-3 py-1 rounded-full text-xs font-medium shadow">{skill}</span>
            ))}
          </div>
          <p className="text-gray-700 text-center leading-relaxed mb-4">{member.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
