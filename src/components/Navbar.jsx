import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-cyan-400 tracking-widest">TheCodex</div>
      <ul className="flex space-x-8 text-lg font-medium">
        <li><a href="/" className="text-gray-200 hover:text-cyan-400 transition">Home</a></li>
        <li><a href="/intro" className="text-gray-200 hover:text-purple-400 transition">Intro</a></li>
        <li><a href="#events" className="text-gray-200 hover:text-cyan-400 transition">Events</a></li>
        <li><a href="#projects" className="text-gray-200 hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#contact" className="text-gray-200 hover:text-cyan-400 transition">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
