import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Dev<span>Kabiru</span>
      </div>
      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        {open ? 'close' : 'menu'}
      </button>
      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#portfolio" onClick={() => setOpen(false)}>Work</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;