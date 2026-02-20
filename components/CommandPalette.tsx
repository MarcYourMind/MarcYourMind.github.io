"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Terminal, Search, Command, X, ArrowRight,
    Home, User, Code, Briefcase, FileText,
    Music, Languages, Github, Linkedin, Mail,
    Play, Pause, Layout, Palette, FileSearch,
    Copy, RefreshCw, Link as LinkIcon
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useMusicStore } from "@/lib/music-store"
import { useI18n } from "@/components/I18nProvider"
import { socialLinks } from "@/data/socials"
import { toastStore } from "@/lib/toast-store"

export function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const router = useRouter()
    const { isPlaying, togglePlay, setIsVisible, isVisible } = useMusicStore()
    const { setLocale, locale } = useI18n()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsOpen(prev => !prev)
            }
            if (e.key === "Escape") setIsOpen(false)
        }
        const handleToggle = () => setIsOpen(prev => !prev)

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("toggle-command-palette", handleToggle)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("toggle-command-palette", handleToggle)
        }
    }, [])

    const copyToClipboard = (text: string, message: string) => {
        navigator.clipboard.writeText(text)
        toastStore.addToast(message, "success")
    }

    const commands = useMemo(() => [
        // Navigation
        { name: "Go Home", icon: Home, action: () => router.push("/") },
        { name: "About Me", icon: User, action: () => router.push("/about") },
        { name: "View Projects", icon: Briefcase, action: () => router.push("/projects") },
        { name: "Read Articles & Insights", icon: FileText, action: () => router.push("/articles") },
        { name: "Open Source Contributions", icon: Code, action: () => router.push("/open-source") },
        { name: "Contact Me", icon: Mail, action: () => router.push("/contact") },

        // Resume Sections
        { name: "Open Resume Hub", icon: Layout, action: () => router.push("/resume") },
        { name: "Resume: Backend Architecture", icon: Terminal, action: () => router.push("/resume/backend") },
        { name: "Resume: Quant & Trading Systems", icon: FileSearch, action: () => router.push("/resume/quant") },
        { name: "Resume: AI & Machine Learning", icon: Command, action: () => router.push("/resume/ai") },
        { name: "Resume: Web3 & Blockchain", icon: Code, action: () => router.push("/resume/web3") },

        // Creative
        { name: "Creative Portfolio (Music & Art)", icon: Palette, action: () => router.push("/creative") },

        // Music Controls
        {
            name: isPlaying ? "Pause Music" : "Play Music",
            icon: isPlaying ? Pause : Play,
            action: () => togglePlay()
        },
        {
            name: isVisible ? "Hide Music Player" : "Show Music Player",
            icon: Music,
            action: () => setIsVisible(!isVisible)
        },

        // Language
        { name: "Switch to English", icon: Languages, action: () => setLocale("en"), hidden: locale === "en" },
        { name: "Switch to Spanish", icon: Languages, action: () => setLocale("es"), hidden: locale === "es" },
        { name: "Switch to French", icon: Languages, action: () => setLocale("fr"), hidden: locale === "fr" },

        // Socials
        { name: "View GitHub Profile", icon: Github, action: () => window.open(socialLinks.github, "_blank") },
        { name: "View LinkedIn Profile", icon: Linkedin, action: () => window.open(socialLinks.linkedin, "_blank") },

        // Utilities
        { name: "Copy Email Address", icon: Mail, action: () => copyToClipboard(socialLinks.email, "Email copied to clipboard!") },
        { name: "Copy Portfolio URL", icon: LinkIcon, action: () => copyToClipboard(window.location.origin, "Portfolio URL copied!") },
        { name: "Refresh Page", icon: RefreshCw, action: () => window.location.reload() },
    ], [isPlaying, isVisible, locale, router, togglePlay, setIsVisible, setLocale])

    const filteredCommands = commands
        .filter(c => !c.hidden)
        .filter(c => c.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl glass-panel shadow-2xl overflow-hidden border border-white/10"
                    >
                        <div className="p-4 border-b border-white/10 flex items-center">
                            <Search className="w-5 h-5 text-accent-blue mr-4" />
                            <input
                                autoFocus
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-grow bg-transparent text-white font-medium focus:outline-none placeholder:text-white/20"
                            />
                            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-white/40">
                                ESC
                            </kbd>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((cmd) => (
                                    <button
                                        key={cmd.name}
                                        onClick={() => {
                                            cmd.action()
                                            setIsOpen(false)
                                            setQuery("")
                                        }}
                                        className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors">
                                                <cmd.icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">{cmd.name}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/20 transition-all opacity-0 group-hover:opacity-100" />
                                    </button>
                                ))
                            ) : (
                                <div className="p-8 text-center text-white/40 text-sm">
                                    No commands found for "{query}"
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
                            <span>Marc Goulding Tójar — Command Center</span>
                            <span>CMD / CTRL + K to close</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
