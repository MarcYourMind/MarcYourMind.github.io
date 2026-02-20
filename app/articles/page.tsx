"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react"

import Link from "next/link"

const articles = [
    {
        slug: "building-low-latency-trading-systems",
        title: "Building Low-Latency Trading Systems: The Plutus Architecture",
        excerpt: "Insights into architecting ultra-low latency systems for NASDAQ futures using C++ and Interactive Brokers.",
        date: "Feb 12, 2024",
        readTime: "12 min read",
        tags: ["Quant", "C++", "Architecture"]
    },
    {
        slug: "smart-contract-security-exploits",
        title: "Smart Contract Security in Web3 Gaming: Lessons from Chain Champions",
        excerpt: "Exploring the security architecture of the Chain Champions NFT platform, from secure escrow patterns to automated tournament payouts.",
        date: "Jan 28, 2024",
        readTime: "15 min read",
        tags: ["Web3", "Security", "Solidity"]
    },
    {
        slug: "scaling-backend-event-driven",
        title: "Event-Driven Scalability in Fintech: From Technex to Brite Payments",
        excerpt: "How we leveraged event-driven architecture to scale real-time PSD2 bank transfers and fintech API integrations.",
        date: "Jan 15, 2024",
        readTime: "10 min read",
        tags: ["Backend", "Fintech", "Scalability"]
    },
    {
        slug: "machine-learning-pipelines-production",
        title: "Machine Learning Pipelines: The Multi-Agent Trading Evolution",
        excerpt: "Building a 20-agent autonomous trading system with LangChain, local LLMs, and event-driven pipelines.",
        date: "Mar 01, 2024",
        readTime: "14 min read",
        tags: ["AI", "MLOps", "Python"]
    },
    {
        slug: "automated-market-making-solana",
        title: "Automated Market Making on Solana: High-Velocity Liquidity",
        excerpt: "Building high-performance market-making bots on Solana using the Raydium SDK and Node.js.",
        date: "Mar 15, 2024",
        readTime: "12 min read",
        tags: ["Web3", "Solana", "Quant"]
    },
    {
        slug: "cervantes-ai-storyteller",
        title: "Cervantes: The Autonomous AI Multi-Agent Storyteller",
        excerpt: "Building a multi-agent AI system with LangChain and local LLMs to autonomously plan and write high-quality novels.",
        date: "Mar 20, 2024",
        readTime: "10 min read",
        tags: ["AI", "Python", "MAS"]
    }
]

export default function ArticlesPage() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <header className="mb-16 text-center">
                        <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 tracking-tighter">Insights & <span className="text-gradient">Articles</span></h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Deep dives into engineering challenges, architectural patterns, and the future of technology.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {articles.map((article, i) => (
                            <Link href={`/articles/${article.slug}`} key={article.slug}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative glass-card p-8 md:p-12 transition-all hover:bg-white/10"
                                >
                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-white/40">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-2" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock size={14} className="mr-2" />
                                            {article.readTime}
                                        </div>
                                        <div className="flex gap-2">
                                            {article.tags.map(tag => (
                                                <span key={tag} className="text-accent-blue">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-accent-blue transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center text-white font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                                        Read Full Article <ArrowRight className="ml-2 w-4 h-4 text-accent-blue" />
                                    </div>

                                    <div className="absolute top-8 right-8 text-white/5 group-hover:text-accent-blue/10 transition-colors">
                                        <BookOpen size={80} />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    )
}
