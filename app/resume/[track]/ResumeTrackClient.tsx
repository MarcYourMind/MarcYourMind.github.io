"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { resumeData, Experience, Education, SkillCategory } from "@/data/resume"
import { Button } from "@/components/Button"
import { Download, Calendar, ExternalLink, Briefcase, GraduationCap, Award, Cpu, FileText } from "lucide-react"
import { certificates } from "@/data/certificates"

export default function ResumeTrackClient() {
    const { track } = useParams()
    const trackId = track ? (track as string).charAt(0).toUpperCase() + (track as string).slice(1) : 'Backend'
    const data = resumeData[trackId] || resumeData['Backend'] // Fallback

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <header className="mb-16 flex flex-col md:row items-start md:items-end justify-between gap-8">
                        <div className="flex-grow">
                            <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 tracking-tighter">{data.title}</h1>
                            <p className="text-xl text-accent-blue font-bold uppercase tracking-widest text-sm mb-6">{trackId} Specialization</p>
                            <p className="text-lg text-white/60 max-w-3xl border-l-2 border-accent-blue/30 pl-6 py-2 italic">
                                "{data.summary}"
                            </p>
                        </div>
                        <Button variant="primary" size="lg" className="w-full md:w-auto">
                            <Download className="mr-2 w-4 h-4" /> Download CV
                        </Button>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Experience & Education */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                                        <Briefcase size={20} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-sm">Professional Experience</h2>
                                </div>

                                <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
                                    {data.experience.map((exp: Experience, i: number) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative pl-12"
                                        >
                                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-accent-blue border-4 border-[#0a0a0a] shadow-lg shadow-accent-blue/30" />
                                            <div className="flex flex-col md:row items-start md:items-center justify-between mb-4 gap-2">
                                                <div>
                                                    <h3 className="text-xl font-heading font-bold text-white mb-1">{exp.role}</h3>
                                                    <p className="text-accent-blue font-medium">{exp.company}</p>
                                                </div>
                                                <div className="flex items-center text-white/40 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                    <Calendar size={14} className="mr-2" />
                                                    {exp.period}
                                                </div>
                                            </div>
                                            <ul className="space-y-3">
                                                {exp.description.map((desc: string, j: number) => (
                                                    <li key={j} className="text-white/60 text-sm leading-relaxed flex items-start">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/40 mt-1.5 mr-3 flex-shrink-0" />
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple">
                                        <GraduationCap size={20} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-sm">Education</h2>
                                </div>
                                <div className="space-y-6">
                                    {data.education.map((edu: Education, i: number) => (
                                        <div key={i} className="glass-card p-8">
                                            <div className="flex flex-col md:row items-start md:items-center justify-between mb-4 gap-2">
                                                <div>
                                                    <h3 className="text-xl font-heading font-bold text-white mb-1">{edu.degree}</h3>
                                                    <p className="text-accent-purple font-medium">{edu.institution}</p>
                                                </div>
                                                <div className="flex items-center text-white/40 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                    <Calendar size={14} className="mr-2" />
                                                    {edu.period}
                                                </div>
                                            </div>
                                            <p className="text-white/60 text-sm">{edu.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Skills & Certs */}
                        <div className="space-y-12">
                            <section>
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="p-2 rounded-lg bg-accent-teal/10 text-accent-teal">
                                        <Cpu size={20} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-sm">Skill Matrix</h2>
                                </div>
                                <div className="space-y-6">
                                    {data.skills.map((cat: SkillCategory, i: number) => (
                                        <div key={i}>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{cat.title}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cat.skills.map((skill: string) => (
                                                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/80 hover:border-accent-teal/50 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold">
                                        <Award size={20} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-sm">Certifications</h2>
                                </div>
                                <ul className="space-y-4">
                                    {data.certifications.map((certStr: string) => {
                                        const certData = certificates.find(c => certStr.toLowerCase().includes(c.title.toLowerCase()) || c.title.toLowerCase().includes(certStr.toLowerCase()));
                                        return (
                                            <li key={certStr} className="flex items-center justify-between text-sm text-white/60 group">
                                                <div className="flex items-center">
                                                    <div className="w-1 h-1 rounded-full bg-accent-gold mr-3 group-hover:scale-150 transition-transform" />
                                                    {certStr}
                                                </div>
                                                {certData?.file && (
                                                    <a
                                                        href={certData.file}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white/20 hover:text-accent-gold transition-colors ml-2"
                                                        title="View Certificate"
                                                    >
                                                        <FileText size={14} />
                                                    </a>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>

                            <section>
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                                        <ExternalLink size={20} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-sm">Languages</h2>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {data.languages.map((lang: { name: string; level: string }, i: number) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-accent-blue/50 transition-colors">
                                            <span className="font-bold text-white tracking-tight">{lang.name}</span>
                                            <span className="text-xs font-black uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                                                {lang.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
