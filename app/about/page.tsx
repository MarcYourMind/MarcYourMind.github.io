"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { useI18n } from "@/components/I18nProvider"
import { specializations } from "@/data/specializations"
import {
    Code, Zap, Heart, Layers, Activity, Search, Target,
    Cpu, PenTool, Shield, TrendingUp, Clock,
    Database, BookOpen, Sparkles, Brain,
    Fingerprint, Globe, Microscope, Radio
} from "lucide-react"
import { cn } from "@/lib/utils"

const philosophyMap = {
    engineering: { icon: Shield, color: "text-accent-purple" },
    antifragile: { icon: Radio, color: "text-orange-400" },
    agentic: { icon: Brain, color: "text-fuchsia-400" },
    clean: { icon: Layers, color: "text-accent-purple" },
    strategic: { icon: Microscope, color: "text-lime-400" },
    user: { icon: Heart, color: "text-accent-pink" },
    precision: { icon: Code, color: "text-accent-blue" },
    data: { icon: Database, color: "text-accent-teal" },
    curiosity: { icon: Sparkles, color: "text-amber-400" },
}

export default function AboutPage() {
    const { t } = useI18n()

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
                            {t('about.title').split(' ').map((word: string, i: number) => (
                                <span key={i} className={word === "Code" || word === "The" && i > 0 ? "text-gradient" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
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
                                    <span className="text-sm font-medium">{t('about.subtitle.layers')}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Activity size={18} className="text-accent-purple" />
                                    <span className="text-sm font-medium">{t('about.subtitle.activity')}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Search size={18} className="text-accent-teal" />
                                    <span className="text-sm font-medium">{t('about.subtitle.search')}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-white/60">
                                    <Target size={18} className="text-accent-pink" />
                                    <span className="text-sm font-medium">{t('about.subtitle.target')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 space-y-6 text-white/60 text-lg leading-relaxed">
                            {(t('about.description', { returnObjects: true }) as string[]).map((para: string, i: number) => (
                                <p key={i}>{para}</p>
                            ))}
                            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {specializations.map((spec: any) => (
                                    <div key={spec.id} className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: spec.color }} />
                                        <span className="text-sm font-bold text-white/80">{t(spec.title)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <section className="py-20 border-t border-white/5">
                        <h2 className="text-2xl font-heading font-bold mb-12 uppercase tracking-widest text-sm text-center">{t('about.philosophy.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(philosophyMap).map(([key, config], i) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 text-center group"
                                >
                                    <config.icon className={cn("w-10 h-10 mx-auto mb-6 transition-transform group-hover:scale-110", config.color)} />
                                    <h3 className="text-xl font-heading font-bold mb-4">{t(`about.philosophy.${key}.title`)}</h3>
                                    <p className="text-sm text-white/40">{t(`about.philosophy.${key}.desc`)}</p>
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
