export interface LanguageRating {
    name: string;
    description: string;
    experience: number; // 1-5
    confidence: number; // 1-5
    icon?: string;
}

export const languages: LanguageRating[] = [
    {
        name: "Python",
        description: "Core language for AI/ML pipelines, multi-agent systems, and data engineering.",
        experience: 5,
        confidence: 5,
        icon: "Cpu"
    },
    {
        name: "C++",
        description: "High-performance systems, low-latency trading engines, and core infrastructure.",
        experience: 5,
        confidence: 4,
        icon: "Zap"
    },
    {
        name: "TypeScript",
        description: "Modern web development, robust frontend architectures, and type-safe backend services.",
        experience: 5,
        confidence: 5,
        icon: "Code"
    },
    {
        name: "Solidity",
        description: "Smart contract development, DeFi protocols, and secure Web3 integrations.",
        experience: 4,
        confidence: 4,
        icon: "Shield"
    },
    {
        name: "SQL",
        description: "Complex query optimization, database design patterns, and data warehousing.",
        experience: 4,
        confidence: 5,
        icon: "Database"
    },
    {
        name: "Rust",
        description: "Memory-safe systems programming and high-performance blockchain logic.",
        experience: 3,
        confidence: 3,
        icon: "Box"
    },
    {
        name: "Go",
        description: "Distributed systems, microservices, and cloud-native application development.",
        experience: 3,
        confidence: 3,
        icon: "Globe"
    }
];
