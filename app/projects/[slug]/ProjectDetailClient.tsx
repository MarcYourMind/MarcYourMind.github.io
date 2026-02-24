"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { projects } from "@/data/projects"
import { Button } from "@/components/Button"
import { Github, ExternalLink, ArrowLeft, CheckCircle2, Zap, Shield, ChevronLeft, ChevronRight, FileText } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "@/components/ProjectCard"
import { useState } from "react"
import { useI18n } from "@/components/I18nProvider"

export default function ProjectDetailClient() {
    const { slug } = useParams()
    const { t, locale } = useI18n()
    const project = projects.find(p => p.slug === slug) || projects[0]
    const relatedProjects = projects.filter(p => p.slug !== project.slug && p.tags.some(tag => project.tags.includes(tag))).slice(0, 2)

    const [currentImage, setCurrentImage] = useState(0)
    const screenshots = project.screenshots && project.screenshots.length > 0
        ? project.screenshots
        : [project.thumbnail]

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % screenshots.length)
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length)

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link href="/projects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white mb-12 transition-colors">
                        <ArrowLeft className="mr-2 w-4 h-4" /> {t("projects.ui.backToGallery")}
                    </Link>

                    <header className="mb-16">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-accent-blue/20 text-accent-blue rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 tracking-tighter">{t(`projects.${project.slug}.title`)}</h1>
                        <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
                            {t(`projects.${project.slug}.longDescription`)}
                        </p>
                    </header>

                    {/* Screenshot Carousel */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass-card mb-20 group">
                        <motion.img
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src={screenshots[currentImage]}
                            alt={`${project.title} screenshot ${currentImage + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://placehold.co/1200x675/0a0a0a/0070f3?text=${project.title}+Image+${currentImage + 1}`
                            }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={prevImage}
                                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent-blue transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent-blue transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {screenshots.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-accent-blue w-6" : "bg-white/20"}`}
                                />
                            ))}
                        </div>

                        <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                            {project.liveUrl !== "#" && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="primary" size="sm">
                                        <ExternalLink className="mr-2 w-4 h-4" /> {t("projects.ui.demo")}
                                    </Button>
                                </a>
                            )}
                            {project.githubUrl !== "#" && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="sm">
                                        <Github className="mr-2 w-4 h-4" /> {t("projects.ui.code")}
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
                        <div className="md:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
                                    <Zap className="mr-3 text-accent-blue" /> {t("projects.ui.theChallenge")}
                                </h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {t(`projects.${project.slug}.challenge`)}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
                                    <Shield className="mr-3 text-accent-purple" /> {t("projects.ui.theSolution")}
                                </h2>
                                <p className="text-white/60 leading-relaxed text-lg mb-6">
                                    {t(`projects.${project.slug}.solution`)}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {((t(`projects.${project.slug}.achievements`, { returnObjects: true }) as string[]) || []).map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3 text-sm text-white/80 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <div className="space-y-12">
                            <section className="glass-card p-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">{t("projects.ui.techStack")}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <div key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm font-medium">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {project.metrics && project.metrics.length > 0 && (
                                <section className="glass-card p-8">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">{t("projects.ui.keyMetrics")}</h3>
                                    <div className="space-y-6">
                                        {project.metrics?.map((metric, i) => (
                                            <div key={i}>
                                                <div className={`text-2xl font-heading font-black ${i % 2 === 0 ? 'text-accent-blue' : 'text-accent-purple'}`}>
                                                    {metric.value}
                                                </div>
                                                <div className="text-[10px] uppercase font-bold text-white/40">{t(`projects.${project.slug}.metrics.${metric.label}`)}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {project.articleSlug && (
                                <section className="glass-card p-8 border-accent-blue/30 border">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-6">{t("projects.ui.furtherReading")}</h3>
                                    <p className="text-sm text-white/60 mb-6">
                                        {t("projects.ui.furtherReadingDesc")}
                                    </p>
                                    <Link href={`/articles/${project.articleSlug}`}>
                                        <Button variant="outline" size="sm" className="w-full border-accent-blue/50 text-accent-blue hover:bg-accent-blue hover:text-white">
                                            <FileText className="mr-2 w-4 h-4" /> {t("projects.ui.technicalArticle")}
                                        </Button>
                                    </Link>
                                </section>
                            )}
                        </div>
                    </div>

                    {/* Related Projects */}
                    {relatedProjects.length > 0 && (
                        <section className="pt-20 border-t border-white/10">
                            {(() => {
                                const fullTitle = t("projects.ui.relatedProjects");
                                const words = fullTitle.split(' ');
                                const lastWord = words.pop();
                                const firstPart = words.join(' ');
                                return (
                                    <h2 className="text-3xl font-heading font-black mb-12 tracking-tighter">
                                        {firstPart} <span className="text-gradient">{lastWord}</span>
                                    </h2>
                                );
                            })()}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedProjects.map((p, i) => (
                                    <ProjectCard key={p.slug} project={p} index={i} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
