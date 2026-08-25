import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-card">
        <div>
          <h2>Let&rsquo;s build something.</h2>
          <p>
            Open to freelance projects, internships, and full-time roles.
            Reach out and I&rsquo;ll get back to you within a day.
          </p>
        </div>
        <div className="contact-list">
          <span>email <a href="mailto:devkabirukinyua@gmail.com">devkabirukinyua@gmail.com</a></span>
          <span>github <a href="https://github.com/leekabiruu" target="_blank" rel="noreferrer">github.com/leekabiruu</a></span>
          <span>instagram <a href="https://instagram.com/devkabiru" target="_blank" rel="noreferrer">@devkabiru</a></span> 
          <span>phone <a href="tel:+254794175578">0794 175 578</a></span>
        </div>
      </div>
    </section>
  );
}

export default Contact;