"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

export function ProjectCard({ project, index }: { project: Project, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group glass-card overflow-hidden h-full flex flex-col"
        >
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/600x400/0a0a0a/0070f3?text=${project.title}`
                    }}
                />
                <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                        <span key={tech} className="text-[10px] font-medium text-white/40 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex space-x-4">
                        {project.githubUrl !== "#" && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {project.liveUrl !== "#" && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                        <button className="text-xs font-bold uppercase tracking-widest text-accent-blue hover:text-white transition-colors">
                            View Case Study
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
