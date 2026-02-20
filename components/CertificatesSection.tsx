"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, FileText, Image as ImageIcon } from "lucide-react"
import { certificates, Certificate } from "@/data/certificates"
import { Button } from "./Button"

export function CertificatesSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <header className="mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-accent-gold/10 text-accent-gold">
                            <Award size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tighter uppercase">
                            Certifications & Degrees
                        </h2>
                    </div>
                    <p className="text-xl text-white/40 max-w-2xl">
                        A collection of professional certifications, academic degrees, and micro-credentials that validate my expertise across various domains.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, i) => (
                        <CertificateCard key={cert.id} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CertificateCard({ cert, index }: { cert: Certificate; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative"
        >
            <div className="glass-card p-8 h-full flex flex-col hover:border-accent-gold/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-accent-gold/10 group-hover:text-accent-gold transition-colors duration-500">
                        {cert.file ? <FileText size={24} /> : <ImageIcon size={24} />}
                    </div>
                    {cert.file && (
                        <a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/20 hover:text-white transition-colors"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>

                <div className="flex-grow">
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent-gold transition-colors">
                        {cert.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent-gold/60 mb-4">
                        {cert.issuer}
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed mb-6">
                        {cert.description}
                    </p>
                </div>

                <div className="mt-auto">
                    {cert.file ? (
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-white/10 hover:border-accent-gold hover:text-accent-gold"
                            onClick={() => window.open(cert.file, '_blank')}
                        >
                            View Document
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-white/10 opacity-50 cursor-not-allowed"
                            disabled
                        >
                            {cert.id.includes("-lost") ? "Lost in Battle" : "Preview Coming Soon"}
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
