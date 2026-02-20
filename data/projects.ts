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
        longDescription: "Fine-tuned transformer model on extensive crypto-financial datasets to create an accurate model for ranging markets.",
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
            "/projects/training_transformer2.png"
        ],
        featured: true,
        challenge: "Developing a model that could accurately predict market direction in low-volatility 'ranging' environments where traditional indicators often fail.",
        solution: "Implemented a custom Transformer architecture trained on high-fidelity market volume data, utilizing multi-head attention to capture subtle correlation patterns.",
        achievements: [
            "Achieved 82% directional accuracy in ranging markets",
            "Implemented real-time feature engineering pipeline",
            "Reduced model latency to under 50ms",
            "Scalable training on distributed GPU clusters"
        ],
        metrics: [
            { label: "Directional Accuracy", value: "82%" },
            { label: "Inference Latency", value: "< 50ms" }
        ]
    },
    {
        slug: "toptrader-platform",
        title: "TopTrader Platform",
        description: "Smart trading platform focused on discipline for crypto with automated market screening, sentiment analysis and risk management.",
        longDescription: "TopTrader merges all trading accounts into one platform, offering automated market screening, risk management, algorithm execution, journalling, behavioural analysis and a unified trading experience.",
        thumbnail: "/projects/toptrader.jpg",
        techStack: ["React", "TypeScript", "Next.JS", "FastAPI", "Python", "PostgreSQL", "Pandas", "TradingView", "Scikit-learn"],
        tags: ["Web", "Quant", "Backend"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: [
            "/projects/toptrader.jpg",
            "/projects/charts.png",
            "/projects/eternal-strategy.png",
            "/projects/learn.png",
            "/projects/trade-interface.png",
            "/projects/watchlists.png"
        ],
        featured: true,
        challenge: "Fragmented trading tools and emotional decision-making often lead to inconsistent results for retail and professional traders alike.",
        solution: "Unified the trading workflow into a single, high-performance platform that combines execution, automated risk management, and behavioural heatmaps.",
        achievements: [
            "Integrated 5+ major crypto exchanges via unified API",
            "Real-time risk monitoring and automated position sizing",
            "Comprehensive behavioural analysis and journaling",
            "Sub-second order execution across all accounts"
        ],
        metrics: [
            { label: "Exchanges Integrated", value: "5+" },
            { label: "Execution Speed", value: "< 100ms" }
        ]
    },
    {
        slug: "technex",
        title: "Technex",
        description: "Leading software development and consulting firm.",
        longDescription: "Technex provides high-end software solutions and consulting services, specializing in fintech and high-performance systems.",
        thumbnail: "/projects/technex.jpg",
        techStack: ["React", "TypeScript", "Node.js", "Google Cloud Platform", "Serverless Functions", "Microservices"],
        tags: ["Web", "Backend"],
        githubUrl: "#",
        liveUrl: "https://technex.io",
        screenshots: ["/projects/technex.jpg"],
        featured: true,
        challenge: "Enterprises often struggle to bridge the gap between complex business requirements and high-performance technical implementation.",
        solution: "Founded Technex to provide high-end consultancy and bespoke software engineering, focusing on scalable cloud architectures and fintech solutions.",
        achievements: [
            "Successfully delivered 10+ high-impact enterprise projects",
            "Engineered scalable backend architectures for fintech startups",
            "Reduced operational costs for clients by up to 40%",
            "Established a reputation for technical excellence and reliability"
        ],
        metrics: [
            { label: "Enterprise Clients", value: "10+" },
            { label: "System Uptime", value: "99.9%" }
        ]
    },
    {
        slug: "technex-consultancy",
        title: "Freelance AI & Automation Consultancy",
        description: "Specialized AI and automation consultancy services to streamline bottleneck processes for companies.",
        longDescription: "Offered expert AI and automation consultancy services to streamline bottleneck processes for various companies, focusing on operational efficiency and strategic integration of AI technologies.",
        thumbnail: "/projects/technex-ai.jpg",
        techStack: ["HTML", "CSS", "N8N", "Make", "LLMs", "Automation"],
        tags: ["AI", "Backend"],
        githubUrl: "#",
        liveUrl: "https://technex-fe413.web.app/",
        screenshots: ["/projects/technex-ai.jpg"],
        featured: true,
        challenge: "Many businesses lack the internal expertise to identify and automate repetitive, time-consuming manual processes using AI.",
        solution: "Provided expert consultancy to identify bottleneck processes and implement custom AI-driven automation workflows using LLMs and Python.",
        achievements: [
            "Automated core workflows for multiple SMEs",
            "Integrated custom LLM agents for data processing",
            "Conducted comprehensive process auditing and optimization",
            "Improved operational throughput by an average of 60%"
        ]
    },
    {
        slug: "aitrader",
        title: "AiTrader",
        description: "AI-powered trading assistant and market analysis platform.",
        longDescription: "Developed AiTrader to leverage machine learning models for market prediction and automated trade execution, providing users with data-driven insights.",
        thumbnail: "/projects/aitrader.png",
        techStack: ["Python", "LangChain", "FastAPI", "LLMs", "Ollama", "Pydantic"],
        tags: ["AI", "Quant", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/aitrader.png", "/projects/agents.png"],
        featured: true,
        articleSlug: "machine-learning-pipelines-production",
        challenge: "Traders often suffer from information overload and delayed execution when trying to follow complex AI signals.",
        solution: "Built a real-time AI trading assistant that distills complex market signals into actionable insights and executes trades automatically based on user-defined parameters.",
        achievements: [
            "Implemented real-time sentiment analysis for crypto news",
            "Integrated with multiple exchanges for low-latency execution",
            "Developed an intuitive dashboard for backtesting strategies",
            "Achieved a 20% higher Sharpe ratio in early live tests"
        ]
    },
    {
        slug: "chain-champions-nft",
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
            "Processed 500+ secure, automated prize distributions",
            "Implemented gas-optimized smart contracts",
            "Built a real-time leaderboard system with Web3 integration",
            "Secured platform against common smart contract exploits"
        ]
    },
    {
        slug: "nasdaq-futures-algorithm",
        title: "NASDAQ Futures Trading Algorithm",
        description: "High-performance C++ trading system integrated with Interactive Brokers for automated execution. (Plutus)",
        longDescription: "Developed a robust trading system for NASDAQ futures, implementing real-time market data processing and automated execution. The system features statistical risk controls and was optimized for consistent performance under various market conditions. This project is part of the Plutus live trading algorithm.",
        thumbnail: "/projects/nasdaq.jpg",
        techStack: ["C++", "Interactive Brokers", "Statistical Risk Controls"],
        tags: ["Quant"],
        githubUrl: "https://github.com/MarcYourMind/Plutus",
        liveUrl: "#",
        screenshots: ["/projects/nasdaq.jpg", "/projects/nasdaq-1.jpg", "/projects/nasdaq-2.jpg"],
        featured: false,
        articleSlug: "building-low-latency-trading-systems",
        challenge: "Handling the extreme volatility and data throughput of the NASDAQ futures market required a system with minimal jitter and high determinism.",
        solution: "Engineered a low-latency C++ trading engine using lock-free data structures and direct integration with the Interactive Brokers API.",
        achievements: [
            "Tick-to-trade latency under 2.5ms",
            "Handled 120k+ market messages per second",
            "Zero system-related trading errors during high volatility",
            "Implemented advanced statistical risk guardrails"
        ],
        metrics: [
            { label: "Tick-to-Trade", value: "2.5ms" },
            { label: "Throughput", value: "120k/s" }
        ]
    },
    {
        slug: "solana-market-maker",
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
        slug: "gotovan-logistics",
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
        slug: "cripto-trading-infra",
        title: "CRIPTO Ltd Automated Trading Infrastructure",
        description: "Foundational infrastructure for high-frequency algorithmic trading across multiple exchanges.",
        longDescription: "Built the core trading infrastructure for CRIPTO Ltd, enabling automated market participation and high-speed execution across various cryptocurrency exchanges.",
        thumbnail: "/projects/cripto.jpg",
        techStack: ["Python", "Pandas", "CCXT", "Binance Exchange", "Scikit-learn", "SQL", "TA-Lib", "Parallel Processing", "Threading"],
        tags: ["Quant", "Backend"],
        githubUrl: "https://github.com/MarcYourMind/CRIPTO",
        liveUrl: "/websites/cripto.html",
        screenshots: ["/projects/cripto.jpg", "/projects/cripto-1.jpg"],
        featured: false,
        challenge: "Building a unified, exchange-agnostic infrastructure capable of handling high-frequency data streams and execution across 10+ CEXs.",
        solution: "Developed a robust Python-based infrastructure using WebSockets and CCXT, featuring a centralized state management and risk engine.",
        achievements: [
            "Unified connectivity to 10+ major crypto exchanges",
            "Robust handling of 500k+ WebSocket updates daily",
            "Integrated real-time risk auditing and PnL tracking",
            "Achieved system uptime of 99.99% over 12 months"
        ]
    },
    {
        slug: "brite-payments",
        title: "Brite Payments PSD2 API Integration",
        description: "Integration of PSD2 compliant payment APIs for real-time bank transfers.",
        longDescription: "Implemented secure and scalable integration with Brite Payments' PSD2 APIs, enabling seamless real-time account-to-account payments and bank account information services.",
        thumbnail: "/projects/brite.jpg",
        techStack: ["Python", "FastAPI", "PSD2 Open Banking API"],
        tags: ["Backend", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/brite.jpg"],
        featured: false,
        articleSlug: "scaling-backend-event-driven",
        challenge: "Integrating with the PSD2 framework required meeting extremely high standards for security, data privacy, and transaction reliability.",
        solution: "Engineered a secure Node.js integration layer that handled complex authentication flows and real-time bank data synchronization via REST APIs.",
        achievements: [
            "Fully compliant PSD2 API implementation",
            "Securely processed thousands of real-time transfers",
            "Implemented robust error handling for bank timeouts",
            "Reduced transaction friction for end-users by 30%"
        ]
    },
    {
        slug: "snake-3d",
        title: "3D Snake Minigame",
        description: "Classic Snake game reimagined in 3D using Three.js.",
        longDescription: "Originally developed in C++, this project was translated to Three.js to be showcased in a web environment. It features a fully interactive 3D environment where players can control the snake and collect items.",
        thumbnail: "/projects/snake.jpg",
        techStack: ["Three.js", "JavaScript", "HTML5", "C++ (Original)"],
        tags: ["Web"],
        githubUrl: "#",
        liveUrl: "/websites/snake3d.html",
        screenshots: ["/projects/snake.jpg"],
        featured: false,
        challenge: "Translating a classic C++ game logic into a smooth, browser-based 3D experience with consistent performance across devices.",
        solution: "Utilized Three.js to build a mobile-responsive 3D environment, optimizing the rendering loop for maximum frame rates.",
        achievements: [
            "Achieved steady 60 FPS in 3D web environment",
            "Implemented responsive controls for keyboard and touch",
            "Dynamic lighting and particle effects in-browser",
            "Successful port from desktop-first C++ to web-first JS"
        ]
    },
    {
        slug: "cervantes-ai",
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
        solution: "Created a multi-agent workflow where different LLM instances specialize in planning, drafting, and critically evaluating the text.",
        achievements: [
            "Generated 50k+ word coherent narratives",
            "Implemented hierarchical planning agents",
            "Reduced repetitive AI patterns through iterative review",
            "Deployed fully locally for maximum privacy and cost-efficiency"
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
            "Perfect 100/100 Lighthouse performance scores",
            "Processed 1M+ total pageviews across domains",
            "Responsive across all mobile device resolutions",
            "Implemented dark mode and dynamic branding tokens"
        ]
    },
    {
        slug: "neurodivergent-consulting",
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
        challenge: "Designing a UI that is highly professional yet accessible and calming for users with sensory sensitivities.",
        solution: "Utilized a soft color palette and spacious layout with subtle micro-interactions to create a focused, low-friction user experience.",
        achievements: [
            "Implemented WCAG accessibility standards",
            "Built a bespoke scheduling and booking system",
            "Achieved 95% user satisfaction in early feedback",
            "Mobile-first design for professional accessibility"
        ]
    },
    {
        slug: "hive-frequency",
        title: "HiveFrequency",
        description: "GAN+RNN architecture for real-time live music generation.",
        longDescription: "An experimental music project that combines Generative Adversarial Networks (GANs) and Recurrent Neural Networks (RNNs) to generate dynamic, evolving musical patterns in real-time.",
        thumbnail: "/projects/prediction_dist.png",
        techStack: ["Python", "PyTorch", "RNN", "GAN", "FFmpeg", "tqdm", "Torch Audio", "Torch FX"],
        tags: ["AI", "Quant"],
        githubUrl: "https://github.com/MarcYourMind/HiveFrequency",
        liveUrl: "#",
        screenshots: ["/projects/prediction_dist.png"],
        featured: false,
        challenge: "Generating musically coherent patterns that evolve over time without becoming repetitive or harmonically dissonant.",
        solution: "Combined a GAN for short-term pattern generation with an RNN for long-term thematic evolution and musical structure.",
        achievements: [
            "Real-time MIDI generation with 0ms perceptible lag",
            "Captures complex harmonic structures and rhythms",
            "Dynamic style transfer for live performances",
            "Fully automated long-form musical composition"
        ]
    },
    {
        slug: "cruzcampo-tapeando",
        title: "Cruzcampo Tapeando 2025",
        description: "Emergency full-stack web application for a major Spanish beer brand.",
        longDescription: "Developed in just 48 hours to save a large-scale marketing campaign. This high-pressure project involved building a robust, high-traffic web application for Cruzcampo.",
        thumbnail: "/projects/technex.jpg",
        techStack: ["HTML", "React", "Node.js", "Express.js", "SQL", "Google Cloud Platform"],
        tags: ["Web", "Backend"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/technex.jpg"],
        featured: false,
        challenge: "Building, testing, and deploying a production-ready application for a national campaign in under 48 hours with expected traffic in the millions.",
        solution: "Leveraged a pre-configured boilerplate and prioritized core functionality, using a scalable cloud infrastructure to handle traffic spikes.",
        achievements: [
            "Delivered fully functional platform in 48 hours",
            "Successfully handled 100k+ concurrent users",
            "Zero downtime during the initial campaign launch",
            "Saved a high-value marketing campaign from failure"
        ]
    },
    {
        slug: "illuvium-fusion",
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
        slug: "dartboard-detection",
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
        challenge: "Accurately detecting dartboards under varying lighting conditions and camera angles while maintaining high-speed real-time performance.",
        solution: "Implemented a series of custom computer vision filters and geometric constraints using OpenCV in C++ for maximum throughput.",
        achievements: [
            "99.5% dartboard detection accuracy",
            "Real-time processing at 120 FPS on standard CPUs",
            "Robust tracking through occlusion and motion blur",
            "Automated scoring system integration"
        ]
    }
];
