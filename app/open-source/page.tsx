"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { openSourceData } from "@/data/opensource"
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react"
import { socialLinks } from "@/data/socials"
import Link from "next/link"

export default function OpenSourcePage() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <header className="mb-16">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Code2 className="w-4 h-4 text-accent-purple" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Community First</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">Open Source <span className="text-gradient">Contributions</span></h1>
                        <p className="text-xl text-white/60 max-w-2xl">
                            I believe in giving back to the community. Here are some of my most impactful open-source projects and contributions.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {openSourceData.map((repo, i) => (
                            <motion.div
                                key={repo.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-card p-8 flex flex-col group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white/5 text-accent-purple hover:bg-accent-purple hover:text-white transition-all">
                                        <Github size={24} />
                                    </a>
                                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="block group/link">
                                    <h3 className="text-xl font-heading font-bold mb-3 truncate group-hover/link:text-accent-blue transition-colors">{repo.name}</h3>
                                </a>
                                <p className="text-sm text-white/60 mb-8 flex-grow leading-relaxed">
                                    {repo.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex items-center space-x-4">
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5 text-white/40">
                                        {repo.language}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 glass-panel text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 relative z-10">Want to collaborate?</h2>
                        <p className="text-white/60 mb-8 max-w-lg mx-auto relative z-10">
                            I'm always looking for interesting projects to contribute to. If you're working on something groundbreaking, let's talk.
                        </p>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <button className="relative z-10 px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-accent-blue hover:text-white transition-all duration-300">
                                View GitHub Profile
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
