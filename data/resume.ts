import { SpecializationType } from "./specializations";

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
}

export interface ResumeTrack {
    id: SpecializationType;
    title: string;
    summary: string;
    experience: Experience[];
    skills: SkillCategory[];
    languages: { name: string; level: string }[];
    certifications: string[];
    education: Education[];
}

export const resumeData: Record<string, ResumeTrack> = {
    Backend: {
        id: "Backend",
        title: "Senior Backend Engineer",
        summary: "Senior backend engineer with 5+ years of experience designing and scaling high-performance backend systems in FinTech and data-intensive environments. Specialized in Python, FastAPI, SQL, and cloud-native architectures.",
        experience: [
            {
                company: "Brite Payments (Spain)",
                role: "Senior Backend Python Developer",
                period: "May 2025 – July 2025",
                description: [
                    "Designed and implemented PSD2-compliant APIs using Python and FastAPI",
                    "Delivered OpenAPI-standard interfaces for Open Banking integrations",
                    "Collaborated in Agile Kanban environment with product and compliance teams",
                    "Improved API reliability and maintainability through structured schema validation"
                ]
            },
            {
                company: "Technex (UK)",
                role: "Director & CTO",
                period: "Jan 2021 – Sept 2024",
                description: [
                    "Led backend development for multiple FinTech automation clients",
                    "Designed scalable Python-based services for trading, analytics, and data ingestion",
                    "Built real-time market data pipelines and automated portfolio systems",
                    "Reduced client portfolio risk by 40% using predictive volatility models",
                    "Managed distributed engineering teams using Agile sprint methodologies"
                ]
            },
            {
                company: "GotoVan (UK)",
                role: "Full Stack Developer",
                period: "Mar 2022 – Nov 2023",
                description: [
                    "Developed backend services using Python FastAPI and SQL on GCP",
                    "Implemented route-based pricing algorithms improving logistics cost efficiency",
                    "Built internal BI tools to analyze operational data and optimize resource usage",
                    "Integrated OAuth authentication and Stripe payment systems"
                ]
            }
        ],
        skills: [
            { title: "Languages", skills: ["Python", "TypeScript", "SQL", "C++"] },
            { title: "Backend", skills: ["FastAPI", "Flask", "REST APIs", "OpenAPI", "OAuth2"] },
            { title: "Infrastructure", skills: ["Google Cloud Platform", "PostgreSQL", "MongoDB", "Serverless"] }
        ],
        languages: [
            { name: "English", level: "Native" },
            { name: "Spanish", level: "Native" },
            { name: "French", level: "Working Proficiency" }
        ],
        certifications: ["Machine Learning – Coursera", "AI Agents – HuggingFace", "AI Agents – LangChain"],
        education: [
            {
                degree: "BEng Computer Science & Electronics",
                institution: "University of Bristol",
                period: "2017 – 2020",
                description: "Maintained a First-Class average throughout the Computer Science & Electronics engineering curriculum. Transitioned from formal studies during the final year to scale a trading venture; subsequently awarded the BEng degree by the University of Bristol."
            }
        ]
    },
    Quant: {
        id: "Quant",
        title: "Quantitative Developer",
        summary: "Quantitative developer with strong background in algorithmic trading, statistical modeling, and high-performance data systems. Experienced in designing automated trading strategies, risk models, and market analytics platforms.",
        experience: [
            {
                company: "Technex (UK)",
                role: "Quantitative Developer",
                period: "Jan 2021 – Sept 2024",
                description: [
                    "Designed algorithmic trading systems across equities, futures, and crypto",
                    "Built real-time execution engines processing market data feeds",
                    "Reduced portfolio risk by 40% using predictive volatility models",
                    "Developed automated portfolio management and performance analytics tools"
                ]
            },
            {
                company: "NASDAQ Futures Trading Algorithm",
                role: "Quantitative Developer (Client Project)",
                period: "Jan 2023 – May 2024",
                description: [
                    "Developed C++ trading system integrated with Interactive Brokers",
                    "Implemented real-time market data processing and automated execution",
                    "Optimized strategy performance using statistical risk controls"
                ]
            },
            {
                company: "CRIPTO Ltd. (UK)",
                role: "Co-Founder & CEO",
                period: "Sept 2019 – Dec 2020",
                description: [
                    "Built quantitative trading infrastructure executing hundreds of strategies",
                    "Applied Bayesian inference and Gaussian Processes to market prediction",
                    "Achieved 44% annual return across automated investment systems",
                    "Led research, strategy design, and system architecture"
                ]
            }
        ],
        skills: [
            { title: "Languages", skills: ["Python", "C++", "SQL", "PineScript", "MQL4"] },
            { title: "Data Science", skills: ["NumPy", "Pandas", "Statistical Modeling", "Bayesian Inference"] },
            { title: "Trading Systems", skills: ["Automated Execution", "Portfolio Optimization", "Risk Models", "Real-time Data"] }
        ],
        languages: [
            { name: "English", level: "Native" },
            { name: "Spanish", level: "Native" },
            { name: "French", level: "Working Proficiency" }
        ],
        certifications: ["Machine Learning – Coursera"],
        education: [
            {
                degree: "BEng Computer Science & Electronics",
                institution: "University of Bristol",
                period: "2017 – 2020",
                description: "Maintained a First-Class average throughout the Computer Science & Electronics engineering curriculum. Transitioned from formal studies during the final year to scale a trading venture; subsequently awarded the BEng degree by the University of Bristol."
            }
        ]
    },
    Web3: {
        id: "Web3",
        title: "Web3 Engineer",
        summary: "Web3 engineer with deep experience building blockchain-based trading systems, NFT platforms, and smart contract infrastructure. Specialized in Solidity, Solana, and TypeScript-based blockchain integrations.",
        experience: [
            {
                company: "Chain Champions",
                role: "Full Stack Web3 Developer",
                period: "May 2024 – Present",
                description: [
                    "Developed NFT tournament platform using React, Node.js, TypeScript",
                    "Implemented Solidity smart contracts for escrow, buy-ins, and payouts",
                    "Deployed cloud infrastructure on GCP with secure contract interactions",
                    "Ensured parameterized rule systems for automated tournament execution"
                ]
            },
            {
                company: "Technex (UK)",
                role: "Web3 Engineer / Director & CTO",
                period: "Jan 2021 – Sept 2024",
                description: [
                    "Designed and deployed smart contracts for DeFi and NFT platforms",
                    "Built automated crypto trading and market-making systems",
                    "Integrated blockchain services with off-chain APIs and SQL databases",
                    "Led security-focused development using audited open-source standards"
                ]
            },
            {
                company: "Share Inc.",
                role: "Solana Token Market Maker",
                period: "Sept 2020 – Dec 2021",
                description: [
                    "Built market-making bot providing liquidity to Solana-based token",
                    "Integrated with Solana blockchain using Node.js and Raydium SDK",
                    "Designed automated pricing and liquidity strategies backed by SQL data"
                ]
            }
        ],
        skills: [
            { title: "Languages", skills: ["Solidity", "TypeScript", "JavaScript", "Python"] },
            { title: "Blockchain", skills: ["Ethereum", "Solana", "Raydium SDK", "Smart Contracts", "DeFi"] },
            { title: "Tools", skills: ["Node.js", "FastAPI", "GCP", "PostgreSQL"] }
        ],
        languages: [
            { name: "English", level: "Native" },
            { name: "Spanish", level: "Native" },
            { name: "French", level: "Working Proficiency" }
        ],
        certifications: ["Smart Contract Security – Chain Champions"],
        education: [
            {
                degree: "BEng Computer Science & Electronics",
                institution: "University of Bristol",
                period: "2017 – 2020",
                description: "Maintained a First-Class average throughout the Computer Science & Electronics engineering curriculum. Transitioned from formal studies during the final year to scale a trading venture; subsequently awarded the BEng degree by the University of Bristol."
            }
        ]
    },
    AI: {
        id: "AI",
        title: "AI & ML Engineer",
        summary: "Specialist in building AI agents and machine learning models for predictive analytics and automation. Experienced in applying Bayesian inference and neural networks to complex data-driven problems.",
        experience: [
            {
                company: "Technex (UK)",
                role: "Director & CTO (AI Focus)",
                period: "Jan 2021 – Sept 2024",
                description: [
                    "Developed predictive volatility models using Gaussian Processes",
                    "Built automated risk management systems driven by ML analytics",
                    "Integrated AI-driven insights into FinTech automation tools"
                ]
            },
            {
                company: "CRIPTO Ltd. (UK)",
                role: "Co-Founder (ML Researcher)",
                period: "Sept 2019 – Dec 2020",
                description: [
                    "Applied Bayesian inference to market prediction and strategy optimization",
                    "Researched and implemented high-performance Gaussian Process models"
                ]
            }
        ],
        skills: [
            { title: "AI/ML", skills: ["AI Agents", "Gaussian Processes", "Neural Networks", "Bayesian Inference"] },
            { title: "Tools", skills: ["Python", "HuggingFace", "NumPy", "Pandas", "Scikit-learn"] }
        ],
        languages: [
            { name: "English", level: "Native" },
            { name: "Spanish", level: "Native" },
            { name: "French", level: "Working Proficiency" }
        ],
        certifications: ["AI Agents – HuggingFace", "Machine Learning – Coursera", "Deep Agents – LangChain", "Gradio Certification"],
        education: [
            {
                degree: "BEng Computer Science & Electronics",
                institution: "University of Bristol",
                period: "2017 – 2020",
                description: "Maintained a First-Class average throughout the Computer Science & Electronics engineering curriculum. Transitioned from formal studies during the final year to scale a trading venture; subsequently awarded the BEng degree by the University of Bristol."
            }
        ]
    },
    Web: {
        id: "Web",
        title: "Fullstack Developer",
        summary: "Fullstack developer focused on building high-performance web applications with modern tech stacks. Specialized in React, Node.js, and FastAPI integrations.",
        experience: [
            {
                company: "Chain Champions",
                role: "Full Stack Web3 Developer",
                period: "May 2024 – Present",
                description: [
                    "Developed NFT tournament platform using React, Node.js, TypeScript",
                    "Built interactive frontends with complex state management for gaming"
                ]
            },
            {
                company: "GotoVan (UK)",
                role: "Full Stack Developer",
                period: "Mar 2022 – Nov 2023",
                description: [
                    "Developed backend services using Python FastAPI and SQL on GCP",
                    "Built internal BI tools with data visualization for operational optimization",
                    "Integrated OAuth authentication and Stripe payment systems"
                ]
            }
        ],
        skills: [
            { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "TailwindCSS"] },
            { title: "Backend", skills: ["Node.js", "FastAPI", "Flask", "PostgreSQL", "GCP"] }
        ],
        languages: [
            { name: "English", level: "Native" },
            { name: "Spanish", level: "Native" },
            { name: "French", level: "Working Proficiency" }
        ],
        certifications: ["Bubble Certification"],
        education: [
            {
                degree: "BEng Computer Science & Electronics",
                institution: "University of Bristol",
                period: "2017 – 2020",
                description: "Maintained a First-Class average throughout the Computer Science & Electronics engineering curriculum. Transitioned from formal studies during the final year to scale a trading venture; subsequently awarded the BEng degree by the University of Bristol."
            }
        ]
    }
};
