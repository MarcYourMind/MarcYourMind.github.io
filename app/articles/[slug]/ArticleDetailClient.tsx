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
        title: "Building Low-Latency Trading Systems: The Plutus Architecture",
        date: "Feb 12, 2024",
        readTime: "12 min read",
        tags: ["Quant", "C++", "Architecture"],
        author: "Marc Mind",
        content: `
            <h2 id="philosophy">The Plutus Design Philosophy</h2>
            <p>Plutus was built to interface directly with <strong>Interactive Brokers</strong>, demanding a system that could handle rapid market data updates while maintaining strict statistical risk controls.</p>

            <h2 id="architecture">Key Architectural Pillars</h2>
            <ul>
                <li><strong>Asynchronous Execution</strong>: Decoupling market data ingestion from signal generation and order placement.</li>
                <li><strong>Deterministic Processing</strong>: Minimizing jitter by avoiding heap allocations in the hot path.</li>
                <li><strong>Statistical Risk Controls</strong>: Real-time monitoring of slippage, drawdown, and exposure limits.</li>
            </ul>

            <h2 id="ibkr">Interactive Brokers Integration</h2>
            <p>Integrating with the IBKR API required custom wrappers to handle the asynchronous nature of their message-driven architecture.</p>

            <pre><code>// Simplified Order Manager Snippet
class OrderManager : public EWrapper {
    void nextValidId(OrderId orderId) override {
        m_nextOrderId = orderId;
    }
    
    void placeAutomatedOrder(const Contract& contract, const Order& order) {
        m_client->placeOrder(m_nextOrderId++, contract, order);
    }
};</code></pre>

            <h2 id="risk">Statistical Risk Management</h2>
            <p>Performance is secondary to preservation. Plutus implements a multi-layered risk engine that monitors every order before it hits the wire.</p>
        `,
        toc: [
            { id: "philosophy", text: "Design Philosophy" },
            { id: "architecture", text: "Architectural Pillars" },
            { id: "ibkr", text: "IBKR Integration" },
            { id: "risk", text: "Risk Management" }
        ]
    },
    "smart-contract-security-exploits": {
        title: "Smart Contract Security in Web3 Gaming: Lessons from Chain Champions",
        date: "Jan 28, 2024",
        readTime: "15 min read",
        tags: ["Web3", "Security", "Solidity"],
        author: "Marc Mind",
        content: `
            <h2 id="escrow">Secure Escrow Patterns</h2>
            <p>The core of any competitive gaming platform is the escrow system. At Chain Champions, we designed an escrow contract that holds entry fees securely until tournament completion.</p>

            <h2 id="reentrancy">Checks-Effects-Interactions</h2>
            <p>We strictly followed the <strong>Checks-Effects-Interactions</strong> pattern to prevent reentrancy attacks, especially during the payout phase where winners withdraw their prizes.</p>

            <pre><code>// Secure Payout Pattern
function claimPrize(uint tournamentId) public nonReentrant {
    uint prize = tournamentPrizes[tournamentId][msg.sender];
    require(prize > 0, "No prize available");

    // Effects: Update state before interaction
    tournamentPrizes[tournamentId][msg.sender] = 0;

    // Interactions: Direct transfer to the winner
    (bool success, ) = msg.sender.call{value: prize}("");
    require(success, "Transfer failed");

    emit PrizeClaimed(msg.sender, prize);
}</code></pre>

            <h2 id="automation">Automated Tournament Payouts</h2>
            <p>Payouts are triggered by a multi-agent system that verifies match results before authorizing the contract to release funds.</p>
        `,
        toc: [
            { id: "escrow", text: "Escrow Patterns" },
            { id: "reentrancy", text: "Reentrancy Protection" },
            { id: "automation", text: "Automated Payouts" }
        ]
    },
    "scaling-backend-event-driven": {
        title: "Event-Driven Scalability in Fintech: From Technex to Brite Payments",
        date: "Jan 15, 2024",
        readTime: "10 min read",
        tags: ["Backend", "Fintech", "Scalability"],
        author: "Marc Mind",
        content: `
            <h2 id="fintech">The Fintech Challenge: PSD2 & Real-Time Transfers</h2>
            <p>Integrating with PSD2-compliant APIs requires managing complex authentication flows and ensuring that real-time bank transfers are processed without interruption.</p>

            <h2 id="eda">Decoupling for Resilience</h2>
            <p>By using an event-driven approach, we decoupled the sensitive bank communication layers from the core transaction processing.</p>

            <pre><code>// Example Event-Driven Transfer Initiation
async function initiateTransfer(transferData: TransferRequest) {
    try {
        const transfer = await db.createTransfer(transferData);
        await eventBus.publish('TRANSFER_INITIATED', {
            id: transfer.id,
            amount: transfer.amount,
            destination: transfer.iban
        });
        return { status: 'PENDING', reference: transfer.id };
    } catch (error) {
        log.error('Failed to initiate transfer', error);
        throw new FintechError('INITIALIZATION_FAILED');
    }
}</code></pre>

            <h2 id="microservices">Scaling with Microservices</h2>
            <p>At Technex, we focused on building modular microservices that could scale independently, allowing us to handle thousands of concurrent API requests.</p>
        `,
        toc: [
            { id: "fintech", text: "PSD2 Challenge" },
            { id: "eda", text: "Event-Driven Resilience" },
            { id: "microservices", text: "Microservices Scaling" }
        ]
    },
    "machine-learning-pipelines-production": {
        title: "Machine Learning Pipelines: The Multi-Agent Trading Evolution",
        date: "Mar 01, 2024",
        readTime: "14 min read",
        tags: ["AI", "MLOps", "Python"],
        author: "Marc Mind",
        content: `
            <h2 id="mas">From Monolithic Models to Multi-Agent Systems</h2>
            <p>AiTrader solves the non-stationary nature of financial markets by employing a hierarchical multi-agent architecture (MAS). Instead of one master model, we use a pool of specialized agents.</p>

            <h2 id="hierarchy">The Agent Hierarchy</h2>
            <ul>
                <li><strong>Feature Engineering Agents</strong>: Calculate indicators and market regimes.</li>
                <li><strong>Strategy Agent Pool</strong>: Independent agents running diverse strategies.</li>
                <li><strong>Consensus & Risk Agents</strong>: Aggregate signals and enforce strict rules.</li>
            </ul>

            <h2 id="llm">Local LLM Integration: Phi-3 & LangChain</h2>
            <p>We leverage local LLMs like <strong>Phi-3 Mini</strong> via Ollama to perform qualitative reasoning, such as asset sanity checks.</p>

            <pre><code># LangChain Orchestration Snippet
from langchain_community.llms import Ollama
from langchain.prompts import PromptTemplate

llm = Ollama(model="phi3:mini")
prompt = PromptTemplate.from_template("Analyze: {structure}")

chain = prompt | llm
response = chain.invoke({"structure": market_json})</code></pre>
        `,
        toc: [
            { id: "mas", text: "Multi-Agent Architecture" },
            { id: "hierarchy", text: "Agent Hierarchy" },
            { id: "llm", text: "Local LLM Usage" }
        ]
    },
    "automated-market-making-solana": {
        title: "Automated Market Making on Solana: High-Velocity Liquidity",
        date: "Mar 15, 2024",
        readTime: "12 min read",
        tags: ["Web3", "Solana", "Quant"],
        author: "Marc Mind",
        content: `
            <h2 id="solana">Leveraging the Solana Advantage</h2>
            <p>Solana's low transaction costs and high throughput allow for sophisticated market-making strategies. We chose <strong>Node.js</strong> for its excellent asynchronous performance.</p>

            <h2 id="raydium">Integration with Raydium SDK</h2>
            <p>Direct integration with the <strong>Raydium SDK</strong> allowed us to interact with concentrated liquidity pools and OpenBook order books.</p>

            <pre><code>// Simplified AMM Logic
import { Market, Liquidity } from '@raydium-io/raydium-sdk';

async function updateLiquidity(marketId: string, spread: number) {
    const market = await Market.load(connection, marketId, programId);
    // ... calculate pricing and submit orders
}</code></pre>

            <h2 id="strategies">Automated Pricing Strategies</h2>
            <p>The bot employs a dynamic pricing model that adapts to real-time market depth and volatility, monitoring the "heat" of the order book.</p>
        `,
        toc: [
            { id: "solana", text: "Solana Advantage" },
            { id: "raydium", text: "Raydium SDK" },
            { id: "strategies", text: "Pricing Strategies" }
        ]
    },
    "cervantes-ai-storyteller": {
        title: "Cervantes: The Autonomous AI Multi-Agent Storyteller",
        date: "Mar 20, 2024",
        readTime: "10 min read",
        tags: ["AI", "Python", "MAS"],
        author: "Marc Mind",
        content: `
            <h2 id="storytelling">The Challenge: Coherence in Long-Form Narrative</h2>
            <p>Traditional single-prompt AI storytelling often suffers from narrative drift. Cervantes solves this by breaking the process down into specialized roles.</p>

            <h2 id="roles">The Multi-Agent "Quality Loop"</h2>
            <ul>
                <li><strong>The Planner</strong>: Designs character profiles, world-building, and multi-act plot frameworks.</li>
                <li><strong>The Writer</strong>: Transforms plans into sensory-rich prose and authentic dialogue.</li>
                <li><strong>The Evaluator</strong>: Acts as a quality gatekeeper, critiquing chapters and requesting iterations.</li>
            </ul>

            <h2 id="stack">Implementation & Technology Stack</h2>
            <p>Cervantes is built with <strong>Python</strong> and <strong>LangChain</strong>, using local LLMs via Ollama for privacy and cost-efficiency.</p>

            <pre><code># Orchestration Snippet
# Using LangChain to maintain state between agents
from langchain.agents import AgentExecutor
# ... specialized roles implementation</code></pre>

            <h2 id="outlook">Future of AI Storytelling</h2>
            <p>Future iterations aim to include AI-generated illustrations and TTS narration, creating a unified multimedia storytelling experience.</p>
        `,
        toc: [
            { id: "storytelling", text: "Narrative Coherence" },
            { id: "roles", text: "Multi-Agent Loop" },
            { id: "stack", text: "Technical Stack" },
            { id: "outlook", text: "Future Outlook" }
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
