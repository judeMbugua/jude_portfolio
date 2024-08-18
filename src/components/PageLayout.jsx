import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../css/pageLayout.css'
import Intro from './Intro'
import Footer from './Footer'

export default function PageLayout() {
  return (
    <div className="page-layout-container">
      
        <Header/>
        
        <Intro />
        

        <main>
            <Outlet />

        <footer>
          <Footer />
        </footer>
        

        </main>
    </div>

    
  )
}
