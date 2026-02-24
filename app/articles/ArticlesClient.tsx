"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react"
import { useI18n } from "@/components/I18nProvider"
import Link from "next/link"
import type { ArticleMeta } from "@/lib/articles"

export default function ArticlesClient({ articles, articlesMap }: { articles: ArticleMeta[], articlesMap?: Record<string, ArticleMeta[]> }) {
    const { t, locale } = useI18n()

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <header className="mb-16 text-center">
                        <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 tracking-tighter">
                            {(() => {
                                const title = t("articles.title") || "Insights & Articles"
                                if (title.includes('&')) {
                                    const parts = title.split('&')
                                    return <>{parts[0].trim()} &amp; <span className="text-gradient">{parts[1].trim()}</span></>
                                } else if (title.includes(' y ')) {
                                    const parts = title.split(' y ')
                                    return <>{parts[0].trim()} y <span className="text-gradient">{parts[1].trim()}</span></>
                                } else if (title.includes(' et ')) {
                                    const parts = title.split(' et ')
                                    return <>{parts[0].trim()} et <span className="text-gradient">{parts[1].trim()}</span></>
                                }
                                return title
                            })()}
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            {t("articles.subtitle")}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {(articlesMap?.[locale] || articles).map((article, i) => (
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
                                        {t("articles.readFull")} <ArrowRight className="ml-2 w-4 h-4 text-accent-blue" />
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
