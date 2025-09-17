import React from "react";
import styled from "styled-components";

const events = [
  {
    date: "Oct 2025",
    title: "Hack the Future",
    desc: "A 48-hour hackathon focused on AI and automation.",
    type: "upcoming"
  },
  {
    date: "Nov 2025",
    title: "CyberNite",
    desc: "A night of cybersecurity challenges and workshops.",
    type: "upcoming"
  },
  {
    date: "Aug 2025",
    title: "AlgoMania",
    desc: "A past event on algorithms and problem solving.",
    type: "past"
  },
  {
    date: "Jul 2025",
    title: "WebDev Sprint",
    desc: "A past event for rapid web development.",
    type: "past"
  }
];

const EventPage = () => (
  <section className="py-16 bg-gray-900 w-full min-h-screen mt-10">
    <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Upcoming Events</h2>
    <CardGrid>
      {events.filter(e => e.type === "upcoming").map((event, idx) => (
        <StyledWrapper key={idx}>
          <div className="card">
            <p className="card-title">{event.title}</p>
            <p className="small-desc">{event.desc}</p>
            <div className="small-desc" style={{ fontWeight: 700, color: '#384c6c', marginTop: '0.5em' }}>{event.date}</div>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </StyledWrapper>
      ))}
    </CardGrid>
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Past Events</h2>
    <CardGrid>
      {events.filter(e => e.type === "past").map((event, idx) => (
        <StyledWrapper key={idx}>
          <div className="card">
            <p className="card-title">{event.title}</p>
            <p className="small-desc">{event.desc}</p>
            <div className="small-desc" style={{ fontWeight: 700, color: '#384c6c', marginTop: '0.5em' }}>{event.date}</div>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </StyledWrapper>
      ))}

    </CardGrid>
  </section>
);

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledWrapper = styled.div`
  .card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    max-width: 300px;
    max-height: 320px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(28);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
`;

export default EventPage;
