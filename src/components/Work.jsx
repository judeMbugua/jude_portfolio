import React, { useEffect, useRef } from 'react';
import '../css/work.css';

export default function Work() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const stopAnimation = () => {
      wrapper.style.animation = 'none'; // Stop the animation
    };

    // Add event listeners to stop the animation on user interaction
    wrapper.addEventListener('scroll', stopAnimation);
    wrapper.addEventListener('mouseover', stopAnimation);

    return () => {
      // Clean up event listeners
      wrapper.removeEventListener('scroll', stopAnimation);
      wrapper.removeEventListener('mouseover', stopAnimation);
    };
  }, []);

  return (
    <div className='work-container'>
      <div className="work-head-container">
        <p className="work-head-text">My Work</p>
        <hr />
      </div>

      <div className="work-container">
        <div className="wrapper" ref={wrapperRef}>
          <div className="project-card">
            <div className="image-container">
              <img src="medo003.png" alt="none" className="proj-image special" />
            </div>

            <div className="info-container">
              <p className="proj-name">Quick Tasks</p>
              <p className="tech-stack">Python • Django • Postgres • HTML & CSS</p>
              <p className="proj-desc">
                Quick Tasks is a web app that enables users to create accounts and organize To-Do lists into distinct categories, ensuring quick access and enhanced productivity.
              </p>
            </div>
            
            <div className="btn-container">
              <a href="https://github.com/judeMbugua/MeDo--ToDolist" target="_blank" rel="noopener noreferrer">
                <button className="proj-btn">Source Code</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="image-container">
              <img src="qHomepage.png" alt="none" className="proj-image" />
            </div>
            <div className="info-container">
              <p className="proj-name">Quiet Comforts</p>
              <p className="tech-stack">Django • Ajax • Postgres • HTML & CSS</p>
              <p className="proj-desc">
                I created this e-commerce website for an online clothes and shoes shop. The site is integrated with PayPal and M-Pesa for seamless and secure payments.
              </p>
            </div>
            <div className="btn-container">
              <a href="https://github.com/judeMbugua/QuietComforts" target="_blank" rel="noopener noreferrer">
                <button className="proj-btn">Source Code</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="image-container">
              <img src="focus001.png" alt="none" className="proj-image special" />
            </div>
            <div className="info-container">
              <p className="proj-name">Pomodoro Timer</p>
              <p className="tech-stack">React • Django • Postgres • HTML & CSS</p>
              <p className="proj-desc">
                I created a Pomodoro-style timer web app that enables users to log in, track their productivity, and store completed tasks in a database for easy reference.
              </p>
            </div>
            <div className="btn-container">
              <a href="https://github.com/judeMbugua/PomodoroTimer" target="_blank" rel="noopener noreferrer">
                <button className="proj-btn">Source Code</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="image-container">
              <img src="relay001.png" alt="none" className="proj-image" />
            </div>
            <div className="info-container">
              <p className="proj-name">AutoRelay</p>
              <p className="tech-stack">Django • Ajax • Postgres • HTML & CSS</p>
              <p className="proj-desc">
                Effortlessly market to clients via WhatsApp: Simply upload an Excel sheet with phone numbers and messages, and automation takes care of the rest, boosting your outreach.
              </p>
            </div>
            <div className="btn-container">
              <a href="https://github.com/judeMbugua/autoRelay" target="_blank" rel="noopener noreferrer">
                <button className="proj-btn">Source Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
