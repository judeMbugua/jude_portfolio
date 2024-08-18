import React from 'react'
import '../css/work.css'

export default function Work() {
  return (
    <div className='work-container'>
      <div className="work-head-container">
        <p className="work-head-text">My Work</p>
        <hr />
      </div>

      <div className="work-container">
        <div className="wrapper">



        <div className="project-card">
            <div className="image-container">
              <img src="medo003.png" alt="none" className="proj-image special" />

            </div>

            <div className="info-container">
              <p className="proj-name">
                Quick Tasks
              </p>

              <p className="tech-stack">
                Python • Django • Postgres • HTML & CSS
              </p>

              <p className="proj-desc">
                This web app allows users to create an account and have diffrent categories ToDo lists which are quickly accessible thus saves time and boosts productivity.
              </p>
            </div>

          <div className="btn-container">
            <button className="proj-btn">
              Visit
            </button>
          </div>

          </div>




          <div className="project-card">
            <div className="image-container">
                <img src="qHomepage.png" alt="none" className="proj-image" />
              </div>

            <div className="info-container">
              <p className="proj-name">
                Quiet Comforts
              </p>

              <p className="tech-stack">
                Django • Ajax • Postgres • HTML & CSS
              </p>

              <p className="proj-desc">
                I made this e-commerce website for a clothes and shoes online shop.I used Html and CSS for frontend and for backend I used the Python Django framework.
              </p>
            </div>

            <div className="btn-container">
            <button className="proj-btn">
              Visit
            </button>
          </div>
          </div>





          <div className="project-card">
            <div className="image-container">
              <img src="focus001.png" alt="none" className="proj-image special" />

            </div>

            <div className="info-container">
              <p className="proj-name">
                Pomodoro Timer
              </p>

              <p className="tech-stack">
                React • Django • Postgres • HTML & CSS
              </p>

              <p className="proj-desc">
                I made this Pomodoro style timer.I used React for frontend and Django for backend.The web app allows users to log in and save completed tasks in a database.
              </p>
            </div>

          <div className="btn-container">
            <button className="proj-btn">
              Visit
            </button>
          </div>

          </div>




          <div className="project-card">
            <div className="image-container">
              <img src="relay001.png" alt="none" className="proj-image" />

            </div>

            <div className="info-container">
              <p className="proj-name">
                AutoRelay
              </p>

              <p className="tech-stack">
                Django • Ajax • Postgres • HTML & CSS
              </p>

              <p className="proj-desc">
              Effortlessly market to clients via WhatsApp: Simply upload an Excel sheet with phone numbers and messages, and automation takes care of the rest, boosting your outreach.
              </p>
            </div>

          <div className="btn-container">
            <button className="proj-btn">
              Visit
            </button>
          </div>

          </div>


          
        </div>
      </div>




    </div>
  )
}
