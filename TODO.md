# Website Content Implementation TODOs

This document provides an exhaustive breakdown of every task required to transform the template into your personal professional website.

Complete the first set of tasks in TODO.md. Ignore the rest of tasks


--- COMPLETE ONLY THESE TASKS


## Articles
- [ ] Change dates on the articles:
    - [ ] Smart contracts security... -> 30 September 2024
    - [ ] Architecture of production grade multi-agent... -> 26 January 2026
    - [ ] Building a Transformer Based Trading System... -> 15 January 2026
    - [ ] Automated Market Making on Solana... -> 22 June 2024
    - [ ] Cervantes... -> 5 Feb 2026
    - [ ] The 75 Data Design Patterns... -> 15 Dec 2025

- [ ] Reorder the display of articles to something that is more attractive to recruiters. I'd like the more interesting articles at the top and the least interesting ones at the bottom.

- [ ] icons in headers for the 75 data patterns articles don't look very good. They're just white weird blobs. Replace them with something better or remove them completely.



## 🌍 Global & Locales
- [ ] Sync Language Switcher with Article Navigation if required <!-- id: 50 -->
- [ ] Remove the View Art buttons from the Creative section art images. <!-- id: 14 -->








## Projects Section

Make the following changes to the information for each project. Reword anything you consider can be written in a more professional and technical tone:

- [ ] **CryptoGPT**
    - [ ] Description at the top of the case study: Custom-trained transformer modell on extensive crypto-financial volume datasets to create an accurate model for financial markets.
    - [ ] The challenge: Developing a model that could accurately predict market direction in 'low-volatility' environments where traditional indicators fail. I set out as a challenge to bypass time-series analysis and apply modern machine learning techniques to predict market direction. The main issue encountered in this type of approach is that market data does not follow a Gaussian distribution, rendering most machine learning models inadequate for the task.
    - [ ] The solution: Implemented a custom Transformer architecture trained on market volume data, utilizing multi-head attention to capture subtle correlation patterns. The key to my approach is in the feature engineering. I focus on capturing time windows where linear regressions have an almost horizontal slope. This ensures that the model is observing data points with a resemblance between the previous and next data point, instead of random price data, as well as capturing periods of time where the volume profile resembles a gaussian dsitribution the most. (You can reword this to make it sound more professional if you want)
    - [ ] The achievements: 
        - [ ] 60.4% accuracy.
        - [ ] Implemented real-time feature engineering pipeline
        - [ ] Scalable training on multiple CPU cores and 100% of GPU capacity.
        - [ ] Validated model without overfitting (There might be a better wording for this). Works for any cryptocurrency asset.
    - [ ] Key Metrics:
        - [ ] 60.4% accuracy on unseen data.
        - [ ] 100% GPU efficiency during training
    - [ ] Add relevant article on a crypto transformer to the project as further reading.
    - [ ] Add public/projects/memory-usage-backtest.png to the project.

- [ ] **TopTrader Platform**:
    - [ ] Description at the top of the case study: They say trading is 90% psychology and 10% strategy. Yet all platforms focus 100% on strategy, completely ignoring psychology. TopTrader merges all trading accounts into one platform, offering automated market screening, risk management, algorithm execution, journalling, behavioural analysis and a unified trading experience.
    - [ ] The challenge:
    Fragmented trading tools and emotional decision-making often lead to inconsistent results for retail and professional traders alike. By building discipline into the trading interface itself, retail traders have guardrails in place that prevent them from making impulsive decisions and help them with the psychological aspects of trading.
    - [ ] The solution:
    TopTrader merges all trading accounts into one platform, offering automated market screening, risk management, algorithm execution, journalling, behavioural analysis and a unified trading experience. 
    It integrates with every major cryptocurrency exchange via the CCXT library.
    It screens the entire cryptocurrency market constantly for new opportunities based on many strategies and signals, saving users countless hours of search.
    It forces emotional regulation exercises and extensive journalling for each trade, ensuring users are always 'kept in check' emotionally.
    Algorithms can be executed and deactivated on command, and users can monitor their performance in real-time. This allows users to leave the screen and trust their algorithms to execute trades on their behalf, not needing to wait for the right moment themselves. This is crucial in reducing decision fatigue when trading.
    Extensive performance analysis is included in the platform to identify where to improve as a trader. Behavioural insights are provided to the user to help them improve on the psychological aspects of trading.
    Strategy-specific interfaces are provided to the user to ensure they have the best possible experience when using their preferred strategies.
    A learn section is included with over a hundred educational videos that cover every single topic on trading, taking you from a complete beginner to the highest of experts.
    - [ ] Achievements:
        - [ ] Integrates with +100 crypto exchanges for real-time execution
        - [ ] Runs multiple algorithms simultaneously
        - [ ] Completely automated trade execution and position sizing to ensure correct risk management.
        - [ ] Comprehensive behavioural analysis and journalling.
    - [ ] Key Metrics:
        - [ ] Real-time market screening of all crypto assets
        - [ ] 5 profitable strategies
        - [ ] 100+ educational videos
    - [ ] If there is any article covering this project, add it as further reading.

- [ ] **Technex**
    - [ ] Description at the top of the case study: (Remains the same)
    - [ ] The challenge: Few consistently profitable trading algorithms exist in the cryptocurrency space. Technex had 4 of them. Offering our investment vehicles to clients led to many clients wanting a custom development project instead of our already existing solutions. This led to the making of Technex, a software intelligence consultancy. 
    - [ ] The solution:
    Founded Technex to provide high-end consultancy and bespoke software engineering, focusing on scalable cloud architectures and fintech solutions. We developed trading platforms, trading algorithms, analytics dashboards, and more for a variety of clients. We did business across the globe, with clients in the UK, US, Mexico, and Spain.
    - [ ] Achievements:
        - [ ] Engineered scalable backend architectures for fintech startups
        - [ ] Successfully delivered 5+ high-impact projects for clients across different industries.
        - [ ] Established a reputation for technical excellence and reliability
        - [ ] Reduced operational costs for clients by up to 40%
    - [ ] Key Metrics:
        - [ ] 5+ high-impact projects delivered
        - [ ] 4+ countries
    - [ ] If there are any articles related to this project, add them as further reading.

- [ ] **CRIPTO**
    - [ ] Description at the top of the case study: (Remains the same)
    - [ ] The challenge: Few consistently profitable trading algorithms exist in the cryptocurrency space. I founded CRIPTO Ltd. on the premise that such a new market would be ripe for finding alpha. It was also a great challenge where I could apply my knowledge on data science and machine learning learnt during my studies.
    - [ ] The solution:
    I first developed an extensive backtesting platform, going through every possible mistake a beginner can make before achieving a robust system 4 years later. I then developed over 1000 strategies including every possible strategy I have ever found and every youtube video I have ever seen on the topic. This does not include the different parameterisations of each strategy, which would bring the total number of strategies a lot higher. Out of these 1000+ strategies, 12 were consistently profitable.
    I then gathered investors to execute the strategy, as well as determined the best legal structure for this venture at a time when the regulatory environment was still very unclear.
    I applied SOLID OOP principles to create a robust and scalable trading monolith.
    Some models achieved +90% accuracy.
    - [ ] Achievements:
        - [ ] Unified connectivity to 100+ major crypto exchanges
        - [ ] Robust trading infrastructure for a new market
        - [ ] Greatly reduced risk in a market where risk management was an afterthought
        - [ ] 12 consistently profitable strategies
    - [ ] Key Metrics:
        - [ ] 1000+ strategies developed & backtested
        - [ ] 12 consistently profitable strategies
        - [ ] 90%+ accuracy on some models
    - [ ] If there are any articles related to this project, add them as further reading.

- [ ] **Freelance AI Consultancy**:
    Everything remains the same except:
    - [ ] The Solution:
    Provided expert consultancy to identify bottleneck processes and implement custom AI-driven automation workflows using LLMs and n8n or make by building custom agents.

- [ ] **AiTrader**:
    - [ ] Description: Developed AiTrader to leverage LLMs for market prediction and automated trade execution, providing users with a completely automated trading system that applies human-like intuition and reasoning to the markets.
    - [ ] The Challenge:
    Most algorithmic systems are incapable of translating human intuition built by traders into the system. This is because they are too rigid and lack the ability to adapt to changing market conditions. I also wanted to implement a system that could orchestrate multiple agents to perform different tasks as a way of sharpening my skills.
    - [ ] The Solution:
    This is where LLMs come into play. I developed a system that could orchestrate multiple agents to perform different tasks, each with their own specialisation. Agents and prompts were created by transcribing +130GB of trading course videos from one of the best traders in the cryptocurrency market. These videos where turned into audio, then text, then specialised topic material, and finally into prompts and context for agents. The system was built using a modular architecture, with a central orchestrator that could delegate tasks to different agents while maintaining a single source of truth across all agents. Evaluator agents using different LLMs are sprinkled across LLM outputs to ensure correctness.
    - [ ] Achievements:
        - [ ] Single source of truth
        - [ ] 20+ specialised sub-agents orchestrated to perform different tasks
        - [ ] Monitoring dashboard to track agent performance
        - [ ] Robust testing for LLMs and prompts following AI Engineering best practices
    - [ ] Key Metrics:
        - [ ] 20+ specialised sub-agents
        - [ ] <40% LLM fail-rate
    - [ ] If there are any articles related to this project, add them as further reading.

- [ ] **ChainChampions NFT Platform**:
    - Most things remain the same.
    - [ ] Achievements:
        - [ ] Successful web3 integration and wallet connectivity
        - [ ] Implemented gasa-optimised smart contracts that follow best practices.
        - [ ] Built a automated payout system that allowed tournaments to be played with real money and prizes in a completely secure and trustless manner.
        - [ ] Secured platform against common smart contract exploits
    - [ ] Key metrics: Do not add any metrics to this project. If possible, do not display this section at all.
    - [ ] If there are any articles related to this project, add them as further reading.

- [ ] **NASDAQ Futures Trading Algorithm**:
    - [ ] Description: Developed a robust trading system for NASDAQ futures for a client, implementing real-time market data processing, custom indicators and automated execution. The system features risk controls and hyper parameter optimisation, enabling consistent performance under various market conditions.
    - [ ] The Challenge:
    The client had a strategy that was working for them that they had been trading manually for years. They wanted to automate the entire process.
    - [ ] The Solution: 
    Engineered a low-latency C++ algorithm using a state machine and direct integration with the interactive brokers API
    - [ ] Achievements: 
        - [ ] 80% ROI in the first year.
        - [ ] <25% drawdown
        - [ ] Backtested the platform hundreds of times to optimise parameters
    - [ ] Key Metrics: 
        - [ ] 80% ROI
        - [ ] <25% drawdown
        - [ ] 100+ simulations
    - [ ] If there are any articles related to this project, add them as further reading.

- [ ] **Lazarus Stock Futures Algorithm**
    This project is currently not contained in the website and needs to be added as a new entry.
    - [ ] Use the following images for this project: public/projects/lazarus.png
    - [ ] Description: Statistical model for Futures market after-hours activity with +90% accuracy.
    - [ ] The Challenge:
    It is well known that large after-hours activity has a strong correlation to market reactions once the market opens. The challenge was to capture these correlations and identify high-probability trade setups.
    - [ ] The Solution:
    The solution was to develop a system that would track large price drops during after-hours for the entire stock market. For each drop, it would look at historical data to determine how likely different % price recoveries were to take place the next day based on previous occurrences of the same scenario. Some stocks would show that after such a large drop, there is a >80% likelihood that the stock will recover at least +3% the next day, and this has historically been the case for more than 500 occurrences. This is considered a high probability setup.
    - [ ] Achievements:
        - [ ] >90% accuracy
        - [ ] ~200% ROI during the summer of 2019
        - [ ] This was my first successful statistical modelling of financial data
    - [ ] Key Metrics:
        - [ ] >90% accuracy
        - [ ] ~200% ROI

- [ ] **Cervantes AI Book Writer**:
    - [ ] Description: (remains the same)
    - [ ] The Challenge: (remains the same)
    - [ ] The Solution:
    Created a multi-agent workflow where different LLM instances specialize in planning, drafting, and critically evaluating the text. High quality prompts following industries best standards were required to achieve good results with smaller models.
    - [ ] Achievements:
        - [ ] Generated coherent narratives
        - [ ] Implemented hierarchical planning agents
        - [ ] Reduced repetitive AI patterns through iterative review
        - [ ] Deployed fully locally for maximum privacy and cost-efficiency
    - [ ] Key Metrics:
        - [ ] 3 agents
        - [ ] $0 API costs
    - [ ] Leave the further reading article as is.

- [ ] **HiveFrequency**:
    - [ ] Change the images to: public/projects/hivefrequency-files.png
    - [ ] Description:
    An experimental music project that combines Generative Adversarial Networks (GANs) and Recurrent Neural Networks (RNNs) to generate dynamic, evolving musical patterns in real-time.
    - [ ] The Challenge:
    Recent advances in real‐time AI music generation have pushed the boundaries of creative expression. However, many of these models are optimized for offline generation with limited interactive potential. In contrast, HiveFrequency delivers low-latency dynamic live performance integration. The goal of this project is a unique contribution to the field of AI music generation: to generate authentic music in real time while allowing for seamless human–AI co-creation.
    - [ ] The Solution:
    Developed a novel hybrid AI model integrating GANs for high-fidelity audio segment creation and RNNs to maintain temporal coherence. The system utilizes advanced compression techniques and GPU parallel processing to achieve real-time streaming with under 20ms latency. Built up from basic signal generation in Python using torchFX, the architecture evolved to feature complex multi-track generation, custom MIDI generators for basslines, and a reinforcement learning component that dynamically adjusts parameters in response to real-time user input during live performances.
    - [ ] Achievements:
        - [ ] Achieved an ultra-low average latency of 18 milliseconds.
        - [ ] Ran continuously for 12 hours without crashes during live performance testing.
        - [ ] Scored an average of 8.8/10 in user evaluations for authenticity and creative impact.
        - [ ] Built an interactive sequencer operating in a continuous 16-bar looping system with extensive MIDI integration.
    - [ ] Key Metrics:
        - [ ] 18ms average latency
        - [ ] 12 hours continuous stability
        - [ ] 4.2/5 PEAQ audio quality score
    - [ ] If there are any articles related to this project, add them as further reading.


- [ ] **Linktrees Personal Link Websites**:
    - [ ] Desctiption: (remains the same)
    - [ ] The Challenge: (remains the same)
    - [ ] The Solution: (remains the same)
    - [ ] Achievements:
        - [ ] Mobile first design
        - [ ] Minimal weight
        - [ ] Many different branding styles
    - [ ] Key Metrics:
        - [ ] 11 templates

- [ ] **Neurodivergent Consulting**:
    - [ ] Description:
    A premium consulting website built with a focus on accessibility and clean design. Features a modern UI using React, TailwindCSS, and Shadcn UI components.
    - [ ] The Challenge:
    Designing and implementing a UI that is highly professional yet accessible and calming for users with sensory sensitivities.
    - [ ] The Solution:
    Utilized a soft color palette and spacious layout with subtle micro-interactions to create a focused, low-friction user experience. It uses Next.JS and GCP serverless functions for easay deployment.
    - [ ] Achievements:
        - [ ] WCAG accessibility standards
        - [ ] Responsive design
    - [ ] Key Metrics: Remove this section entirely.

- [ ] **3D Snake Minigame**:
    - [ ] Description:
    Originally developed in C, this project was translated to Three.js to be showcased in a web environment. It features a fully interactive 3D version of the classic snake game.
    - [ ] The Challenge: 
    This project was aimed at getting my initial bearings of C and developing GUIs in C.
    - [ ] The Solution:
    A 3D snake game with visual transitions between faces of a cube and mappings between faces for when the snake goes around a corner.
    - [ ] Achievements:
        - [ ] 3D environment
        - [ ] Player controls for keyboard and touch
        - [ ] Successful port from desktop-first C to web-first JS
    - [ ] Key Metrics:
        - [ ] Remove this section entirely.

- [ ] **Dartboard Object Detection**
    - [ ] Change achievement to 100% accuracy on provided dataset.
    - [ ] Remove key metrics section entirely.
    - [ ] Remove Real-time processing achievement.








--- IGNORE TASKS BELOW HERE


- [ ] **Metadata & SEO (`app/layout.tsx`)**
    - [ ] Update `title` metadata to the new accurate information
    - [ ] Update `description` metadata to the new accurate information
    - [ ] Replace OpenGraph (`og:image`) placeholder images



## 💼 Resume Hub (`data/resume.ts`)
- [ ] **PDF Deliverables (`public/resumes/`)**
    - [ ] Add `resume-backend.pdf`
    - [ ] Add `resume-quant.pdf`
    - [ ] Add `resume-web3.pdf`
    - [ ] Add `resume-ai.pdf`
    - [ ] Add `resume-web.pdf`


## Projects

- [ ] Update the information for this project:
    - [ ] **Illuvium Fusion**:
        - [ ] Description:
        - [ ] The Challenge:
        - [ ] The Solution:
        - [ ] Achievements:
        - [ ] Key Metrics:
        - [ ] If there are any articles related to this project, add them as further reading.



- [ ] ChainChampions is missing website.
- [ ] HiveFrequency project card has no image.
- [ ] Cruzcampo tapeando project card has no image.
- [ ] Cruzcampo tapeando is missing website.
- [ ] Illuvium fusion is missing website.



- [ ] **Cruzcampo Tapeando**:
    - [ ] Use the following images for this project:
    - [ ] Description:
    - [ ] The Challenge:
    - [ ] The Solution:
    - [ ] Achievements:
    - [ ] Key Metrics:
    - [ ] If there are any articles related to this project, add them as further reading.
