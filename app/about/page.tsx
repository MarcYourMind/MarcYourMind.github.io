"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { specializations } from "@/data/specializations"
import { Code, Zap, Heart, Layers, Activity, Search, Target } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutPage() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <header className="mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-heading font-black mb-6"
                        >
                            The Mind Behind <span className="text-gradient">The Code</span>
                        </motion.h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="col-span-1">
                            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                                <img
                                    src="/me.png"
                                    alt="Marc Your Mind"
                                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Layers size={18} className="text-accent-blue" />
                                    <span className="text-sm font-medium">6+ Years Building Products</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Activity size={18} className="text-accent-purple" />
                                    <span className="text-sm font-medium">From Idea → Production</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Search size={18} className="text-accent-teal" />
                                    <span className="text-sm font-medium">Fueled by Curiosity</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Target size={18} className="text-accent-pink" />
                                    <span className="text-sm font-medium">Product-Focused Engineer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 space-y-6 text-white/60 text-lg leading-relaxed">
                            <p>
                                I'm a senior software engineer with over 6 years of experience designing and scaling
                                high-performance backend systems, specifically in FinTech and data-intensive environments.
                                My expertise spans low-latency trading systems, AI architectures, and cloud-native microservices, with a strong focus
                                on mathematical modeling and risk reduction in complex ecosystems.
                            </p>
                            <p>
                                I believe that code is an art form—one that requires precision and elegance.
                                Whether I'm optimizing a trading engine for low-latency execution, deploying secure
                                smart contracts for Web3 platforms, or designing predictive models for market analytics,
                                I approach every challenge with technical rigor and a focus on production-grade reliability.
                            </p>
                            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {specializations.map(spec => (
                                    <div key={spec.id} className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: spec.color }} />
                                        <span className="text-sm font-bold text-white/80">{spec.title}</span>
                                    </div>
                                ))}
                            </div>
                            <p>
                                Outside of my professional work, I am deeply committed to the practice of creative expression.
                                I believe that each person has a unique voice that deserves to be shared with the world.
                                For me, creating art is a practice that feeds the soul and connects us to the source—allowing us to reach our higher selves.
                            </p>
                        </div>
                    </div>

                    <section className="py-20 border-t border-white/5">
                        <h2 className="text-2xl font-heading font-bold mb-12 uppercase tracking-widest text-sm text-center">My Philosophy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Artistic Precision",
                                    desc: "I approach software as a canvas. Like my abstract art, I build systems with intricate detail and structural elegance, where every line of code serves a clear purpose.",
                                    icon: Code,
                                    color: "text-accent-blue"
                                },
                                {
                                    title: "Rhythmic Pulse",
                                    desc: "Inspired by high-energy soundscapes, I design backend architectures that maintain a perfect beat. Performance and stability are the rhythm of everything I build.",
                                    icon: Activity,
                                    color: "text-accent-purple"
                                },
                                {
                                    title: "Resilient Innovation",
                                    desc: "I bridge mathematical rigor with human intuition. My goal is to create products in AI and Web3 that are as robust as they are transformative.",
                                    icon: Target,
                                    color: "text-accent-pink"
                                },
                                { title: "Performance First", desc: "Latency isn't just a metric; it's a competitive advantage. I design systems where every microsecond and byte counts.", icon: Zap, color: "text-accent-blue" },
                                { title: "Clean Architecture", desc: "Code is for humans to read and machines to execute. I build modular systems that are as maintainable as they are powerful.", icon: Code, color: "text-accent-purple" },
                                { title: "User Centric", desc: "Great engineering solves real problems. I bridge the gap between complex backend logic and intuitive user experiences.", icon: Heart, color: "text-accent-pink" },
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-8 text-center group">
                                    <item.icon className={cn("w-10 h-10 mx-auto mb-6 transition-transform group-hover:scale-110", item.color)} />
                                    <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                                    <p className="text-sm text-white/40">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </main>
    )
}
