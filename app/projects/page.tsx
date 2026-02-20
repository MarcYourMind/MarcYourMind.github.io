"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import { specializations } from "@/data/specializations"
import { Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTag, setActiveTag] = useState<string | null>(null)

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesTag = !activeTag || project.tags.includes(activeTag as any)
            return matchesSearch && matchesTag
        })
    }, [searchQuery, activeTag])

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-heading font-black mb-4">Engineering Gallery</h1>
                        <p className="text-white/60 max-w-2xl">
                            A deep dive into my professional work across multiple domains. Use the filters to explore specific specializations.
                        </p>
                    </header>

                    <div className="flex flex-col md:row items-center justify-between gap-6 mb-12">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search projects by name or tech..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent-blue/50 transition-colors"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto md:pb-0 scrollbar-hide">
                            <button
                                onClick={() => setActiveTag(null)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                                    !activeTag ? "bg-accent-blue text-white" : "bg-white/5 text-white/40 hover:bg-white/10"
                                )}
                            >
                                All
                            </button>
                            {specializations.map(spec => (
                                <button
                                    key={spec.id}
                                    onClick={() => setActiveTag(spec.id)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                                        activeTag === spec.id ? "bg-accent-blue text-white" : "bg-white/5 text-white/40 hover:bg-white/10"
                                    )}
                                >
                                    {spec.title.split(' ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project, i) => (
                                    <ProjectCard key={project.slug} project={project} index={i} />
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="py-20 text-center glass-card border-dashed">
                            <X className="w-12 h-12 text-white/20 mx-auto mb-4" />
                            <h3 className="text-xl font-heading font-bold mb-2">No projects found</h3>
                            <p className="text-white/40">Try adjusting your filters or search query.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveTag(null) }}
                                className="mt-6 text-accent-blue font-bold uppercase text-xs tracking-widest"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
