import React from "react";

const hackathons = [
  {
    name: "Navonmesh",
    desc: "A national-level hackathon fostering innovation and collaboration.",
    icon: "🛠️" // Placeholder icon
  },
  {
    name: "HackPrix",
    desc: "A 24-hour coding marathon for creative problem solvers.",
    icon: "💡"
  },
  {
    name: "RNTU TechFest",
    desc: "Annual tech festival with diverse hackathon challenges.",
    icon: "🚀"
  }
];

const Hackathons = () => (
  <section className="py-12 bg-gray-950 w-screen mx-0">
    <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Hackathons I’ve Attended</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-4 md:px-8">
      {hackathons.map((hack, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-xl shadow-lg hover:shadow-cyan-400/30 hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center text-center"
        >
          <div className="text-5xl mb-4">{hack.icon}</div>
          <h3 className="text-xl font-semibold text-purple-400 mb-2">{hack.name}</h3>
          <p className="text-gray-300 text-sm">{hack.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Hackathons;
