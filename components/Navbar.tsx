"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "./I18nProvider"
import { Globe, Menu, X, ChevronDown, Command } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { href: "/", key: "nav.home" },
    { href: "/projects", key: "nav.projects" },
    { href: "/resume", key: "nav.resume" },
    { href: "/open-source", key: "nav.opensource" },
    { href: "/articles", key: "nav.articles" },
    { href: "/about", key: "nav.about" },
    { href: "/creative", key: "nav.creative" },
]

export function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { locale, setLocale, t } = useI18n()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [langOpen, setLangOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-background/80 backdrop-blur-lg border-white/10 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="group flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent-blue/20 group-hover:scale-110 transition-transform">
                        M
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tighter">
                        MarcYour<span className="text-accent-blue">Mind</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-accent-blue",
                                pathname === item.href ? "text-white" : "text-white/60"
                            )}
                        >
                            {t(item.key)}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    {/* Command Palette Hint */}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('toggle-command-palette'))}
                        className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all group"
                    >
                        <Command className="w-3 h-3 group-hover:text-accent-blue transition-colors" />
                        <span>{t('nav.commandPaletteHint')}</span>
                    </button>

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center space-x-1 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                            <Globe className="w-4 h-4 text-accent-blue" />
                            <span className="uppercase">{locale}</span>
                            <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-2 w-32 p-1 glass-card overflow-hidden shadow-2xl"
                                >
                                    {["en", "es", "fr"].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => {
                                                setLocale(l as any)
                                                setLangOpen(false)
                                                router.refresh()
                                            }}
                                            className={cn(
                                                "w-full px-3 py-2 text-left text-sm rounded-lg transition-colors",
                                                locale === l ? "bg-accent-blue text-white" : "hover:bg-white/5 text-white/60"
                                            )}
                                        >
                                            {l === "en" ? "English" : l === "es" ? "Español" : "Français"}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        className="md:hidden p-2 text-white/60 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-white/5",
                                        pathname === item.href ? "text-accent-blue" : "text-white/60"
                                    )}
                                >
                                    {t(item.key)}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
