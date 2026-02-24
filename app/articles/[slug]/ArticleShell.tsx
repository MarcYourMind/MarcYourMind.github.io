"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Calendar, Clock, ArrowLeft, ChevronRight, Share2, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import type { Article } from "@/lib/articles"

interface ArticleShellProps {
    article: Article
    children: React.ReactNode
}

export default function ArticleShell({ article, children }: ArticleShellProps) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const headings = article.toc.map((item) => ({
                id: item.id,
                el: document.getElementById(item.id),
            }))

            let current = ""
            for (const { id, el } of headings) {
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150) {
                        current = id
                    } else {
                        break
                    }
                }
            }
            setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        const timer = setTimeout(handleScroll, 200)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            clearTimeout(timer)
        }
    }, [article.toc])

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
                                    <span className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center font-bold text-xs text-accent-blue font-heading">MG</span>
                                    Marc Goulding Tójar
                                </div>
                            </div>
                        </motion.header>

                        {/* MDX Content */}
                        <article className="prose prose-invert prose-2xl max-w-none prose-hft article-content">
                            {children}
                        </article>

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

                    {/* Sidebar TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-40">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Table of Contents</h3>
                            <nav className="flex flex-col gap-3">
                                {article.toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`text-sm font-medium transition-all flex items-center ${item.level === 3 ? "pl-4" : ""
                                            } ${activeSection === item.id
                                                ? "text-accent-blue translate-x-1"
                                                : "text-white/40 hover:text-white/60"
                                            }`}
                                    >
                                        <ChevronRight
                                            size={14}
                                            className={`mr-2 flex-shrink-0 transition-transform ${activeSection === item.id ? "opacity-100" : "opacity-0"
                                                }`}
                                        />
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
