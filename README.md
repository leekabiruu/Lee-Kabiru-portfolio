Dev Kabiru — Portfolio
What's here
App.js — top-level layout
App.css — all design tokens + styles (colors, fonts, layout)
components/ — Navbar, Hero, About, CallToAction, Portfolio, Contact, Footer


1. Set up locally

If you don't already have a React project:

bash
npx create-react-app dev-kabiru-portfolio
cd dev-kabiru-portfolio

Then:

Replace src/App.js with the App.js here
Replace src/App.css with the App.css here
Copy the components/ folder into src/components/
Delete the CRA boilerplate you don't need (logo.svg, etc.)

Run it:

bash
npm start
2. Fill in the placeholders
components/Portfolio.js — swap Project Two and Project Three with your real projects (title, description, tags, live url)
components/About.js — edit the second paragraph and the stat numbers to be accurate
Double-check Portfolio.js's tags for the butchery project match the actual stack you used (I guessed React + Vercel from the URL)
3. Deploy to GitHub Pages
bash
npm install --save-dev gh-pages

In package.json, add:

json
"homepage": "https://leekabiruu.github.io/dev-kabiru-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

Then:

bash
git init
git remote add origin https://github.com/leekabiruu/dev-kabiru-portfolio.git
git add.
git commit -m "Initial portfolio"
git push -u origin main
npm run deploy 
