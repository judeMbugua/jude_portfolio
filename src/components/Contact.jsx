import React from 'react'
import '../css/contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage]  = useState('');


    const serviceID = 'service_0w20wfe';
    const templateID = 'template_vrw2f0m';
    const userID = 'gx0uHNR8is_ZJFdqT';

    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    function SendMessage(e) {
        e.preventDefault();

        //validate input
        if (!name || !email || !message) {
            alert('Please fill in all spaces!')
            return;
        }

        emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);

            //reset the form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
            alert('Message sent successfully!');

        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send the message. Please try again later.');
        }); 
        
    
    }

  return (
    <div className='contact-container'>
        <p className="tit-text">Let's <span className="glow">talk</span></p>
        <hr />

        <div className="contact-intro">
            <p className="contact-text">
                To request a quote or hire me, contact me directly using any of my socials or fill in the form below and i'll get back soon.
            </p>
        </div>

    <div className="form-container">
        <form className="contact-form">
            <input type="text" className="name" placeholder='Your Name'
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            /> <br />

            <input type="email" className="email"  placeholder='Your Email'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            /> <br />

            <textarea class="message" placeholder="Your Message"
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
            ></textarea> <br />


            <button className="send-btn"  onClick={SendMessage}>
                SEND MESSAGE
            </button>
        </form>
    </div>

    </div>
  )
}
