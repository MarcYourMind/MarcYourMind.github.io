"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Button } from "@/components/Button"
import { ProjectCard } from "@/components/ProjectCard"
import { useI18n } from "@/components/I18nProvider"
import { projects } from "@/data/projects"
import { specializations } from "@/data/specializations"
import { Github, ArrowRight, BookOpen, Server, Shield, TrendingUp, Cpu, Layout, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { socialLinks } from "@/data/socials"
import type { ArticleMeta } from "@/lib/articles"

const iconMap = {
    Server: Server,
    TrendingUp: TrendingUp,
    Shield: Shield,
    Cpu: Cpu,
    Layout: Layout,
}

export function HomeClient({ articles }: { articles: ArticleMeta[] }) {
    const { t } = useI18n()
    const featuredProjects = projects.filter(p => p.featured)

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                                    {t('hero.status')}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 tracking-tighter"
                            >
                                {t('hero.title').split(' ').map((word: string, i: number) => (
                                    <span key={i} className={i === 2 ? "text-gradient" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 mb-10"
                            >
                                {t('hero.subtitle')}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            >
                                <Link href="/projects" className="w-full sm:w-auto">
                                    <Button variant="primary" size="lg" className="w-full">
                                        {t('hero.viewProjects')}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button variant="secondary" size="lg" className="w-full">
                                        <Github className="mr-2 w-4 h-4" />
                                        GitHub
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:block relative"
                        >
                            <div className="absolute -inset-4 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
                            <div className="relative z-10 aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 group">
                                <img
                                    src="/me.png"
                                    alt="Marc Your Mind"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { label: t('home.stats.years'), value: "6+" },
                            { label: t('home.stats.projects'), value: "30+" },
                            { label: t('home.stats.certs'), value: "8+ " },
                            { label: t('home.stats.languages'), value: "19" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-heading font-black text-white mb-1">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-20 relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t('specializations.title')}</h2>
                        <div className="h-1 w-20 bg-accent-blue mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {specializations.map((spec, i) => {
                            const Icon = iconMap[spec.icon as keyof typeof iconMap] || Server
                            return (
                                <motion.div
                                    key={spec.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer"
                                    style={{ '--hover-color': spec.color } as any}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                        <Icon className="w-8 h-8 transition-colors group-hover:text-accent-blue" style={{ color: spec.color }} />
                                    </div>
                                    <h3 className="font-heading font-bold mb-3">{t(spec.title)}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed">
                                        {t(spec.description)}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t('home.featuredProjects.title')}</h2>
                            <p className="text-white/40 max-w-lg">
                                {t('home.featuredProjects.subtitle')}
                            </p>
                        </div>
                        <Link href="/projects" className="hidden md:flex items-center text-accent-blue font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                            {t('home.featuredProjects.viewAll')} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Insights (Replacing Testimonials) */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-blue/5 opacity-20 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
                                {t('home.insights.title').split(' ').map((word: string, i: number) => (
                                    <span key={i} className={word === "Insights" ? "text-gradient" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h2>
                            <p className="text-white/40 max-w-lg">
                                {t('home.insights.subtitle')}
                            </p>
                        </div>
                        <Link href="/articles">
                            <Button variant="secondary" size="md">
                                {t('home.insights.viewAll')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <Link href={`/articles/${article.slug}`} key={article.slug}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-8 h-full flex flex-col group hover:bg-white/10"
                                >
                                    <div className="flex items-center gap-4 mb-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
                                        <div className="flex items-center">
                                            <Calendar size={12} className="mr-1 text-accent-blue" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock size={12} className="mr-1 text-accent-purple" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-accent-blue transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-white/50 mb-8 flex-grow line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-accent-blue group-hover:translate-x-2 transition-transform">
                                        {t('home.insights.readMore')} <ArrowRight className="ml-2 w-3 h-3" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-white/5 group-hover:text-accent-blue/10 transition-colors pointer-events-none">
                                        <BookOpen size={40} />
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
