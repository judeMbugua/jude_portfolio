import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <>
    <hr />
    <div className='footer-container'>
        <div className="socials-container">

            <a href="https://wa.me/254701139793?text=Hello%20Jude," target="_blank" className="social-link">

            <img src="whatsapp.png" alt="none" className="social-img" />

            </a>

    
            <a href="http://linkedin.com/in/jude-wanyagi-873911296/" target="_blank" className="social-link">

            <img src="linkedin.png" alt="none" className="social-img" />

            </a>

            <a href="https://github.com/judeMbugua" className="social-link" target="_blank">

            <img src="github.png" alt="none" className="social-img" />

            </a>

            <p className="footer-name">Jude Mbugua @ 2021</p>
            
        </div>

    </div>
    </>
  )
}
