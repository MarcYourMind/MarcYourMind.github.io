"use client"

import React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ArtGallery } from "@/components/ArtGallery"
import { creativeData } from "@/data/creative"
import { useI18n } from "@/components/I18nProvider"
import { Music, Palette, Sparkles, Play } from "lucide-react"
import Image from "next/image"
import { useMusicStore } from "@/lib/music-store"

export default function CreativePage() {
    const { t, locale } = useI18n()
    const { playSong } = useMusicStore()
    const philosophy = creativeData.philosophy[locale as keyof typeof creativeData.philosophy] || creativeData.philosophy.en

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            <Sparkles className="w-3 h-3" />
                            <span>{t("creative.title")}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tighter"
                        >
                            Creativity is the <span className="text-gradient">Soul&apos;s Voice</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-8 md:p-12 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-20 h-20 text-accent-blue" />
                            </div>
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed italic font-light">
                                &quot;{philosophy}&quot;
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Art Gallery Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t("creative.artTitle")}</h2>
                            <p className="text-white/60 max-w-xl mb-4">
                                A collection of visual experiments, digital paintings, and sketches that explore form, color, and emotion.
                            </p>
                            <p className="text-accent-blue/80 text-sm font-medium italic">
                                Note: All visual art featured here is meticulously hand-drawn using traditional pencils and black pens, then digitized for display.
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 text-accent-blue font-bold">
                            <Palette className="w-6 h-6" />
                            <span className="text-sm uppercase tracking-wider">{creativeData.arts.length} Works</span>
                        </div>
                    </div>

                    <ArtGallery items={creativeData.arts} />
                </div>
            </section>

            {/* Music Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t("creative.musicTitle")}</h2>
                            <p className="text-white/60 max-w-xl">
                                Sonic journeys composed to facilitate focus, meditation, and emotional resonance.
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 text-accent-purple font-bold">
                            <Music className="w-6 h-6" />
                            <span className="text-sm uppercase tracking-wider">{creativeData.songs.length} Tracks</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {creativeData.songs.map((song, index) => (
                            <motion.button
                                key={song.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => playSong(index)}
                                className="glass-card hover:bg-white/10 border-white/10 p-4 flex items-center space-x-4 group transition-all text-left w-full"
                            >
                                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg shadow-black/40 flex-shrink-0">
                                    <Image
                                        src={song.coverUrl}
                                        alt={song.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Play className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-heading font-bold text-lg text-white truncate group-hover:text-accent-blue transition-colors">
                                        {song.title}
                                    </h4>
                                    <p className="text-white/40 text-sm">{song.artist}</p>
                                </div>
                                <div className="text-white/30 font-mono text-xs tabular-nums">
                                    {song.duration}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
