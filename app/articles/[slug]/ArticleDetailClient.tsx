"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion, useScroll, useSpring } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Calendar, Clock, ArrowLeft, ChevronRight, Share2, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

// This is a simplified approach. In a real project, you'd use a real MDX bundler/loader.
// For this portfolio, we'll simulate the MDX content loading.
const articleContent: Record<string, any> = {
    "building-low-latency-trading-systems": {
        title: "Building Low-Latency Trading Systems in Modern C++",
        date: "Feb 12, 2024",
        readTime: "12 min read",
        tags: ["Quant", "C++", "Architecture"],
        author: "Marc Mind",
        content: `
            <h2 id="kernel-bypass">Kernel Bypass Techniques</h2>
            <p>To achieve ultra-low latency, we often need to bypass the standard Linux networking stack. Technologies like <strong>Solarflare's Onload</strong> or <strong>DPDK</strong> are essential for reducing the overhead of context switches and interrupt handling.</p>
            
            <h2 id="lock-free">Lock-Free Programming</h2>
            <p>Avoid mutexes at all costs in the hot path. Use atomic operations and lock-free queues for inter-thread communication. Mutexes induce non-deterministic delays that are unacceptable in high-frequency trading environments.</p>
            
            <pre><code>#include &lt;atomic&gt;
 
template&lt;typename T&gt;
class LockFreeQueue {
    // Implementation of a single-producer single-consumer queue
};</code></pre>
 
            <h2 id="cpu-pinning">CPU Pinning & Isolation</h2>
            <p>Isolating cores and pinning threads to specific CPUs can drastically reduce cache misses and context switch overhead. We use isolcpus in the boot loader to ensure the OS doesn't schedule anything else on our critical path cores.</p>
        `,
        toc: [
            { id: "kernel-bypass", text: "Kernel Bypass Techniques" },
            { id: "lock-free", text: "Lock-Free Programming" },
            { id: "cpu-pinning", text: "CPU Pinning & Isolation" }
        ]
    },
    "smart-contract-security": {
        title: "Smart Contract Security: The 10 Most Common Exploits",
        date: "Jan 28, 2024",
        readTime: "15 min read",
        tags: ["Web3", "Security", "Solidity"],
        author: "Marc Mind",
        content: `
            <h2 id="reentrancy">Reentrancy</h2>
            <p>Reentrancy remains the most critical vulnerability. It occurs when a contract calls an external address, allowing that address to call back into the original contract before the first execution is finished.</p>
            
            <pre><code>// Secure Code
function withdraw() public {
    uint amount = balances[msg.sender];
    balances[msg.sender] = 0; // Update state before interaction
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
}</code></pre>
 
            <h2 id="overflow">Integer Overflow and Underflow</h2>
            <p>Since Solidity 0.8.0, this is handled automatically. However, for older contracts, SafeMath is mandatory.</p>
        `,
        toc: [
            { id: "reentrancy", text: "Reentrancy" },
            { id: "overflow", text: "Integer Overflow" }
        ]
    },
    "scaling-backend-event-driven": {
        title: "Scaling Backend Systems with Event-Driven Architecture",
        date: "Jan 15, 2024",
        readTime: "10 min read",
        tags: ["Backend", "Kafka", "Scalability"],
        author: "Marc Mind",
        content: `
            <h2 id="monoliths">The Shift from Monoliths to Microservices</h2>
            <p>Modern applications require systems that can scale horizontally and handle failures gracefully. Event-driven architecture (EDA) allows services to communicate asynchronously via events, reducing coupling and increasing fault tolerance.</p>
            
            <h2 id="kafka">Kafka for Event Streaming</h2>
            <p>Kafka acts as the central nervous system of an event-driven setup. It provides high-throughput, fault-tolerant delivery of messages between services.</p>
            
            <pre><code># Simple Kafka Producer Config
bootstrap.servers: localhost:9092
key.serializer: org.apache.kafka.common.serialization.StringSerializer
value.serializer: org.apache.kafka.common.serialization.StringSerializer</code></pre>

            <h2 id="dlq">Dead Letter Queues (DLQ)</h2>
            <p>Handling failures is critical. Use DLQs to capture failed events for later inspection and reprocessing without blocking the main stream processing.</p>
        `,
        toc: [
            { id: "monoliths", text: "Decoupling Services" },
            { id: "kafka", text: "Kafka Integration" },
            { id: "dlq", text: "Failure Handling" }
        ]
    },
    "machine-learning-pipelines-production": {
        title: "Building Scalable ML Pipelines for Production",
        date: "Mar 05, 2024",
        readTime: "14 min read",
        tags: ["AI", "MLOps", "Python"],
        author: "Marc Mind",
        content: `
            <h2 id="data-ingestion">Data Ingestion at Scale</h2>
            <p>The foundation of any ML pipeline is a robust data ingestion layer. We use distributed systems to collect and preprocess terabytes of data daily.</p>
            
            <h2 id="feature-engineering">Automated Feature Engineering</h2>
            <p>Standardizing feature extraction ensures that training and inference always use the same data representations. We implemented a feature store using Redis for low-latency lookups.</p>
            
            <h2 id="monitoring">Model Monitoring</h2>
            <p>ML models drift over time. Continuous monitoring of prediction distributions and accuracy is essential to trigger retraining cycles automatically.</p>
        `,
        toc: [
            { id: "data-ingestion", text: "Data Ingestion" },
            { id: "feature-engineering", text: "Feature Engineering" },
            { id: "monitoring", text: "Model Monitoring" }
        ]
    }
}

export default function ArticleDetailClient() {
    const params = useParams()
    const slug = params?.slug as string
    const article = articleContent[slug] || articleContent["building-low-latency-trading-systems"] // Fallback for demo

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-100px 0px -70% 0px" }
        )

        article.toc.forEach((item: any) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [article])

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-accent-blue origin-left z-[100]"
                style={{ scaleX }}
            />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                    {/* Main Content */}
                    <div className="max-w-4xl">
                        <Link
                            href="/articles"
                            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group"
                        >
                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Articles
                        </Link>

                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold uppercase tracking-widest text-accent-blue">
                                {article.tags.map((tag: string) => (
                                    <span key={tag}>#{tag}</span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight tracking-tighter">
                                {article.title}
                            </h1>
                            <div className="flex items-center gap-8 text-white/40 font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    {article.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    {article.readTime}
                                </div>
                                <div className="flex items-center gap-2 text-white/60">
                                    <span className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center font-bold text-xs text-accent-blue font-heading">MM</span>
                                    {article.author}
                                </div>
                            </div>
                        </motion.header>

                        <article
                            className="prose prose-invert prose-lg max-w-none 
                                prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
                                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-8
                                prose-code:text-accent-purple prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
                                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:p-6 prose-pre:rounded-xl
                                article-content"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Footer Social */}
                        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-white/40 uppercase tracking-widest text-xs font-bold">Share Article</span>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-blue/20 hover:text-accent-blue transition-all">
                                        <Twitter size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-blue/20 hover:text-accent-blue transition-all">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-blue/20 hover:text-accent-blue transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="px-8 py-3 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-bold uppercase tracking-widest text-xs hover:bg-accent-blue hover:text-white transition-all"
                            >
                                Discuss with me
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar / TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-40">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Table of Contents</h3>
                            <nav className="flex flex-col gap-4">
                                {article.toc.map((item: any) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`text-sm font-medium transition-all flex items-center ${activeSection === item.id
                                            ? "text-accent-blue translate-x-1"
                                            : "text-white/40 hover:text-white/60"
                                            }`}
                                    >
                                        <ChevronRight size={14} className={`mr-2 transition-transform ${activeSection === item.id ? "opacity-100" : "opacity-0"}`} />
                                        {item.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    )
}
