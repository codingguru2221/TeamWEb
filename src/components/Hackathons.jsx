import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const hackathons = [
  {
    name: "Navonmesh",
    desc: "A national-level hackathon fostering innovation and collaboration.",
    icon: "🛠️"
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

const Hackathons = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-gray-950 w-screen mx-0">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Hackathons I've Attended</h2>
      <CardGrid>
        {hackathons.map((hack, idx) => (
          <StyledWrapper key={idx}>
            <div
              className="card"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/event')}
              tabIndex={0}
              role="button"
              aria-label={`Go to event page for ${hack.name}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/event'); }}
            >
              <div className="card-content">
                <div className="icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{hack.icon}</div>
                <h3 className="hack-name">{hack.name}</h3>
                <p className="hack-desc">{hack.desc}</p>
              </div>
            </div>
          </StyledWrapper>
        ))}
      </CardGrid>
    </section>
  );
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledWrapper = styled.div`
  .card {
    box-sizing: border-box;
  width: 240px;
  min-height: 280px;
  background: rgba(20, 24, 31, 0.95);
  border: 2px solid #00bcd4;
  box-shadow: 0 0 24px 2px #00bcd455, 0 2px 8px #000a;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 500;
  color: #e0f7fa;
  }

  .card:hover {
    border: 2px solid #00fff7;
    box-shadow: 0 0 32px 4px #00fff799, 0 2px 12px #000c;
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  padding: 1.2rem 1.1rem 1.3rem 1.1rem;
  height: 100%;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hack-name {
    color: #00fff7;
    font-weight: 700;
    font-size: 1.18rem;
    margin-bottom: 0.7rem;
    text-shadow: 0 2px 8px #00fff755, 0 1px 2px #000a;
    word-break: break-word;
    text-align: center;
  }

  .hack-desc {
    color: #b2ebf2;
    font-size: 1.01rem;
    line-height: 1.55;
    text-shadow: 0 1px 2px #000a;
    word-break: break-word;
    hyphens: auto;
    text-align: center;
    margin: 0;
    padding: 0 2px;
    max-width: 100%;
  }
`;

export default Hackathons;