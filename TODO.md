# Website Content Implementation TODOs

This document provides an exhaustive breakdown of every task required to transform the template into your personal professional website.

Complete the first set of tasks in TODO.md. Ignore the rest of tasks


--- COMPLETE ONLY THESE TASKS

## Creative section


- [x] Articles lack spacing between paragraphs. Fix the spacing and font sizing of different elements.

- [ ] Table of Contents should advance as the user scrolls down the article. Instead it currently remains on the first element despite the user going down the article until the end, signalling that the user is still in the first section when he is clearly not. Fix this.


--- IGNORE TASKS BELOW HERE

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

## About Page

- [ ] Update the text to something written by me.




## Projects Section


- [ ] ChainChampions is missing website.
- [ ] HiveFrequency project card has no image.
- [ ] Cruzcampo tapeando project card has no image.
- [ ] Cruzcampo tapeando is missing website.
- [ ] Illuvium fusion is missing website.


## Articles Section


- [ ] Properly write out each technical article as a deep-dive long-form piece (Medium-style).
    - [x] Expand Article 1: "Building Low-Latency Trading Systems: The Plutus Architecture"
    - [ ] Expand Article 2: "Smart Contract Security in Web3 Gaming"
    - [ ] Expand Article 4: "Architecture of a Production-Grade Multi-Agent Trading System"
    - [ ] Expand Article 5: "Building a Transformer-Based Trading System"
    - [ ] Expand Article 6: "Automated Market Making on Solana"
    - [ ] Expand Article 7: "Cervantes: The Autonomous AI Multi-Agent Storyteller"
    - [ ] Expand Article 8: "The Nervous System of Scalable Trading: Event-Driven Design"
    - [ ] Verify content rendering and readability






Regarding tech stacks for each project, here is a list:

CryptoGPT is done with Python, PyTorch, Transformers, Pandas, Scikit-learn, Matplotlib.
TopTrader is done with React, TypeScript, Next, FastAPI, Python, Pandas, TradingView, Scikit-learn.
Technex is done with React, TypeScript, Node.js, Google Cloud Platform, serverless functions, microservices.
Technex Consultancy is done with HTML, CSS, N8N, Make, LLMs.
AITrader is done with Python, LangChain, FastAPI, LLMs, ollama, pydantic.
Chain Champions is done with Node.js, React, Solidity, TypeScript, Google Cloud Platform, SQL.
Nasdaq is done with C++. and Interactive Brokers.
Solana market maker is done with Radium SDK, Web3.js, Node.js, Solana blockchain, Google Cloud Platform.
Chain Champions is done with Ethereum blockchain.
GoToVan is done with React, Node.js, Google Maps API, Graph, optimization algorithms, Google Cloud Platform, serverless functions.
Crypto trading infrastructure is done with Python, Pandas, CCXT, Binance Exchange, scikit-learn, SQL, TA-Lib, multiprocessing, and threading.
BrightPayments is done with Python, FastAPI, and PSD2 Open Banking API.
Snake3D is done with Three.js, JavaScript, HTML5, and C++.
Cervantes is done with Gradio, Python, LangChain, Ollama, multi-agent systems.
Linktrees is done with vanilla HTML, CSS, and javascript.
Neurodivergent Consulting is done with TypeScript, Google Cloud Platform, Tailwind CSS, Next.JS,
High frequency is done with Python, PyTorch, RNN, GAN, FFmpeg, tqdm, Torch Audio, Torch FX.
Cruzcampo Tapeando is done with HTML, React, Node.js, SQL, Google Cloud Platform.
Illuvium Fusion is done with Google Cloud Platform, React, Web3.js, TypeScript, Ethereum Blockchain, wagmi, node.js.
Dartboard detection is done with OpenCV, C++, computer vision, and object detection algorithms.