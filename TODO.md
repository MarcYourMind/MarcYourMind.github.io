# Website Content Implementation TODOs

This document provides an exhaustive breakdown of every task required to transform the template into your personal professional website.

---

## 🌍 Global & Locales
- [x] **Internationalization Sync (`locales/*.json`)**
    - [x] Sync `en.json` keys with updated data
    - [ ] Translate `es.json` (Spanish) for all new content
    - [ ] Translate `fr.json` (French) for all new content
- [ ] **Metadata & SEO (`app/layout.tsx`)**
    - [ ] Update `title` metadata to the new accurate information
    - [ ] Update `description` metadata to the new accurate information
    - [ ] Replace OpenGraph (`og:image`) placeholder images

## 🏠 Home Page (`app/(home)/page.tsx`)

- [ ] **Testimonials Section**
    - [ ] Replace "Sarah Chen" entry (Name, Role, Quote, Avatar initials)
    - [ ] Replace "James Wilson" entry (Name, Role, Quote, Avatar initials)
    - [ ] Replace "Elena Rodriguez" entry (Name, Role, Quote, Avatar initials)


## 💼 Resume Hub (`data/resume.ts`)
- [ ] **PDF Deliverables (`public/resumes/`)**
    - [ ] Add `resume-backend.pdf`
    - [ ] Add `resume-quant.pdf`
    - [ ] Add `resume-web3.pdf`
    - [ ] Add `resume-ai.pdf`
    - [ ] Add `resume-web.pdf`



## 📝 Articles (`content/articles/`)
- [ ] **Article: Building Low-Latency Trading Systems**
    - [ ] Rewrite full MDX content based on NASDAQ project experience
- [ ] **Article: Smart Contract Security**
    - [ ] Rewrite full MDX content based on Chain Champions experience
- [ ] **Article: Scaling Backend Systems**
    - [ ] Rewrite full MDX content based on Brite Payments/Technex experience
- [ ] **Article: Machine Learning Pipelines**
    - [ ] Rewrite full MDX content based on Coursera/HuggingFace certifications
- [ ] **Article: Automated Market Making on Solana**
    - [ ] Rewrite full MDX content based on Share Inc. experience



## Projects Section

- **Nasdaq**
    - [ ] Add the missing image: public/projects/nasdaq.jpg
- [ ] Buttons:
    Each project has 3 buttons: github, open link and case study. Not all projects have all three buttons. All projects will have a case study button, but only projects that have a website in the websites/ folder will have an open link button. Only projects that are open source will have a github button.
    - [ ] Fix this so that the buttons are displayed correctly
    - [ ] Add a case study page for each project where I can talk about the project in detail. The case study should be a page that is linked to from the project card. Given the current data structure for the projects, I'm not sure what whould be the best way to implement all these pages. You decide what is the best way to implement it. I'm considering each case study to be an article and the case study button to link to the article. This seems like it is the best idea.
    - [ ] For the projects that have a website in the websites/ folder, the open link button should link to the website. My intention is to host these websites within this website since they are not live anywhere else. They are all static websites, built and ready for distribution. For the projects that are already there, figure out the best way to hook them up to the project cards so that the user can view their demo websites. For example for the snake 3D project they should be able to open the website and play the game.
    - [ ] Open project websites in a new tab.

## Projects missing

### 3D Snake Minigame

Originally in C++, it is now translated to Three.js to display in my portfolio. 3D Snake game.
The websites/ folder contains a snake3d.html file with the game. The project should link to this page.

### Cervantes AI Book Writer

A multi-agent story writer that uses LLMs to write stories. It is a work in progress. The goal is to create the interdimensional cable from Rick and Morty with infinite stories generated on the go. It uses local LLMs to write stories via ollama. It is built with Python and uses Gradio for the interface.The project should link to the github repo: https://github.com/MarcYourMind/Cervantes-AI-Story-Writer

### Linktrees personal link websites

Mobile first linktree style websites using different brandings. They are all stores in websites/linktrees folder, where each html is a different linktree. The project should link to the github repo: https://github.com/MarcYourMind/linktrees

### Neurodivergent Consulting

Freelance Coaching website for a Neurodivergent coach. Build with React Typescript, TailwindCSS and Shadcn UI. The project should link to the github repo: https://github.com/MarcYourMind/aaconsulting

### HiveFrequency

GAN+RNN design for a live music generator. The project should link to the github repo: https://github.com/MarcYourMind/HiveFrequency

### Cruzcampo Tapeando
Full-Stack web app for one of the largest beer brands in Spain.
Developed in 48 hours as an emergency project to save their campaign.

### Illuvium Fusion Simulator
Illuvial Fusion simulator for the Illuvium Web3 NFT game. It simulates the fusion of three illuvials and scans the market for optimal fusion ideas that will generate the most profits for NFT collectors. The image for this project is in public/projects/fusion.JPG

### Computer Vision: Dartboard Object Detection
Real-time dartboard object detection using OpenCV and C++. The project should link to the github repo: https://github.com/MarcYourMind/dartboard-object-detection. 