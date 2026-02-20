"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { specializations } from "@/data/specializations"
import { Code, Terminal, Zap, Heart, Coffee } from "lucide-react"
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
                                    <Terminal size={18} className="text-accent-blue" />
                                    <span className="text-sm font-medium">6+ Years Experience</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Zap size={18} className="text-accent-purple" />
                                    <span className="text-sm font-medium">30+ Production Systems</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Coffee size={18} className="text-accent-teal" />
                                    <span className="text-sm font-medium">Infinite Coffee Loop</span>
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
                                { title: "Performance First", desc: "Speed is a feature. I optimize for latency and throughput in every layer.", icon: Zap, color: "text-accent-blue" },
                                { title: "Clean Architecture", desc: "Building modular, testable, and maintainable systems that stand the test of time.", icon: Code, color: "text-accent-purple" },
                                { title: "User Centric", desc: "Engineering solutions that empower users and provide a seamless experience.", icon: Heart, color: "text-accent-pink" },
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
