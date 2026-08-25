import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <span>&copy; {new Date().getFullYear()} Dev Kabiru</span>
      <span>Built with React &middot; Deployed on GitHub Pages</span>
    </footer>
  );
}

export default Footer; 