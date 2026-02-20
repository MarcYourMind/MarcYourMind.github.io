export interface OpenSourceRepo {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
}

export const openSourceData: OpenSourceRepo[] = [
    {
        name: "binance-data-processing",
        description: "Binance data analysis for trading bot ideas and market research.",
        stars: 1,
        forks: 1,
        language: "Python",
        url: "https://github.com/MarcYourMind/binance-data-processing"
    },
    {
        name: "ML-Algorithms-Analysis",
        description: "Study of many ML algorithms using python to visually understand aspects of each algorithm.",
        stars: 1,
        forks: 0,
        language: "Python",
        url: "https://github.com/MarcYourMind/ML-Algorithms-Analysis"
    },
    {
        name: "NinjaFocus",
        description: "Solana trading bot connected to Telegram for real-time trade execution.",
        stars: 1,
        forks: 0,
        language: "JavaScript",
        url: "https://github.com/MarcYourMind/NinjaFocus"
    },
    {
        name: "Cervantes-AI-Story-Writer",
        description: "Multi-agent story writer using LLMs to generate infinite narratives.",
        stars: 1,
        forks: 0,
        language: "Python",
        url: "https://github.com/MarcYourMind/Cervantes-AI-Story-Writer"
    },
    {
        name: "linktrees",
        description: "Mobile-first linktree-style websites with diverse branding.",
        stars: 1,
        forks: 0,
        language: "JavaScript",
        url: "https://github.com/MarcYourMind/linktrees"
    },
    {
        name: "aaconsulting",
        description: "Freelance coaching website tailored for neurodivergent professionals.",
        stars: 1,
        forks: 0,
        language: "TypeScript",
        url: "https://github.com/MarcYourMind/aaconsulting"
    },
    {
        name: "HiveFrequency",
        description: "GAN+RNN architecture for real-time live music generation.",
        stars: 1,
        forks: 0,
        language: "Python",
        url: "https://github.com/MarcYourMind/HiveFrequency"
    },
    {
        name: "Dartboard-Detection",
        description: "Real-time computer vision system for dartboard detection.",
        stars: 1,
        forks: 0,
        language: "C++",
        url: "https://github.com/MarcYourMind/Dartboard-Detection"
    }
];
