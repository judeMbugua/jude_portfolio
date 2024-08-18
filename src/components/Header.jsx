import React from 'react'
import '../css/header.css'
import DropdownMenu from './DropdownMenu'

export default function Header() {
  return (
    <div className='header-container'>
        <div className="name-container">
            <p className="my-name">Jude Mbugua</p>
            <hr />
        </div>

    
    <menu className="container">
      <DropdownMenu />
      
    </menu>
    

    </div>
  )
}
