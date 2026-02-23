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
        name: "C/C++",
        description: "High-performance systems, low-latency trading engines, and core infrastructure.",
        experience: 2,
        confidence: 5,
        icon: "Zap"
    },
    {
        name: "Java",
        description: "Enterprise application development and scalable backend services.",
        experience: 1,
        confidence: 3,
        icon: "Code"
    },
    {
        name: "Haskell",
        description: "Functional programming for complex logic and verified systems.",
        experience: 1,
        confidence: 1,
        icon: "Code"
    },
    {
        name: "VHDL",
        description: "Hardware description language for FPGA and ASIC design.",
        experience: 1,
        confidence: 5,
        icon: "Cpu"
    },
    {
        name: "Solidity",
        description: "Smart contract development, DeFi protocols, and secure Web3 integrations.",
        experience: 2,
        confidence: 3,
        icon: "Shield"
    },
    {
        name: "HTML",
        description: "Semantic structure for modern, accessible web applications.",
        experience: 5,
        confidence: 5,
        icon: "Globe"
    },
    {
        name: "CSS",
        description: "Advanced styling, animations, and responsive design systems.",
        experience: 5,
        confidence: 5,
        icon: "Zap"
    },
    {
        name: "JavaScript",
        description: "Dynamic web logic, interactive components, and full-stack development.",
        experience: 5,
        confidence: 5,
        icon: "Code"
    },
    {
        name: "TypeScript",
        description: "Type-safe web development and robust frontend architectures.",
        experience: 5,
        confidence: 5,
        icon: "Code"
    },
    {
        name: "Verilog",
        description: "Hardware description language for digital logic design.",
        experience: 1,
        confidence: 2,
        icon: "Cpu"
    },
    {
        name: "E",
        description: "Specialized language for hardware verification and simulation.",
        experience: 1,
        confidence: 2,
        icon: "Shield"
    },
    {
        name: "SQL",
        description: "Complex query optimization, database design patterns, and data warehousing.",
        experience: 3,
        confidence: 3,
        icon: "Database"
    },
    {
        name: "PineScript",
        description: "Domain-specific language for financial technical analysis and strategy backtesting.",
        experience: 2,
        confidence: 5,
        icon: "Zap"
    },
    {
        name: "MatLab / Octave",
        description: "Numerical computing, signal processing, and mathematical modeling.",
        experience: 3,
        confidence: 3,
        icon: "Cpu"
    },
    {
        name: "Flutter (Dart)",
        description: "Cross-platform mobile and web application development.",
        experience: 1,
        confidence: 2,
        icon: "Globe"
    }
];
