"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { specializations } from "@/data/specializations"
import {
    Code, Zap, Heart, Layers, Activity, Search, Target,
    Cpu, PenTool, Shield, TrendingUp, Clock,
    Database, BookOpen, Sparkles, Brain,
    Fingerprint, Globe, Microscope, Radio
} from "lucide-react"
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
                                I&apos;m a software engineer and electronics engineer with a passion for building ideas into products.
                                I have a strong background in software development, AI development, and applying math to trading systems.
                                I am a quick learner and can pick up new technologies quickly.
                                I am also a team player and enjoy working in a collaborative environment.
                            </p>
                            <p>
                                I believe my purpose in life is to make the world a better place by building technology.
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
                                I am at my best when I am solving hard problems. Contributing to something bigger than myself.
                            </p>
                            <p>
                                Currently I spend my time building platforms, developing AI projects, trading crypto and developing my discipline.
                            </p>
                            <p>
                                I am looking to join a team of like-minded people who want to change the world one step at a time.
                            </p>
                        </div>
                    </div>

                    <section className="py-20 border-t border-white/5">
                        <h2 className="text-2xl font-heading font-bold mb-12 uppercase tracking-widest text-sm text-center">My Philosophy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Artistic Precision",
                                    desc: "I build systems with intricate detail and structural elegance, where every line of code serves a clear purpose.",
                                    icon: Code,
                                    color: "text-accent-blue"
                                },
                                {
                                    title: "Engineering Excellence",
                                    desc: "Following best practices and highest performance standards is my personal obsession. I apply rigorous engineering principles to ensure every system is optimized, secure, and built to last.",
                                    icon: Shield,
                                    color: "text-accent-purple"
                                },
                                {
                                    title: "Clean Architecture",
                                    desc: "Code is for humans to read and machines to execute. I build modular systems that are as maintainable as they are powerful.",
                                    icon: Code,
                                    color: "text-accent-purple"
                                },
                                {
                                    title: "User Centric",
                                    desc: "Great minds are capable of turning complex ideas into simple and elegant solutions. I bridge the gap between complex systems and intuitive user experiences.",
                                    icon: Heart,
                                    color: "text-accent-pink"
                                },
                                {
                                    title: "Anti-Fragile Design",
                                    desc: "Engineered for correctness from the first line. My background in design verification and validation allows me to build robust, anti-fragile systems with a 'design for failure' mindset, ensuring reliability where it matters most.",
                                    icon: Radio,
                                    color: "text-orange-400"
                                },
                                {
                                    title: "The Agentic Shift",
                                    desc: "Moving from passive tools to active agents. I focus on autonomous architectures that plan, reason, and execute complex workflows independently.",
                                    icon: Brain,
                                    color: "text-fuchsia-400"
                                },
                                {
                                    title: "Data as Narrative",
                                    desc: "Every dataset tells a story. I build pipelines that transform raw noise into clear, actionable signals for human and machine understanding.",
                                    icon: Database,
                                    color: "text-accent-teal"
                                },
                                {
                                    title: "Strategic Depth",
                                    desc: "Beyond the code lies the mission. I approach every project with a long-term vision, ensuring today's solutions scale and serve a purpose.",
                                    icon: Microscope,
                                    color: "text-lime-400"
                                },
                                {
                                    title: "Spark of Curiosity",
                                    desc: "The 'Why' is as important as the 'How'. Constant experimentation and a beginner's mind keep the engineering process fresh and vibrant.",
                                    icon: Sparkles,
                                    color: "text-amber-400"
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 text-center group"
                                >
                                    <item.icon className={cn("w-10 h-10 mx-auto mb-6 transition-transform group-hover:scale-110", item.color)} />
                                    <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                                    <p className="text-sm text-white/40">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                </div>
            </section>

            <Footer />
        </main>
    )
}
