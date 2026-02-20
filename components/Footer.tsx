"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { socialLinks } from "@/data/socials"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-heading font-bold text-2xl tracking-tighter mb-4 block">
                            MarcYour<span className="text-accent-blue">Mind</span>
                        </Link>
                        <p className="text-white/60 max-w-lg mb-6 leading-relaxed">
                            Software Engineer building high-performance systems, transforming complex ideas into elegant user-focused solutions.
                            Driven by a deep belief and commitment to using technology as a force for good.
                            Motivated by creating technology that solves meaningful problems and improves lives.
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
                        <h4 className="font-heading font-bold uppercase text-xs tracking-widest text-white/40 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/projects" className="text-white/60 hover:text-accent-blue transition-colors">Projects</Link></li>
                            <li><Link href="/resume" className="text-white/60 hover:text-accent-blue transition-colors">Resume Hub</Link></li>
                            <li><Link href="/articles" className="text-white/60 hover:text-accent-blue transition-colors">Insights & Articles</Link></li>
                            <li><Link href="/open-source" className="text-white/60 hover:text-accent-blue transition-colors">Open Source</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold uppercase text-xs tracking-widest text-white/40 mb-6">Engineering</h4>
                        <ul className="space-y-4">
                            <li><Link href="/resume/backend" className="text-white/60 hover:text-accent-blue transition-colors">Backend Architecture</Link></li>
                            <li><Link href="/resume/quant" className="text-white/60 hover:text-accent-blue transition-colors">Quant/Trading</Link></li>
                            <li><Link href="/resume/web3" className="text-white/60 hover:text-accent-blue transition-colors">Web3 / Blockchain</Link></li>
                            <li><Link href="/resume/ai" className="text-white/60 hover:text-accent-blue transition-colors">ML Pipelines</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} MarcYourMind. Built with Next.js, Framer Motion and Passion.
                    </p>
                    <div className="flex space-x-6 text-sm text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
