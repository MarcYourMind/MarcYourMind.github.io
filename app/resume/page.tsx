"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { specializations } from "@/data/specializations"
import { FileText, ArrowRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { CertificatesSection } from "@/components/CertificatesSection"

export default function ResumeHub() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter">Resume Hub</h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Select a specialized track to view a tailored resume and portfolio of relevant experience.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {specializations.map((spec, i) => (
                            <motion.div
                                key={spec.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group lg:even:translate-y-6"
                            >
                                <Link href={`/resume/${spec.id.toLowerCase()}`} className="block h-full">
                                    <div className="glass-card p-10 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:border-accent-blue/50">
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                                            style={{ background: `radial-gradient(circle at center, ${spec.color}, transparent 70%)` }}
                                        />

                                        <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                                            <FileText className="w-10 h-10 transition-colors group-hover:text-accent-blue" style={{ color: spec.color }} />
                                        </div>

                                        <h3 className="text-2xl font-heading font-bold mb-4">{spec.title}</h3>
                                        <p className="text-white/40 mb-8 flex-grow">
                                            Tailored overview for roles in {spec.title.toLowerCase()}, including relevant tech stack and key achievements.
                                        </p>

                                        <div className="flex items-center text-accent-blue font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                                            Explore Track <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>

                                {/* PDF Placeholder */}
                                <a
                                    href={`/resumes/marcyourmind_${spec.id.toLowerCase()}.pdf`}
                                    download
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors z-20"
                                    title="Download PDF"
                                >
                                    <Download size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CertificatesSection />

            <Footer />
        </main>
    )
}
