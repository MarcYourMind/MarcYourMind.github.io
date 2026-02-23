export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    description: string;
    image?: string;
    file?: string;
}

export const certificates: Certificate[] = [
    {
        id: "ml-coursera-lost",
        title: "Machine Learning",
        issuer: "Coursera",
        description: "Comprehensive study of supervised and unsupervised learning, including neural networks, deep learning, and practical implementation of ML models.",
        image: "/certificates/placeholders/ml-coursera.png"
    },
    {
        id: "hf-ai-agents",
        title: "AI Agents",
        issuer: "HuggingFace",
        description: "Specialized certification in building autonomous AI agents using the HuggingFace Transformers and Agents ecosystem.",
        image: "/certificates/placeholders/hf-ai-agents.png"
    },
    {
        id: "langchain-ai-agents",
        title: "AI Agents with LangChain",
        issuer: "LangChain",
        description: "Expertise in developing LLM-powered applications and autonomous agents using the LangChain framework.",
        file: "/certificates/langchain-cert.pdf"
    },
    {
        id: "langchain-deep-agents",
        title: "Deep Agents",
        issuer: "LangChain",
        description: "Advanced certification focusing on complex multi-agent workflows, state management, and long-term memory in LLM systems.",
        file: "/certificates/deep-agents-cert.pdf"
    },
    {
        id: "gradio-cert",
        title: "Gradio Certification",
        issuer: "HuggingFace / Gradio",
        description: "Mastery in building interactive web interfaces for machine learning models and data science projects.",
        file: "/certificates/gradio-cert.pdf"
    },
    {
        id: "bubble-lost",
        title: "Bubble Certification",
        issuer: "Bubble",
        description: "Certification in no-code application development.",
        image: "/certificates/placeholders/bubble-lost.png"
    },
    {
        id: "uni-degree",
        title: "BEng Computer Science & Electronics",
        issuer: "University of Bristol",
        description: "Official Bachelor's degree certification for completion of Computer Science and Electronics engineering curriculum.",
        image: "/certificates/placeholders/uni-degree.png",
        file: "/certificates/degree.pdf"
    },
    {
        id: "uni-transcript",
        title: "Academic Transcript",
        issuer: "University of Bristol",
        description: "Detailed academic record and course completions for the BEng in Computer Science & Electronics, where I averaged First-Class Honours.",
        image: "/certificates/placeholders/uni-transcript.png",
        file: "/certificates/transcript.pdf"
    }
];
