import React from 'react'
import '../css/intro.css'

export default function Intro() {
  return (
    <div className='intro-container'>
        <p className="name-text">I'm Jude Mbugua.</p>
        <p className='pos-text'>Fullstack Website Developer & <br /> Software Engineer.</p>

        <div className="btn-container">
            <a href="/contact">
            <button className="contact-btn">
                Contact Me
            </button>
            </a>

            <a href="/projects">
            <button className="contact-btn">
                My Work
            </button>
            </a>
        </div>

    </div>
  )
}
