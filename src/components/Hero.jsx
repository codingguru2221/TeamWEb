import React from "react";

const Hero = () => (
  <section className="min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-center pt-24 w-full px-0">
  <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-4 animate-pulse">
      We Build. We Hack. We Innovate.
    </h1>
  <p className="text-lg md:text-2xl text-gray-300 mb-8">
      Join our journey to create, disrupt, and lead in the world of tech.
    </p>
  <a href="#events" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold">
      Explore Events
    </a>
  </section>
);

export default Hero;
