import React from 'react';


const projects = [
  {
    title: 'Nairobi Budget Butchery',
    desc: 'An ordering site for a Kasarani-based butchery — farm-fresh meat, chicken, fish, sausages and pet food, with a WhatsApp-first ordering flow for customers.',
    tags: ['React', 'Vercel'], // double-check / adjust to your actual stack
    url: 'https://nairobi-budget-butchery-4q8p.vercel.app/',
    isPlaceholder: false,
  },
  {
    title: 'SnaxBite',
    desc: 'An e-commerce site for a Kenyan snack brand — crisps, popcorn and masala peanuts. Includes a build-a-box shop flow, a flavour explorer, pricing tables, and a trade page for shops and distributors.',
    tags: ['React', 'Vercel'], // double-check / adjust to your actual stack
    url: 'https://snaxbite.vercel.app/',
    isPlaceholder: false,
  },
  {
    title: 'Project Three',
    desc: 'Swap this with a real project: what it does, who it\u2019s for, and the problem it solves.',
    tags: ['Stack', 'Here'],
    url: '#',
    isPlaceholder: true,
  },
];

function ProjectCard({ project }) {
  const { title, desc, tags, url, isPlaceholder } = project;
  const hostname = (() => {
    try { return new URL(url).hostname; } catch { return 'your-link-here.dev'; }
  })();

  return (
    <div className={`project-card ${isPlaceholder ? 'placeholder' : ''}`}>
      <div className="browser-chrome">
        <div className="browser-dots"><span></span><span></span><span></span></div>
        <div className="browser-url">{hostname}</div>
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-tags">
          {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {!isPlaceholder && (
          <a className="project-link" href={url} target="_blank" rel="noreferrer">
            View live &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <p className="eyebrow">02 &mdash; Work</p>
      <h2 className="section-heading">Things I&rsquo;ve built</h2>
      <div className="project-grid">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}

export default Portfolio;