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
}

export const projects: Project[] = [
    {
        slug: "nasdaq-futures-algorithm",
        title: "NASDAQ Futures Trading Algorithm",
        description: "High-performance C++ trading system integrated with Interactive Brokers for automated execution. (Plutus)",
        longDescription: "Developed a robust trading system for NASDAQ futures, implementing real-time market data processing and automated execution. The system features statistical risk controls and was optimized for consistent performance under various market conditions. This project is part of the Plutus live trading algorithm.",
        thumbnail: "/projects/nasdaq.png",
        techStack: ["C++", "Interactive Brokers", "Trading Systems", "Statistical Risk Controls"],
        tags: ["Quant"],
        githubUrl: "https://github.com/MarcYourMind/Plutus",
        liveUrl: "#",
        screenshots: ["/projects/nasdaq-1.jpg", "/projects/nasdaq-2.jpg"],
        featured: true
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
        screenshots: ["/projects/chain-1.jpg", "/projects/chain-2.jpg"],
        featured: true
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
        screenshots: ["/projects/solana-1.jpg", "/projects/solana-2.jpg"],
        featured: true
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
        liveUrl: "#",
        screenshots: ["/projects/gotovan-1.jpg"],
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
        liveUrl: "#",
        screenshots: ["/projects/cripto-1.jpg"],
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
        screenshots: ["/projects/toptrader-1.jpg"],
        featured: true
    },
    {
        slug: "brite-payments",
        title: "Brite Payments PSD2 API Integration",
        description: "Integration of PSD2 compliant payment APIs for real-time bank transfers.",
        longDescription: "Implemented secure and scalable integration with Brite Payments' PSD2 APIs, enabling seamless real-time account-to-account payments and bank account information services.",
        thumbnail: "/projects/brite-payments.png",
        techStack: ["Node.js", "TypeScript", "REST APIs", "Fintech"],
        tags: ["Backend", "Web"],
        githubUrl: "#",
        liveUrl: "https://britepayments.com",
        screenshots: ["/projects/brite-payments.png"],
        featured: false
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
        featured: false
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
        screenshots: ["/projects/aitrader.png"],
        featured: false
    },
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
        screenshots: ["/projects/transformer.png"],
        featured: true
    }
];
