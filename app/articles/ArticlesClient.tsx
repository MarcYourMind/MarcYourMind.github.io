"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import type { ArticleMeta } from "@/lib/articles"

export default function ArticlesClient({ articles }: { articles: ArticleMeta[] }) {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <header className="mb-16 text-center">
                        <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 tracking-tighter">Insights &amp; <span className="text-gradient">Articles</span></h1>
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
