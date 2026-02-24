"use client"

import React from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { socialLinks } from "@/data/socials"
import { useI18n } from "./I18nProvider"

export function Footer() {
    const { t } = useI18n()

    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-heading font-bold text-2xl tracking-tighter mb-4 block">
                            MarcYour<span className="text-accent-blue">Mind</span>
                        </Link>
                        <p className="text-white/60 max-w-lg mb-6 leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href={`mailto:${socialLinks.email}`} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase text-xs tracking-widest text-white/40 mb-6">{t('footer.explore')}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/projects" className="text-white/60 hover:text-accent-blue transition-colors">{t('nav.projects')}</Link></li>
                            <li><Link href="/resume" className="text-white/60 hover:text-accent-blue transition-colors">{t('nav.resume')}</Link></li>
                            <li><Link href="/articles" className="text-white/60 hover:text-accent-blue transition-colors">{t('nav.articles')}</Link></li>
                            <li><Link href="/open-source" className="text-white/60 hover:text-accent-blue transition-colors">{t('nav.opensource')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase text-xs tracking-widest text-white/40 mb-6">{t('footer.engineering')}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/resume/backend" className="text-white/60 hover:text-accent-blue transition-colors">{t('specializations.backend.title')}</Link></li>
                            <li><Link href="/resume/quant" className="text-white/60 hover:text-accent-blue transition-colors">{t('specializations.quant.title')}</Link></li>
                            <li><Link href="/resume/web3" className="text-white/60 hover:text-accent-blue transition-colors">{t('specializations.web3.title')}</Link></li>
                            <li><Link href="/resume/ai" className="text-white/60 hover:text-accent-blue transition-colors">{t('specializations.ai.title')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} MarcYourMind. {t('footer.builtWith')}
                    </p>

                </div>
            </div>
        </footer>
    )
}
