"use client"

import { motion } from "framer-motion"
import { Code2, Star, Cpu, Zap, Code, Shield, Database, Box, Globe, LucideIcon } from "lucide-react"
import { languages, LanguageRating } from "@/data/languages"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
    Cpu,
    Zap,
    Code,
    Shield,
    Database,
    Box,
    Globe
}

export function LanguagesSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/[0.02]">
            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                            <Code2 size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tighter uppercase">
                            Technical <span className="text-gradient">Proficiency</span>
                        </h2>
                    </div>
                    <p className="text-xl text-white/40 max-w-2xl">
                        A detailed breakdown of my core programming stack, rated by professional experience and technical confidence.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {languages.map((lang, i) => (
                        <LanguageCard key={lang.name} lang={lang} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function LanguageCard({ lang, index }: { lang: LanguageRating; index: number }) {
    const Icon = lang.icon ? iconMap[lang.icon] : Code2

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative"
        >
            <div className="glass-card p-10 h-full flex flex-col hover:border-accent-blue/30 transition-all duration-500 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                    <Icon size={120} />
                </div>

                <div className="mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-all duration-500">
                        <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent-blue transition-colors">
                        {lang.name}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                        {lang.description}
                    </p>
                </div>

                <div className="mt-auto space-y-6 relative z-10">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                            <span>Experience</span>
                            <span className="text-accent-blue">{lang.experience}/5</span>
                        </div>
                        <StarRating rating={lang.experience} color="text-accent-blue" delay={index * 0.1} />
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                            <span>Confidence</span>
                            <span className="text-accent-purple">{lang.confidence}/5</span>
                        </div>
                        <StarRating rating={lang.confidence} color="text-accent-purple" delay={index * 0.1 + 0.2} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function StarRating({ rating, color, delay }: { rating: number; color: string; delay: number }) {
    return (
        <div className="flex space-x-1.5">
            {[1, 2, 3, 4, 5].map((star, i) => (
                <motion.div
                    key={star}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: delay + (i * 0.05)
                    }}
                    viewport={{ once: true }}
                >
                    <Star
                        size={14}
                        className={cn(
                            "transition-all duration-500",
                            star <= rating
                                ? cn(color, "fill-current")
                                : "text-white/5 fill-transparent"
                        )}
                    />
                </motion.div>
            ))}
        </div>
    )
}
