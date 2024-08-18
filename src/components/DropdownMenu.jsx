import React, { useState } from 'react';
import '../css/dropdown.css'

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/">About Me</a>

          <hr />
          <a href="projects">My Work</a>

          <hr />
          <a href="projects">Contact Me</a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
