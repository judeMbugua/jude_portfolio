import { useState } from 'react'
import '../css/home.css'
import About from './About'

import React from 'react'
import Contact from './Contact'
import Work from './Work'


export default function Home() {
  return (
    <div className="home-container">
      <About />

      <Work />

      <Contact />

    </div>
  )
}


  



