
import React from "react";

const events = [
  {
    date: "Oct 2025",
    title: "Hack the Future",
    desc: "A 48-hour hackathon focused on AI and automation."
  },
  {
    date: "Nov 2025",
    title: "CyberNite",
    desc: "A night of cybersecurity challenges and workshops."
  },
  {
    date: "Dec 2025",
    title: "CodeFest",
    desc: "Showcase your coding skills in a team-based competition."
  }
];

const Events = () => (
  <section className="py-16 bg-gray-900 w-full" id="events">
    <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Upcoming Events</h2>
  <div className="flex flex-col gap-8 w-full px-4 md:px-8">
      {events.map((event, idx) => (
        <div key={idx} className="bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-400/30 hover:scale-105 transition p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-purple-400">{event.title}</h3>
            <p className="text-gray-300 mb-2">{event.desc}</p>
          </div>
          <span className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mt-4 md:mt-0 md:ml-6 shadow">
            {event.date}
          </span>
        </div>
      ))}
    </div>
    
  </section>
);

 

export default Events;
