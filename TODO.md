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

## 🧑‍💻 About Page (`app/about/page.tsx`)
- [ ] **Experience Banner**
    - [ ] Update the stats that appear below my head photo:
        - [ ] Update "6+ Years of Experience" to "6+ Years Building Products
        - [ ] Update "30+ Production Systems" to "From Idea → Production"
        - [ ] Update "Infinite Coffee Loop" to "Fueled by Curiosity"
        - [ ] Add another stat: "Product-Minded Engineer"
        - [ ] Update the icons accordingly
- [ ] **Philosophy Section**
    - [ ] Update "Performance First" description
    - [ ] Update "Clean Architecture" description
    - [ ] Update "User Centric" description

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

## Certifications
- [ ] Change the button for the coursera machine learning course to "Lost in Battle" like the other one.

## Modifications

The following information is wrong and needs to be changed to the correct information:

- [x] **Home Page**
    - [ ] 30+ starred repos is not correct and must be changed to something more interesting. I have 11 starred repos, but I don't think it's something I want to brag about. 


## Projects missing

### C++ Snake Minigame

Originally in C++, it is now translated to Three.js to display in my portfolio.
The websites/ folder will contain a snake.html file with the game. The project should link to this page.

### Cervantes AI Book Writer

A multi-agent story writer that uses LLMs to write stories. It is a work in progress. The goal is to create the interdimensional cable from Rick and Morty with infinite stories generated on the go.
