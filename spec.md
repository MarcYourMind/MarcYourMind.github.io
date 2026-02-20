Got you — these additions make the site way more powerful and differentiated. The key is to make AntiGravity treat this like a multi-track professional identity portfolio, not just “one resume page”.

Here’s an upgraded maxed-out prompt with your new requirements baked in (still copy/paste ready):

🚀 AntiGravity Prompt (Expanded, Max Prompt Engineering)

You are an expert-level senior frontend engineer + UI/UX product designer with award-winning design taste. You are building a modern, premium, dark-themed portfolio + resume website for an elite multi-domain software engineer.

This developer has multiple professional specializations (Quant, Backend, Blockchain/Web3, AI/Data Science, Web). The website must make this feel like a strength and not confusing.

The site should feel like a mix of:

Stripe-level polish

Apple-like minimalism

Vercel/Linear-style UI smoothness

Awwwards-worthy layout and animations

The UI must be extremely impressive, modern, dark, sleek, and interactive.

✅ TECH STACK REQUIREMENTS

Next.js (App Router)

TypeScript

TailwindCSS

Framer Motion animations

Lucide icons

Clean component architecture

Fully responsive (mobile/tablet/desktop)

SEO optimized (metadata, OpenGraph, Twitter cards)

Performance optimized (lazy loading, optimized images)

Accessibility best practices (ARIA labels, keyboard nav)

Smooth page transitions

Reusable design system components

🌍 MULTI-LANGUAGE SUPPORT (IMPORTANT)

The user is fluent in:

English

Spanish

French (very strong)

Implement multilingual support with:

English (default)

Spanish

French

Use Next.js i18n routing or a clean internal translation system.

Requirements:

Language switcher in navbar (dropdown or pill toggle)

Smooth animated transitions when switching language

All UI text should be translatable (do not hardcode English everywhere)

Store translations in /locales/en.json, /locales/es.json, /locales/fr.json

Use clean translation keys.

🎨 DESIGN REQUIREMENTS (PREMIUM DARK THEME)
Color Palette

background: deep black / charcoal gradients

accents: electric blue + neon purple + teal glow

subtle secondary highlight: gold/pink for special accents

glassmorphism (blur, transparent panels)

subtle grain/noise overlay

elegant gradient lighting

UI Style Requirements

Large rounded corners

Soft shadows, subtle glows

Microinteractions everywhere

Smooth hover transitions

Sticky navbar with blur and border glow

Elegant typography pairing:

Inter (body)

Space Grotesk / Sora (headings)

Animations must feel expensive, smooth, and modern — not excessive.

📌 CORE SITE STRUCTURE (PAGES)
1. HOME /

Must include:

Hero section with name, title, short introduction

Animated call-to-action buttons:

View Projects

Download Resume

GitHub

Quick stats (years, projects, open source contributions, etc.)

Featured Projects section (3–6 cards)

Skills section with categorized tech stack icons

Open Source highlight section

Articles preview section (latest 3 articles)

Testimonials section (dummy but professional)

Contact CTA section

Footer with social links

Hero must have an animated background:

animated gradient mesh OR moving glow blobs OR subtle particles

premium feel

Include an “easter egg” section (hidden terminal widget / interactive component).

2. PROJECTS /projects

Full project gallery with:

Search bar

Filters by tag (Frontend, Backend, AI, Quant, Web3, Data Science, Open Source)

Project cards containing:

title

short description

tech stack chips

GitHub link

Live demo link

thumbnail image

Smooth animated filtering and search transitions

Clicking a project opens project detail page

3. PROJECT DETAILS /projects/[slug]

Case-study style page:

Hero banner

Overview section

Problem → Solution format

Tech stack

Screenshots carousel

Features list

Challenges & Solutions section

GitHub + Live demo buttons

Related projects section

This must feel like a professional engineering case study.

4. RESUME HUB PAGE /resume

This is NOT a single resume page. The developer has multiple CVs, and recruiters should be able to quickly select the right one.

Must include:

A premium resume hub UI with selectable tracks:

Backend Engineer CV

Quant Developer CV

Web3 Developer / Blockchain CV

AI / Machine Learning CV

Fullstack Web CV

The UI should display these as sleek selectable cards with icons and subtle glow.

When selecting a CV:

show a tailored resume view

show tailored skills, tailored experience, tailored projects

show a tailored “Download PDF” button

Each CV should have its own dedicated route:

/resume/backend

/resume/quant

/resume/web3

/resume/ai

/resume/web

Resume pages must include:

timeline for experience (animated)

education

certifications

achievements

skill matrix (with categories)

languages spoken section (English, Spanish, French)

Also generate placeholder PDF resume files and include them in /public/resumes/.

5. OPEN SOURCE /open-source

Showcase GitHub repos with:

repo cards

stars, forks, language tags

description

link to repo

sorting options (stars, recent, alphabetical)

contribution CTA

Use mock data but structure it so it can later connect to GitHub API.

6. ARTICLES SECTION (IMPORTANT)
Articles Index Page /articles

Create an articles hub with:

featured article section

categories/tags filter

search bar

article cards with:

title

excerpt

tags

date

reading time

beautiful typography optimized for reading

Article Detail Page /articles/[slug]

Each article page must include:

title, date, reading time

author section

tags

table of contents (auto-generated)

syntax-highlighted code blocks

share buttons

“related articles” section

animated scroll progress bar at top

Articles should support Markdown or MDX.

Provide sample starter articles

Include at least 5 high-quality sample articles such as:

“Building Low-Latency Trading Systems in Modern C++”

“Smart Contract Security: The 10 Most Common Exploits”

“Scaling Backend Systems with Event-Driven Architecture”

“Machine Learning Pipelines: From Research to Production”

“Building a Clean Portfolio in Next.js with Design Systems”

These should have real structure, headings, and some code snippets.

Store articles in /content/articles/*.mdx.

7. ABOUT /about

Include:

biography section

developer philosophy

tech journey timeline

specialization breakdown (Backend, Quant, Web3, AI, Web)

“Outside of coding” section

professional headshot placeholder

Make this page elegant and story-driven.

8. CONTACT /contact

Must include:

contact form with validation

toast confirmation

animated background

email/socials displayed

optional Calendly-style CTA placeholder

⭐ MUST-HAVE PREMIUM UI/FEATURES

Sticky navbar with blur + active route highlighting

Animated page transitions

Glassmorphism cards

Scroll-triggered reveal animations

Project card hover tilt + glow

Skeleton loaders

Toast notifications

Smooth scrolling

Keyboard navigation support

High-end typography and spacing

🧠 MULTI-SPECIALIZATION ARCHITECTURE REQUIREMENT

The portfolio must support the idea that this developer is “multi-track” but still coherent.

Required:

Add a “Specializations” section that displays:

Backend Engineering

Quant / Trading Systems

Web3 / Blockchain

AI / ML Engineering

Fullstack Web

Clicking one should filter projects + highlight relevant skills + suggest the matching resume.

This should feel extremely modern and interactive.

📂 DATA STRUCTURE REQUIREMENTS

Store structured content in:

/data/projects.ts

/data/resume.ts

/data/opensource.ts

/data/specializations.ts

/data/socials.ts

Resume data must include multiple versions.

Projects should have tags linking them to specializations.

🧱 COMPONENT REQUIREMENTS

Create reusable components:

Navbar with language selector

Footer

ProjectCard

ArticleCard

TechBadge

SkillGrid

SectionHeading

AnimatedBackground

Button variants

Timeline component

Toast system

Modal/dialog

Tag filter chips

MDX renderer with syntax highlighting

⚡ ANIMATION REQUIREMENTS

Use Framer Motion:

stagger animations for cards

scroll reveal sections

page transitions

hover tilt and glow

smooth easing (premium feel)

No cheap “bouncy” animation. Everything should feel subtle and expensive.

🛠️ CODE QUALITY REQUIREMENTS

Strict TypeScript

No messy inline code

Modular file structure

Clean naming conventions

No deprecated Next.js APIs

No unused dependencies

App must run with npm install && npm run dev

🔥 DEPLOYMENT READY

The output must be a complete deployable codebase:

package.json with dependencies

README.md with setup instructions

environment variable placeholders if needed

ready for Vercel deployment

📌 OUTPUT REQUIREMENT

Output in this order:

Full folder/file tree

Then provide FULL code for every file

No skipping code

Ensure everything compiles with no missing imports

FINAL QUALITY BAR

This portfolio must look like it belongs to someone capable of working at:
Google, Citadel, Jane Street, Meta, Stripe, OpenAI, Coinbase, Tesla, Vercel

If any section looks generic, redesign it until it looks premium.

Make it dark, modern, visually stunning, and highly interactive.

EXTRA BONUS (DO THIS)

Add an interactive “Developer Console” easter egg component:

hidden keyboard shortcut like Ctrl + K

opens a command palette

user can type commands like:

“view projects”

“open resume quant”

“switch language spanish”

“go contact”

This should be a premium feature and super impressive.

Now generate the entire codebase.