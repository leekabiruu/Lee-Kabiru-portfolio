import React from 'react';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-window">
        <div className="browser-chrome">
          <div className="browser-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="browser-url">https://devkabiru.dev</div>
        </div>

        <div className="hero-body">
          <div className="hero-badge">
            <span className="dot"></span>
            <span className="eyebrow">Available for work</span>
          </div>

          <h1 className="hero-name">
            Dev
            <span className="accent">Kabiru</span>
          </h1>
          <p className="hero-role">Web Developer</p>

          <p className="hero-bio">
            A young, goal-oriented Web Developer with a strong commitment to
            collaboration and solutions-oriented problem-solving. I use
            various web design tools to build customer-focused websites and
            products &mdash; holding a high bar for design, usability, and
            speed across every kind of end user. I take pride in writing
            clean, maintainable, reusable code, and in learning fast.
          </p>

          <div className="hero-skills">
            <span className="pill tone-blue">JavaScript</span>
            <span className="pill tone-navy">Python</span>
            <span className="pill tone-tan">HTML</span>
            <span className="pill tone-blue">CSS</span>
            <span className="pill tone-navy">React</span>
            <span className="pill tone-tan">PostgreSQL</span>
          </div>

          <div className="hero-contact-row">
            <div className="hero-contact-list">
              <span>email <a href="mailto:devkabirukinyua@gmail.com">devkabirukinyua@gmail.com</a></span>
              <span>github <a href="https://github.com/leekabiruu" target="_blank" rel="noreferrer">github.com/leekabiruu</a></span>
              <span>instagram <a href="https://instagram.com/devkabiru" target="_blank" rel="noreferrer">@devkabiru</a></span>
              <span>phone <a href="tel:+254794175578">0794 175 578</a></span>
            </div>
            <a href="#contact" className="btn-primary">Let&rsquo;s build something &rarr;</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero; 