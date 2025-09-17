import React from "react";
import styled from "styled-components";

const Hero = () => (
  <section className="min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-center pt-24 w-full px-0">
    <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-4 animate-pulse">
      We Build. We Hack. We Innovate.
    </h1>
    <p className="text-lg md:text-2xl text-gray-300 mb-8">
      Join our journey to create, disrupt, and lead in the world of tech.
    </p>
    <StyledWrapper>
      <a href="#events" style={{ textDecoration: 'none' }}>
        <button>
          <span>Explore Events</span>
        </button>
      </a>
    </StyledWrapper>
  </section>
);

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #444663;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 18px 32px;
    min-width: 180px;
    transition: all 0.3s;
    cursor: pointer;
    margin: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    white-space: nowrap;
    font-weight: 700;
  }

  button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
  }

  button:hover span {
    padding-right: 15px;
  }

  button:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export default Hero;