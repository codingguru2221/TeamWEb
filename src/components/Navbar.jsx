
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => (

  <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50 border-none outline-none">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-cyan-400 tracking-widest">TheCodex</div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8 text-lg font-medium items-center">
          <li><Link to="/" className="text-gray-200 hover:text-cyan-400 transition">Home</Link></li>
          <li><Link to="/intro" className="text-gray-200 hover:text-purple-400 transition">Intro</Link></li>
          <li><Link to="/event" className="text-gray-200 hover:text-cyan-400 transition">Events</Link></li>
          <li><a href="#projects" className="text-gray-200 hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#contact" className="text-gray-200 hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>
      <StyledWrapper>
        <a
          href="https://forms.gle/your-form-link" // TODO: Replace with actual form link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Us Button"
          tabIndex={0}
          role="button"
          className="user-profile"
        >
          <div className="user-profile-inner">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2" id="Layer_2">
                <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
              </g>
            </svg>
            <p>Join Us</p>
          </div>
        </a>
      </StyledWrapper>
    </div>
  </nav>
);

const StyledWrapper = styled.div`
  .user-profile {
    width: 131px;
    height: 51px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease;
    background: linear-gradient(
      to bottom right,
      #2e8eff 0%,
      rgba(46, 142, 255, 0) 30%
    );
    background-color: rgba(46, 142, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-profile:hover,
  .user-profile:focus {
    background-color: rgba(46, 142, 255, 0.7);
    box-shadow: 0 0 10px rgba(46, 142, 255, 0.5);
    outline: none;
  }

  .user-profile-inner {
    width: 127px;
    height: 47px;
    border-radius: 13px;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: #fff;
    font-weight: 600;
  }

  .user-profile-inner svg {
    width: 27px;
    height: 27px;
    fill: #fff;
  }
`;

export default Navbar;
