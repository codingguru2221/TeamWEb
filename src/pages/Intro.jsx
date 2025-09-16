import React from "react";

const Intro = () => (
  <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 pt-24">
    <div className="max-w-3xl text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-6">Who We Are</h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-8">
        We are TheCodex, a passionate team of developers, designers, and hackers. Our journey began at local hackathons, where we discovered the power of collaboration and innovation. Over the years, we've built projects that solve real-world problems, won awards, and grown into a close-knit community.
      </p>
      <p className="text-md md:text-lg text-cyan-400 mb-4">
        Our mission: To push the boundaries of technology, learn together, and inspire the next generation of tech leaders.
      </p>
      <p className="text-gray-400">
        From AI-powered apps to cybersecurity challenges, our hackathon journey is filled with late nights, breakthrough moments, and lifelong friendships. Join us as we continue to build, hack, and innovate!
      </p>
    </div>
  </section>
);

export default Intro;
