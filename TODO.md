# Website Content Implementation TODOs

This document provides an exhaustive breakdown of every task required to transform the template into your personal professional website.

Complete the first set of tasks in TODO.md. Ignore the rest of tasks


--- COMPLETE ONLY THESE TASKS

- [ ] Remove the forks and stars info from the open source section because all my projects have 0 forks and 0 starts. It is not a good look.

- [ ] aitrader links to article instead of case study. I'd like it to link to a case study like the rest and include a link to the relevant article in case the user wants further reading on the project. This applies to any other projects that link to articles instead of case studies as well.


- [ ] Add languages to the languages section. The numbers next to each one correspond to experience and confidence in that language, in that order:

- [ ] Python: 5, 5
- [ ] C/C++: 2, 5
- [ ] Java: 1, 3
- [ ] Haskell: 1, 1
- [ ] VHDL: 1, 5
- [ ] Solidity: 2, 3
- [ ] HTML: 5, 5
- [ ] CSS: 5, 5
- [ ] JavaScript: 5, 5
- [ ] TypeScript: 5, 5
- [ ] Verilog: 1, 2
- [ ] E: 1, 2
- [ ] SQL: 3, 3
- [ ] PineScript: 2, 5
- [ ] MatLab / Octave: 3, 3
- [ ] Flutter (Dart): 1, 2

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



## Creative section

- [ ] Specify somewhere that all my art hand-drawn using pencils and black pens.


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
    - [ ] Expand Article 3: "The 78 Data Design Patterns for High-Scale Trading"
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