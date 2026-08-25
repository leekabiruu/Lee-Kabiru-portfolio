import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow">01 &mdash; About</p>
      <h2 className="section-heading">A bit more about how I work</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&rsquo;m a web developer focused on building fast, usable
            products end to end &mdash; from database schema to the last
            pixel of the UI. I care about clean, maintainable code as much
            as I care about how a page feels to use.
          </p>
          <p>
            {/* Edit this paragraph with more of your story: how you got
                into dev, what kind of projects you enjoy, what you're
                learning right now. */}
            I&rsquo;m currently sharpening my full-stack skills across
            React and PostgreSQL, and I&rsquo;m open to freelance work,
            internships, or full-time roles where I can keep building
            real products for real users.
          </p>
        </div>

        <div className="about-stats">
          {/* Swap these for numbers that are actually true for you */}
          <div className="stat-card">
            <div className="num">1+</div>
            <div className="label">Live projects shipped</div>
          </div>
          <div className="stat-card">
            <div className="num">6</div>
            <div className="label">Core tools</div>
          </div>
          <div className="stat-card">
            <div className="num">100%</div>
            <div className="label">Custom-built</div>
          </div>
          <div className="stat-card">
            <div className="num">&lt;24h</div>
            <div className="label">Typical reply time</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;