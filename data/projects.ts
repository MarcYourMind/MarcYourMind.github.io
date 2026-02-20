import { SpecializationType } from "./specializations";

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
}

export const projects: Project[] = [
    {
        slug: "cryptogpt",
        title: "CryptoGPT",
        description: "Large Language Model specialized in cryptocurrency analysis and blockchain technology.",
        longDescription: "Fine-tuned transformer models on extensive blockchain and crypto-financial datasets to create a specialized assistant for the crypto industry.",
        thumbnail: "/projects/transformer.png",
        techStack: ["Python", "PyTorch", "Transformers", "NLP"],
        tags: ["AI", "Web3"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: [
            "/projects/transformer.png",
            "/projects/calibration.png",
            "/projects/prediction_dist.png",
            "/projects/training_complete.png",
            "/projects/training_transformer2.png"
        ],
        featured: true
    },
    {
        slug: "toptrader-platform",
        title: "TopTrader Platform",
        description: "Smart trading platform for crypto, stocks, and FX with automated market screening and risk management.",
        longDescription: "The flagship Technex IP, TopTrader merges all trading accounts into one platform, offering automated market screening, risk management, and a unified trading experience.",
        thumbnail: "/projects/toptrader.jpg",
        techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
        tags: ["Web", "Quant", "Backend"],
        githubUrl: "https://github.com/MarcYourMind/TopTrader",
        liveUrl: "https://technex.io",
        screenshots: [
            "/projects/toptrader.jpg",
            "/projects/charts.png",
            "/projects/eternal-strategy.png",
            "/projects/learn.png",
            "/projects/trade-interface.png",
            "/projects/watchlists.png"
        ],
        featured: true
    },
    {
        slug: "technex",
        title: "Technex",
        description: "Leading software development and consulting firm.",
        longDescription: "Technex provides high-end software solutions and consulting services, specializing in fintech and high-performance systems.",
        thumbnail: "/projects/technex.jpg",
        techStack: ["React", "TypeScript", "Node.js", "Cloud Architecture"],
        tags: ["Web", "Backend"],
        githubUrl: "#",
        liveUrl: "https://technex.io",
        screenshots: ["/projects/technex.jpg"],
        featured: true
    },
    {
        slug: "technex-consultancy",
        title: "Freelance AI & Automation Consultancy",
        description: "Specialized AI and automation consultancy services to streamline bottleneck processes for companies.",
        longDescription: "Offered expert AI and automation consultancy services to streamline bottleneck processes for various companies, focusing on operational efficiency and strategic integration of AI technologies.",
        thumbnail: "/projects/technex-ai.jpg",
        techStack: ["Python", "AI", "Automation", "Process Optimization"],
        tags: ["AI", "Backend"],
        githubUrl: "#",
        liveUrl: "https://technex-fe413.web.app/",
        screenshots: ["/projects/technex-ai.jpg"],
        featured: true
    },
    {
        slug: "aitrader",
        title: "AiTrader",
        description: "AI-powered trading assistant and market analysis platform.",
        longDescription: "Developed AiTrader to leverage machine learning models for market prediction and automated trade execution, providing users with data-driven insights.",
        thumbnail: "/projects/aitrader.png",
        techStack: ["Python", "TensorFlow", "FastAPI", "React"],
        tags: ["AI", "Quant", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/aitrader.png", "/projects/agents.png"],
        featured: true,
        articleSlug: "machine-learning-pipelines-production"
    },
    {
        slug: "chain-champions-nft",
        title: "Chain Champions NFT Platform",
        description: "Web3 gaming tournament platform with Solidity smart contracts for escrow, buy-ins, and payouts.",
        longDescription: "An NFT-driven tournament platform where users can compete in blockchain-based gaming. Features secure smart contracts for managing entry fees and automated distribution of prize pools, all running on a scalable cloud infrastructure.",
        thumbnail: "/projects/chain-champions.png",
        techStack: ["Solidity", "React", "Node.js", "TypeScript", "GCP"],
        tags: ["Web3", "Web"],
        githubUrl: "https://github.com/MarcYourMind/MegaVerse",
        liveUrl: "#",
        screenshots: ["/projects/chain-champions.png", "/projects/chain-1.jpg", "/projects/chain-2.jpg"],
        featured: true,
        articleSlug: "smart-contract-security"
    },
    {
        slug: "nasdaq-futures-algorithm",
        title: "NASDAQ Futures Trading Algorithm",
        description: "High-performance C++ trading system integrated with Interactive Brokers for automated execution. (Plutus)",
        longDescription: "Developed a robust trading system for NASDAQ futures, implementing real-time market data processing and automated execution. The system features statistical risk controls and was optimized for consistent performance under various market conditions. This project is part of the Plutus live trading algorithm.",
        thumbnail: "/projects/nasdaq.jpg",
        techStack: ["C++", "Interactive Brokers", "Trading Systems", "Statistical Risk Controls"],
        tags: ["Quant"],
        githubUrl: "https://github.com/MarcYourMind/Plutus",
        liveUrl: "#",
        screenshots: ["/projects/nasdaq.jpg", "/projects/nasdaq-1.jpg", "/projects/nasdaq-2.jpg"],
        featured: false,
        articleSlug: "building-low-latency-trading-systems"
    },
    {
        slug: "solana-market-maker",
        title: "Solana Token Market Maker (Share Inc.)",
        description: "Automated liquidity provision bot for Solana-based tokens using Raydium SDK.",
        longDescription: "Built a sophisticated market-making bot that provides liquidity and price discovery for Solana tokens. Integrated directly with the Raydium SDK and implemented automated pricing strategies based on real-time market depth.",
        thumbnail: "/projects/market-maker.png",
        techStack: ["Node.js", "Raydium SDK", "Solana", "PostgreSQL"],
        tags: ["Web3", "Quant"],
        githubUrl: "https://github.com/MarcYourMind/NinjaFocus",
        liveUrl: "#",
        screenshots: ["/projects/market-maker.png", "/projects/solana-1.jpg", "/projects/solana-2.jpg"],
        featured: false
    },
    {
        slug: "gotovan-logistics",
        title: "GotoVan Logistics Optimizer",
        description: "Logistics and routing optimization platform for delivery services.",
        longDescription: "Developed a comprehensive logistics optimizer for GotoVan, focusing on efficient route planning and resource management to streamline delivery operations.",
        thumbnail: "/projects/gotovan.jpg",
        techStack: ["React", "Node.js", "Google Maps API", "Optimization Algorithms"],
        tags: ["Web", "Backend"],
        githubUrl: "https://github.com/MarcYourMind/GoToVan",
        liveUrl: "/websites/gotovan/index.html",
        screenshots: ["/projects/gotovan.jpg", "/projects/gotovan-1.jpg"],
        featured: false
    },
    {
        slug: "cripto-trading-infra",
        title: "CRIPTO Ltd Automated Trading Infrastructure",
        description: "Foundational infrastructure for high-frequency algorithmic trading across multiple exchanges.",
        longDescription: "Built the core trading infrastructure for CRIPTO Ltd, enabling automated market participation and high-speed execution across various cryptocurrency exchanges.",
        thumbnail: "/projects/cripto.jpg",
        techStack: ["Python", "WebSockets", "CCXT", "PostgreSQL"],
        tags: ["Quant", "Backend"],
        githubUrl: "https://github.com/MarcYourMind/CRIPTO",
        liveUrl: "/websites/cripto.html",
        screenshots: ["/projects/cripto.jpg", "/projects/cripto-1.jpg"],
        featured: false
    },
    {
        slug: "brite-payments",
        title: "Brite Payments PSD2 API Integration",
        description: "Integration of PSD2 compliant payment APIs for real-time bank transfers.",
        longDescription: "Implemented secure and scalable integration with Brite Payments' PSD2 APIs, enabling seamless real-time account-to-account payments and bank account information services.",
        thumbnail: "/projects/brite.jpg",
        techStack: ["Node.js", "TypeScript", "REST APIs", "Fintech"],
        tags: ["Backend", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/brite.jpg"],
        featured: false,
        articleSlug: "scaling-backend-event-driven"
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
        featured: false
    },
    {
        slug: "cervantes-ai",
        title: "Cervantes AI Book Writer",
        description: "Multi-agent story writer using LLMs to generate infinite narratives.",
        longDescription: "A work-in-progress project aimed at creating an 'interdimensional cable' of stories. It utilizes local LLMs via Ollama and a multi-agent architecture to generate complex, evolving narratives with a Gradio interface.",
        thumbnail: "/projects/technex-ai.jpg",
        techStack: ["Python", "Ollama", "Gradio", "LLMs", "Multi-agent Systems"],
        tags: ["AI"],
        githubUrl: "https://github.com/MarcYourMind/Cervantes-AI-Story-Writer",
        liveUrl: "#",
        screenshots: ["/projects/technex-ai.jpg"],
        featured: false
    },
    {
        slug: "linktrees",
        title: "Linktrees Personal Link Websites",
        description: "Mobile-first linktree-style websites with diverse branding.",
        longDescription: "A collection of high-performance, mobile-optimized landing pages designed for personal branding and social media links. Each version features unique aesthetic styles and optimized layouts.",
        thumbnail: "/projects/linktrees-matrix.jpg",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        tags: ["Web"],
        githubUrl: "https://github.com/MarcYourMind/linktrees",
        liveUrl: "/websites/linktrees/index.html",
        screenshots: ["/projects/linktrees-matrix.jpg"],
        featured: false
    },
    {
        slug: "neurodivergent-consulting",
        title: "Neurodivergent Consulting",
        description: "Freelance coaching website tailored for neurodivergent professionals.",
        longDescription: "A premium consulting website built with a focus on accessibility and clean design. Features a modern UI using React, TailwindCSS, and Shadcn UI components.",
        thumbnail: "/projects/aa.jpg",
        techStack: ["React", "TypeScript", "TailwindCSS", "Shadcn UI"],
        tags: ["Web"],
        githubUrl: "https://github.com/MarcYourMind/aaconsulting",
        liveUrl: "#",
        screenshots: ["/projects/aa.jpg"],
        featured: false
    },
    {
        slug: "hive-frequency",
        title: "HiveFrequency",
        description: "GAN+RNN architecture for real-time live music generation.",
        longDescription: "An experimental music project that combines Generative Adversarial Networks (GANs) and Recurrent Neural Networks (RNNs) to generate dynamic, evolving musical patterns in real-time.",
        thumbnail: "/projects/prediction_dist.png",
        techStack: ["Python", "PyTorch", "RNN", "GAN", "Music Information Retrieval"],
        tags: ["AI", "Quant"],
        githubUrl: "https://github.com/MarcYourMind/HiveFrequency",
        liveUrl: "#",
        screenshots: ["/projects/prediction_dist.png"],
        featured: false
    },
    {
        slug: "cruzcampo-tapeando",
        title: "Cruzcampo Tapeando",
        description: "Emergency full-stack web application for a major Spanish beer brand.",
        longDescription: "Developed in just 48 hours to save a large-scale marketing campaign. This high-pressure project involved building a robust, high-traffic web application for Cruzcampo.",
        thumbnail: "/projects/technex.jpg",
        techStack: ["React", "Node.js", "Express", "PostgreSQL"],
        tags: ["Web", "Backend"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/technex.jpg"],
        featured: false
    },
    {
        slug: "illuvium-fusion",
        title: "Illuvium Fusion Simulator",
        description: "Market-scanning simulator for the Illuvium Web3 NFT game.",
        longDescription: "A strategic tool for Illuvium players that simulates NFT fusions and scans market data to identify the most profitable fusion opportunities for collectors.",
        thumbnail: "/projects/fusion.JPG",
        techStack: ["TypeScript", "Web3.js", "React", "Market Analytics"],
        tags: ["Web3", "Web"],
        githubUrl: "#",
        liveUrl: "#",
        screenshots: ["/projects/fusion.JPG"],
        featured: false
    },
    {
        slug: "dartboard-detection",
        title: "Dartboard Object Detection",
        description: "Real-time computer vision system for dartboard detection.",
        longDescription: "A high-performance computer vision project using OpenCV and C++ to detect and track dartboards in real-time video streams with high accuracy.",
        thumbnail: "/projects/dart9.jpg",
        techStack: ["C++", "OpenCV", "Computer Vision", "Object Detection"],
        tags: ["AI"],
        githubUrl: "https://github.com/MarcYourMind/Dartboard-Detection",
        liveUrl: "#",
        screenshots: ["/projects/dart9.jpg"],
        featured: false
    }
];
