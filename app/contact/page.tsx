"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Button } from "@/components/Button"
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react"
import { useI18n } from "@/components/I18nProvider"

export default function ContactPage() {
    const { t } = useI18n()
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setTimeout(() => setStatus('success'), 1500)
        // In a real app, this would send an email/API request
    }

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        <div>
                            <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 tracking-tighter">
                                {t("contact.title")?.split("The Future").length > 1
                                    ? <>{t("contact.title")?.split("The Future")[0]}<span className="text-gradient">The Future</span></>
                                    : t("contact.title")?.split("El Futuro").length > 1
                                        ? <>{t("contact.title")?.split("El Futuro")[0]}<span className="text-gradient">El Futuro</span></>
                                        : t("contact.title")?.split("L'Avenir").length > 1
                                            ? <>{t("contact.title")?.split("L'Avenir")[0]}<span className="text-gradient">L'Avenir</span></>
                                            : t("contact.title")
                                }
                            </h1>
                            <p className="text-xl text-white/60 mb-12 max-w-md">
                                {t("contact.subtitle")}
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{t("contact.emailTitle")}</h4>
                                        <p className="text-lg font-medium text-white/80">mgtojar@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-accent-green/10 flex items-center justify-center text-accent-green group-hover:bg-accent-green group-hover:text-white transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{t("contact.callTitle")}</h4>
                                        <p className="text-lg font-medium text-white/80">0789 272 2727</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{t("contact.socialsTitle")}</h4>
                                        <p className="text-lg font-medium text-white/80">@marcyourmind</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative glass-panel p-8 md:p-12 flex flex-col items-center justify-center text-center">
                                <MessageSquare className="w-16 h-16 text-accent-blue mb-8 animate-bounce" />
                                <h2 className="text-3xl font-heading font-bold mb-6">{t("contact.whatsappTitle")}</h2>
                                <p className="text-white/60 mb-10 text-lg">
                                    {t("contact.whatsappDesc")}
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=636388672&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <Button variant="primary" size="lg" className="w-full py-8 text-xl">
                                        {t("contact.whatsappButton")}
                                        <Send className="ml-2 w-6 h-6" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
