import { SpecializationType } from "./specializations";

export interface Metric {
    label: string;
    value: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    thumbnail: string;
    techStack: string[];
    tags: SpecializationType[];
    githubUrl: string;
    liveUrl: string;
    screenshots: string[];
    featured: boolean;
    articleSlug?: string;
    challenge?: string;
    solution?: string;
    achievements?: string[];
    metrics?: Metric[];
}

export const projects: Project[] = [
    {
        slug: "cryptogpt",
        title: "CryptoGPT",
        description: "Custom transformer model trained on ranging market volume data.",
        longDescription: "Custom-trained transformer model on extensive crypto-financial volume datasets to create an accurate model for financial markets.",
        thumbnail: "/projects/transformer.png",
        techStack: ["Python", "PyTorch", "Transformers", "Pandas", "Scikit-learn", "Matplotlib"],
        tags: ["AI", "Quant"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: [
            "/projects/transformer.png",
            "/projects/calibration.png",
            "/projects/prediction_dist.png",
            "/projects/training_complete.png",
            "/projects/training_transformer2.png",
            "/projects/memory-usage-backtest.png"
        ],
        featured: true,
        challenge: "Developing a model that could accurately predict market direction in 'low-volatility' environments where traditional indicators fail. The goal was to bypass time-series analysis and apply modern machine learning techniques to predict market direction. The core challenge: market data does not follow a Gaussian distribution, rendering most machine learning models inadequate for the task.",
        solution: "Implemented a custom Transformer architecture trained on market volume data, utilising multi-head attention to capture subtle correlation patterns. The key to the approach lies in the feature engineering: by capturing time windows where linear regressions have an almost horizontal slope, the model observes periods where volume profiles most closely resemble a Gaussian distribution — ensuring the data is structurally consistent rather than random price noise.",
        achievements: [
            "60.4% accuracy on unseen data",
            "Implemented real-time feature engineering pipeline",
            "Scalable training on multiple CPU cores and 100% of GPU capacity",
            "Validated model generalisation without overfitting — works for any cryptocurrency asset"
        ],
        metrics: [
            { label: "accuracy", value: "60.4%" },
            { label: "gpuEfficiency", value: "100%" }
        ],
        articleSlug: "transformer-trading-systems"
    },
    {
        slug: "toptrader",
        title: "TopTrader Platform",
        description: "Smart trading platform focused on discipline for crypto with automated market screening, sentiment analysis and risk management.",
        longDescription: "They say trading is 90% psychology and 10% strategy. Yet all platforms focus 100% on strategy, completely ignoring psychology. TopTrader merges all trading accounts into one platform, offering automated market screening, risk management, algorithm execution, journalling, behavioural analysis and a unified trading experience.",
        thumbnail: "/projects/toptrader.jpg",
        techStack: ["React", "TypeScript", "Next.JS", "FastAPI", "Python", "PostgreSQL", "Pandas", "TradingView", "Scikit-learn", "CCXT"],
        tags: ["Web", "Quant", "Backend"],
        githubUrl: "#",
        liveUrl: "/websites/toptrader/index.html",
        screenshots: [
            "/projects/toptrader.jpg",
            "/projects/charts.png",
            "/projects/eternal-strategy.png",
            "/projects/learn.png",
            "/projects/trade-interface.png",
            "/projects/watchlists.png",
            "/projects/behaviour.jpg"
        ],
        featured: true,
        challenge: "Fragmented trading tools and emotional decision-making often lead to inconsistent results for retail and professional traders alike. By building discipline into the trading interface itself, retail traders gain guardrails that prevent impulsive decisions and support the psychological aspects of trading.",
        solution: "TopTrader merges all trading accounts into one platform, offering automated market screening, risk management, algorithm execution, journalling, behavioural analysis, and a unified trading experience. It integrates with every major cryptocurrency exchange via the CCXT library. Automated market screening constantly scans the entire cryptocurrency market for new opportunities based on multi-signal strategies, saving users countless hours. Emotional regulation exercises and extensive journalling are enforced for each trade, ensuring users remain disciplined. Algorithms can be activated and monitored in real-time, reducing decision fatigue. Extensive behavioural insights help users improve the psychological aspects of their trading. Over a hundred educational videos take users from beginner to expert.",
        achievements: [
            "Integrates with +100 crypto exchanges for real-time execution",
            "Runs multiple algorithms simultaneously",
            "Completely automated trade execution and position sizing for correct risk management",
            "Comprehensive behavioural analysis and journalling"
        ],
        metrics: [
            { label: "marketScreening", value: "Real-time" },
            { label: "strategies", value: "5 profitable" },
            { label: "education", value: "100+ videos" }
        ]
    },
    {
        slug: "technex",
        title: "Technex",
        description: "Leading software development and consulting firm.",
        longDescription: "Founded Technex to provide high-end consultancy and bespoke software engineering, focusing on scalable cloud architectures and fintech solutions. We developed trading platforms, trading algorithms, analytics dashboards, and more for a variety of clients across the globe.",
        thumbnail: "/projects/technex.jpg",
        techStack: ["React", "TypeScript", "Node.js", "Google Cloud Platform", "Serverless Functions", "Microservices"],
        tags: ["Web", "Backend"],
        githubUrl: "#",
        liveUrl: "/websites/technex/index.html",
        screenshots: [
            "/projects/technex.jpg",
            "/projects/technex-portfolios.jpg",
            "/projects/technex-algorithms.jpg",
            "/projects/technex-plutus.jpg",
            "/projects/technex-dev.jpg"
        ],
        featured: true,
        challenge: "Few consistently profitable trading algorithms exist in the cryptocurrency space. Technex had 4 of them. Offering these investment vehicles to clients led many to request custom development projects instead of existing solutions — which gave rise to Technex as a software intelligence consultancy.",
        solution: "Founded Technex to provide high-end consultancy and bespoke software engineering, focusing on scalable cloud architectures and fintech solutions. We developed trading platforms, trading algorithms, analytics dashboards, and more for a variety of clients. We did business across the globe, with clients in the UK, US, Mexico, and Spain.",
        achievements: [
            "Engineered scalable backend architectures for fintech startups",
            "Successfully delivered 5+ high-impact projects for clients across different industries",
            "Established a reputation for technical excellence and reliability",
            "Reduced operational costs for clients by up to 40%"
        ],
        metrics: [
            { label: "projectsDelivered", value: "5+" },
            { label: "countries", value: "4+" }
        ]
    },
    {
        slug: "technexConsultancy",
        title: "Freelance AI & Automation Consultancy",
        description: "Specialized AI and automation consultancy services to streamline bottleneck processes for companies.",
        longDescription: "Offered expert AI and automation consultancy services to streamline bottleneck processes for various companies, focusing on operational efficiency and strategic integration of AI technologies.",
        thumbnail: "/projects/technex-ai.jpg",
        techStack: ["HTML", "CSS", "N8N", "Make", "LLMs", "Automation"],
        tags: ["AI", "Backend"],
        githubUrl: "#",
        liveUrl: "https://technex-fe413.web.app/",
        screenshots: ["/projects/technex-ai.jpg", "/projects/make.jpg"],
        featured: true,
        challenge: "Many businesses lack the internal expertise to identify and automate repetitive, time-consuming manual processes using AI.",
        solution: "Provided expert consultancy to identify bottleneck processes and implement custom AI-driven automation workflows using LLMs and n8n or Make by building custom agents.",
        achievements: [
            "Automated core workflows for multiple SMEs",
            "Integrated custom LLM agents for data processing",
            "Conducted comprehensive process auditing and optimisation",
            "Improved operational throughput by an average of 60%"
        ]
    },
    {
        slug: "aitrader",
        title: "AiTrader",
        description: "AI-powered trading assistant and market analysis platform.",
        longDescription: "Developed AiTrader to leverage LLMs for market prediction and automated trade execution, providing users with a completely automated trading system that applies human-like intuition and reasoning to the markets.",
        thumbnail: "/projects/aitrader.png",
        techStack: ["Python", "LangChain", "FastAPI", "LLMs", "Ollama", "Pydantic"],
        tags: ["AI", "Quant", "Web"],
        githubUrl: "#",
        liveUrl: "/websites/aitrader/index.html",
        screenshots: ["/projects/aitrader.png", "/projects/agents.png"],
        featured: true,
        articleSlug: "machine-learning-pipelines-production",
        challenge: "Most algorithmic systems are incapable of translating human intuition built by traders into the system. They are too rigid and lack the ability to adapt to changing market conditions. The objective was to implement a system that could orchestrate multiple agents performing different tasks while incorporating human-like reasoning.",
        solution: "LLMs provided the solution. A system was developed to orchestrate multiple agents, each with its own specialisation. Agents and prompts were created by transcribing +130GB of trading course videos from one of the best traders in the cryptocurrency market — converted from video to audio, then to text, then to specialised topic material, and finally into prompts and agent context. The system was built using a modular architecture with a central orchestrator maintaining a single source of truth across all agents. Evaluator agents using different LLMs are interspersed throughout to ensure correctness.",
        achievements: [
            "Single source of truth architecture across all agents",
            "20+ specialised sub-agents orchestrated to perform different tasks",
            "Monitoring dashboard to track agent performance",
            "Robust testing for LLMs and prompts following AI Engineering best practices"
        ],
        metrics: [
            { label: "subAgents", value: "20+" },
            { label: "llmFailRate", value: "<40%" }
        ]
    },
    {
        slug: "chainchampions",
        title: "Chain Champions NFT Platform",
        description: "Web3 gaming tournament platform with Solidity smart contracts for escrow, buy-ins, and payouts.",
        longDescription: "An NFT-driven tournament platform where users can compete in blockchain-based gaming. Features secure smart contracts for managing entry fees and automated distribution of prize pools, all running on a scalable cloud infrastructure.",
        thumbnail: "/projects/chainchampions.png",
        techStack: ["Solidity", "React", "Node.js", "TypeScript", "Google Cloud Platform", "SQL", "Ethereum Blockchain"],
        tags: ["Web3", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/chainchampions.png", "/projects/chainchampions1.jpg", "/projects/chainchampions2.jpg"],
        featured: true,
        articleSlug: "smart-contract-security-exploits",
        challenge: "Ensuring fair play and secure, automated prize distribution in a trustless gaming environment was a major hurdle.",
        solution: "Developed robust Solidity smart contracts for escrow and tournament management, coupled with a high-performance backend to sync gaming states.",
        achievements: [
            "Successful web3 integration and wallet connectivity",
            "Implemented gas-optimised smart contracts that follow best practices",
            "Built an automated payout system that allowed tournaments to be played with real money and prizes in a completely secure and trustless manner",
            "Secured platform against common smart contract exploits"
        ]
    },
    {
        slug: "nasdaq",
        title: "NASDAQ Futures Trading Algorithm",
        description: "Developed a robust trading system for NASDAQ futures for a client, implementing real-time market data processing, custom indicators and automated execution.",
        longDescription: "Developed a robust trading system for NASDAQ futures for a client, implementing real-time market data processing, custom indicators and automated execution. The system features risk controls and hyper parameter optimisation, enabling consistent performance under various market conditions.",
        thumbnail: "/projects/nasdaq.jpg",
        techStack: ["C++", "Interactive Brokers", "Statistical Risk Controls"],
        tags: ["Quant"],
        githubUrl: "https://github.com/MarcYourMind/Plutus",
        liveUrl: "#",
        screenshots: ["/projects/nasdaq.jpg", "/projects/nasdaq-1.jpg", "/projects/nasdaq-2.jpg"],
        featured: false,
        articleSlug: "building-low-latency-trading-systems",
        challenge: "The client had a strategy that was working for them — one they had been trading manually for years. They wanted the entire process automated.",
        solution: "Engineered a low-latency C++ algorithm using a state machine and direct integration with the Interactive Brokers API.",
        achievements: [
            "80% ROI in the first year",
            "<25% drawdown",
            "Backtested the platform hundreds of times to optimise parameters"
        ],
        metrics: [
            { label: "roi", value: "80%" },
            { label: "drawdown", value: "<25%" },
            { label: "simulations", value: "100+" }
        ]
    },
    // {
    //     slug: "lazarus",
    //     title: "Lazarus Stock Futures Algorithm",
    //     description: "Statistical model for Futures market after-hours activity with +90% accuracy.",
    //     longDescription: "Statistical model for Futures market after-hours activity with +90% accuracy.",
    //     thumbnail: "/projects/lazarus.png",
    //     techStack: ["Python", "Pandas", "Statistical Modelling", "Data Analysis"],
    //     tags: ["Quant"],
    //     githubUrl: "#",
    //     liveUrl: "#",
    //     screenshots: ["/projects/lazarus.png"],
    //     featured: false,
    //     challenge: "It is well known that large after-hours activity has a strong correlation to market reactions once the market opens. The challenge was to capture these correlations and identify high-probability trade setups.",
    //     solution: "Developed a system that tracks large price drops during after-hours across the entire stock market. For each drop, it analyses historical data to determine the likelihood of various percentage price recoveries the following day, based on previous occurrences of the same scenario. Some stocks demonstrate a >80% probability of recovering at least +3% the next day, with historical backing across more than 500 occurrences — constituting a high-probability setup.",
    //     achievements: [
    //         ">90% accuracy",
    //         "~200% ROI during the summer of 2019",
    //         "First successful statistical modelling of financial data"
    //     ],
    //     metrics: [
    //         { label: "accuracy", value: ">90%" },
    //         { label: "roi", value: "~200%" }
    //     ]
    // },
    {
        slug: "solanaMarketMaker",
        title: "Solana Token Market Maker (Share Inc.)",
        description: "Automated liquidity provision bot for Solana-based tokens using Raydium SDK.",
        longDescription: "Built a sophisticated market-making bot that provides liquidity and price discovery for Solana tokens. Integrated directly with the Raydium SDK and implemented automated pricing strategies based on real-time market depth.",
        thumbnail: "/projects/market-maker.png",
        techStack: ["Node.js", "Radium SDK", "Web3.js", "Solana Blockchain", "PostgreSQL", "Google Cloud Platform"],
        tags: ["Web3", "Quant"],
        githubUrl: "https://github.com/MarcYourMind/NinjaFocus",
        liveUrl: "#",
        screenshots: ["/projects/market-maker.png", "/projects/solana-1.jpg", "/projects/solana-2.jpg"],
        featured: false,
        articleSlug: "automated-market-making-solana",
        challenge: "Maintaining tight spreads and adequate liquidity on Solana during periods of extreme network congestion and high price volatility.",
        solution: "Developed a high-frequency market-making bot using Node.js and the Raydium SDK, optimized for Solana's unique transaction processing model.",
        achievements: [
            "Maintained 24/7 liquidity for multiple SPL tokens",
            "Optimized RPC usage to minimize transaction failures",
            "Automated rebalancing to minimize impermanent loss",
            "Achieved consistently profitable market-making spreads"
        ]
    },
    {
        slug: "gotovan",
        title: "GotoVan Logistics Optimizer",
        description: "Logistics and routing optimization platform for delivery services.",
        longDescription: "Developed a comprehensive logistics optimizer for GotoVan, focusing on efficient route planning and resource management to streamline delivery operations.",
        thumbnail: "/projects/gotovan.jpg",
        techStack: ["React", "Node.js", "Google Maps API", "Graph Optimization Algorithms", "Google Cloud Platform", "Serverless Functions"],
        tags: ["Web", "Backend"],
        githubUrl: "https://github.com/MarcYourMind/GoToVan",
        liveUrl: "/websites/gotovan/index.html",
        screenshots: ["/projects/gotovan.jpg", "/projects/gotovan-1.jpg"],
        featured: false,
        challenge: "Solving the 'Traveling Salesperson' variation for a fleet of delivery vans with complex time windows and varying load capacities.",
        solution: "Implemented a heuristic-based routing optimizer using Node.js and Google Maps API, integrated with a real-time tracking interface.",
        achievements: [
            "Reduced total delivery mileage by an average of 15%",
            "Improved on-time delivery rate to 98%",
            "Automated daily route planning for 20+ vehicles",
            "Real-time route adjustment based on traffic data"
        ]
    },
    {
        slug: "criptoInfra",
        title: "CRIPTO Ltd Automated Trading Infrastructure",
        description: "Foundational infrastructure for high-frequency algorithmic trading across multiple exchanges.",
        longDescription: "Built the core trading infrastructure for CRIPTO Ltd, enabling automated market participation and high-speed execution across various cryptocurrency exchanges.",
        thumbnail: "/projects/cripto.jpg",
        techStack: ["Python", "Pandas", "CCXT", "Binance Exchange", "Scikit-learn", "SQL", "TA-Lib", "Parallel Processing", "Threading"],
        tags: ["Quant", "Backend"],
        githubUrl: "https://github.com/MarcYourMind/CRIPTO",
        liveUrl: "/websites/cripto/cripto.html",
        screenshots: ["/projects/cripto.jpg", "/projects/cripto-1.jpg"],
        featured: false,
        challenge: "Few consistently profitable trading algorithms exist in the cryptocurrency space. CRIPTO Ltd was founded on the premise that such a new market would be ripe for finding alpha — and as a challenge to apply data science and machine learning knowledge gained during academic studies.",
        solution: "Developed an extensive backtesting platform over 4 years, working through every possible mistake a beginner can make before achieving a robust system. Over 1,000 strategies were developed and tested — including every possible strategy encountered from research and tutorials, not counting different parameterisations. Out of these 1,000+ strategies, 12 were consistently profitable. Investors were brought in to execute the strategies, applying SOLID OOP principles to create a scalable trading monolith. Some models achieved +90% accuracy.",
        achievements: [
            "Unified connectivity to 100+ major crypto exchanges",
            "Robust trading infrastructure for a new market",
            "Greatly reduced risk in a market where risk management was an afterthought",
            "12 consistently profitable strategies"
        ],
        metrics: [
            { label: "strategiesBacktested", value: "1000+" },
            { label: "profitableStrategies", value: "12" },
            { label: "modelAccuracy", value: "90%+" }
        ]
    },
    {
        slug: "snake3d",
        title: "3D Snake Minigame",
        description: "Classic Snake game reimagined in 3D using Three.js.",
        longDescription: "Originally developed in C, this project was translated to Three.js to be showcased in a web environment. It features a fully interactive 3D version of the classic snake game.",
        thumbnail: "/projects/snake.jpg",
        techStack: ["Three.js", "JavaScript", "HTML5", "C (Original)"],
        tags: ["Web"],
        githubUrl: "#",
        liveUrl: "/websites/snake3d.html",
        screenshots: ["/projects/snake.jpg"],
        featured: false,
        challenge: "This project was aimed at getting initial bearings with C and developing GUIs in C.",
        solution: "A 3D snake game with visual transitions between faces of a cube and mappings between faces for when the snake goes around a corner.",
        achievements: [
            "3D environment",
            "Player controls for keyboard and touch",
            "Successful port from desktop-first C to web-first JS"
        ]
    },
    {
        slug: "cervantes",
        title: "Cervantes AI Book Writer",
        description: "Multi-agent story writer using LLMs to generate infinite narratives.",
        longDescription: "Cervantes is a sophisticated, multi-agent AI system designed to autonomously plan, write, and refine high-quality novels. Named after the legendary author of Don Quixote, it leverages local LLMs via Ollama to bridge the gap between AI-generated text and professional-grade literary prose, employing a hierarchical multi-agent architecture (Planner, Writer, and Evaluator) to ensure narrative coherence and quality.",
        thumbnail: "/projects/cervantes-library.jpg",
        techStack: ["Gradio", "Python", "LangChain", "Ollama", "Multi-agent Systems"],
        tags: ["AI"],
        githubUrl: "https://github.com/MarcYourMind/Cervantes-AI-Story-Writer",
        liveUrl: "#",
        screenshots: ["/projects/cervantes-library.jpg", "/projects/cervantes-reader.jpg"],
        articleSlug: "cervantes-ai-storyteller",
        featured: false,
        challenge: "Ensuring narrative consistency and literary quality over long-form writing when using smaller, local Large Language Models.",
        solution: "Created a multi-agent workflow where different LLM instances specialise in planning, drafting, and critically evaluating the text. High quality prompts following industry best standards were required to achieve good results with smaller models.",
        achievements: [
            "Generated coherent narratives",
            "Implemented hierarchical planning agents",
            "Reduced repetitive AI patterns through iterative review",
            "Deployed fully locally for maximum privacy and cost-efficiency"
        ],
        metrics: [
            { label: "agents", value: "3" },
            { label: "apiCosts", value: "$0" }
        ]
    },
    {
        slug: "linktrees",
        title: "Linktrees Personal Link Websites",
        description: "Mobile-first linktree-style websites with diverse branding.",
        longDescription: "A collection of high-performance, mobile-optimized landing pages designed for personal branding and social media links. Each version features unique aesthetic styles and optimized layouts.",
        thumbnail: "/projects/linktrees-matrix.jpg",
        techStack: ["Vanilla HTML", "CSS", "JavaScript", "Responsive Design"],
        tags: ["Web"],
        githubUrl: "https://github.com/MarcYourMind/linktrees",
        liveUrl: "/websites/linktrees/index.html",
        screenshots: ["/projects/linktrees-matrix.jpg"],
        featured: false,
        challenge: "Creating high-performance landing pages that load instantly on any connection while maintaining a premium aesthetic across 10+ variations.",
        solution: "Built a collection of vanilla JS/CSS templates optimized for mobile-first delivery and minimal asset weight.",
        achievements: [
            "Mobile first design",
            "Minimal weight",
            "Many different branding styles"
        ],
        metrics: [
            { label: "templates", value: "11" }
        ]
    },
    {
        slug: "neurodivergentConsulting",
        title: "Neurodivergent Consulting",
        description: "Freelance coaching website tailored for neurodivergent professionals.",
        longDescription: "A premium consulting website built with a focus on accessibility and clean design. Features a modern UI using React, TailwindCSS, and Shadcn UI components.",
        thumbnail: "/projects/aa.jpg",
        techStack: ["TypeScript", "Google Cloud Platform", "Tailwind CSS", "Next.JS", "Shadcn UI"],
        tags: ["Web"],
        githubUrl: "https://github.com/MarcYourMind/aaconsulting",
        liveUrl: "https://alexaves.web.app/",
        screenshots: ["/projects/aa.jpg"],
        featured: false,
        challenge: "Designing and implementing a UI that is highly professional yet accessible and calming for users with sensory sensitivities.",
        solution: "Utilised a soft colour palette and spacious layout with subtle micro-interactions to create a focused, low-friction user experience. Built with Next.JS and GCP serverless functions for easy deployment.",
        achievements: [
            "WCAG accessibility standards",
            "Responsive design"
        ]
    },
    // {
    //     slug: "hivefrequency",
    //     title: "HiveFrequency",
    //     description: "GAN+RNN architecture for real-time live music generation.",
    //     longDescription: "An experimental music project that combines Generative Adversarial Networks (GANs) and Recurrent Neural Networks (RNNs) to generate dynamic, evolving musical patterns in real-time.",
    //     thumbnail: "/projects/hivefrequency-files.jpg",
    //     techStack: ["Python", "PyTorch", "RNN", "GAN", "FFmpeg", "tqdm", "Torch Audio", "Torch FX"],
    //     tags: ["AI", "Quant"],
    //     githubUrl: "https://github.com/MarcYourMind/HiveFrequency",
    //     liveUrl: "#",
    //     screenshots: ["/projects/hivefrequency-files.jpg"],
    //     featured: false,
    //     challenge: "Recent advances in real-time AI music generation have pushed the boundaries of creative expression. However, many of these models are optimised for offline generation with limited interactive potential. HiveFrequency addresses this by delivering low-latency dynamic live performance integration — a unique contribution to the field: generating authentic music in real time while allowing seamless human–AI co-creation.",
    //     solution: "Developed a novel hybrid AI model integrating GANs for high-fidelity audio segment creation and RNNs to maintain temporal coherence. The system utilises advanced compression techniques and GPU parallel processing to achieve real-time streaming with under 20ms latency. Built up from basic signal generation in Python using torchFX, the architecture evolved to feature complex multi-track generation, custom MIDI generators for basslines, and a reinforcement learning component that dynamically adjusts parameters in response to real-time user input during live performances.",
    //     achievements: [
    //         "Achieved an ultra-low average latency of 18 milliseconds",
    //         "Ran continuously for 12 hours without crashes during live performance testing",
    //         "Scored an average of 8.8/10 in user evaluations for authenticity and creative impact",
    //         "Built an interactive sequencer operating in a continuous 16-bar looping system with extensive MIDI integration"
    //     ],
    //     metrics: [
    //         { label: "avgLatency", value: "18ms" },
    //         { label: "stability", value: "12 hours" },
    //         { label: "audioQuality", value: "4.2/5 PEAQ" }
    //     ]
    // },
    // {
    //     slug: "cruzcampo",
    //     title: "Cruzcampo Tapeando 2025",
    //     description: "Emergency full-stack web application for a major Spanish beer brand.",
    //     longDescription: "Developed in just 48 hours to save a large-scale marketing campaign. This high-pressure project involved building a robust, high-traffic web application for Cruzcampo.",
    //     thumbnail: "/projects/technex.jpg",
    //     techStack: ["HTML", "React", "Node.js", "Express.js", "SQL", "Google Cloud Platform"],
    //     tags: ["Web", "Backend"],
    //     githubUrl: "#",
    //     liveUrl: "#",
    //     screenshots: ["/projects/technex.jpg"],
    //     featured: false,
    //     challenge: "Building, testing, and deploying a production-ready application for a national campaign in under 48 hours with expected traffic in the millions.",
    //     solution: "Leveraged a pre-configured boilerplate and prioritised core functionality, using a scalable cloud infrastructure to handle traffic spikes.",
    //     achievements: [
    //         "Delivered fully functional platform in 48 hours",
    //         "Successfully handled 100k+ concurrent users",
    //         "Zero downtime during the initial campaign launch",
    //         "Saved a high-value marketing campaign from failure"
    //     ]
    // },
    {
        slug: "illuvium",
        title: "Illuvium Fusion Simulator",
        description: "Market-scanning simulator for the Illuvium Web3 NFT game.",
        longDescription: "A strategic tool for Illuvium players that simulates NFT fusions and scans market data to identify the most profitable fusion opportunities for collectors.",
        thumbnail: "/projects/fusion.JPG",
        techStack: ["Google Cloud Platform", "React", "Web3.js", "TypeScript", "Ethereum Blockchain", "wagmi", "Node.js", "Market Analytics"],
        tags: ["Web3", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/fusion.JPG"],
        featured: false,
        challenge: "Aggregating and normalizing fragmented market data from multiple Web3 marketplaces to provide real-time fusion profitability metrics.",
        solution: "Built a high-performance market scanner using Web3.js and a React frontend for intuitive data visualization and strategy simulation.",
        achievements: [
            "Real-time tracking of asset prices across 3+ DEXs",
            "Simulated 1000+ fusion combinations in seconds",
            "Provided actionable arbitrage insights for players",
            "Mobile-responsive dashboard for on-the-go trading"
        ]
    },
    {
        slug: "dartboard",
        title: "Dartboard Object Detection",
        description: "Real-time computer vision system for dartboard detection.",
        longDescription: "A high-performance computer vision project using OpenCV and C++ to detect and track dartboards in real-time video streams with high accuracy.",
        thumbnail: "/projects/dart9.jpg",
        techStack: ["OpenCV", "C++", "Computer Vision", "Object Detection Algorithms"],
        tags: ["AI"],
        githubUrl: "https://github.com/MarcYourMind/Dartboard-Detection",
        liveUrl: "#",
        screenshots: ["/projects/dart9.jpg"],
        featured: false,
        challenge: "Accurately detecting dartboards under varying lighting conditions and camera angles.",
        solution: "Implemented a series of custom computer vision filters and geometric constraints using OpenCV in C++ for maximum throughput.",
        achievements: [
            "100% accuracy on provided dataset",
            "Robust tracking through occlusion and motion blur",
            "Automated scoring system integration"
        ]
    }
];
