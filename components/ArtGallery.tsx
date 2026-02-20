"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArtItem } from "@/data/creative"
import { useI18n } from "./I18nProvider"
import { ExternalLink, Palette } from "lucide-react"

interface ArtGalleryProps {
    items: ArtItem[]
}

export function ArtGallery({ items }: ArtGalleryProps) {
    const { t } = useI18n()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass-card border-white/10 hover:border-accent-blue/30 transition-colors"
                >
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-[10px] uppercase tracking-wider text-accent-blue font-bold">
                                {item.category}
                            </span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white mb-1">
                            {item.title}
                        </h3>
                        <p className="text-white/60 text-sm line-clamp-2 mb-4">
                            {item.description}
                        </p>
                        <button className="flex items-center space-x-2 text-accent-blue text-sm font-medium hover:underline">
                            <span>{t("creative.viewArt")}</span>
                            <ExternalLink className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 opacity-100 group-hover:opacity-0 transition-opacity">
                        <Palette className="w-5 h-5 text-accent-blue" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
