"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, X, ChevronUp, ChevronDown } from "lucide-react"
import { Song } from "@/data/creative"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useMusicStore } from "@/lib/music-store"

interface MusicPlayerProps {
    songs: Song[]
}

export function MusicPlayer({ songs }: MusicPlayerProps) {
    const {
        isPlaying,
        setIsPlaying,
        currentSongIndex,
        setCurrentSongIndex,
        isVisible,
        setIsVisible,
        isMinimized,
        setIsMinimized,
        togglePlay: togglePlayStore
    } = useMusicStore()

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [progress, setProgress] = useState(0)

    const currentSong = songs[currentSongIndex]

    useEffect(() => {
        // Show player after a short delay if it's not already visible
        const timer = setTimeout(() => {
            if (!isVisible) setIsVisible(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => {
                    setIsPlaying(false)
                    console.log("Autoplay blocked")
                })
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying, currentSongIndex, setIsPlaying])

    const togglePlay = () => {
        togglePlayStore()
    }

    const nextSong = () => {
        setCurrentSongIndex((currentSongIndex + 1) % songs.length)
        setIsPlaying(true)
    }

    const prevSong = () => {
        setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length)
        setIsPlaying(true)
    }

    const handleTimeUpdate = () => {
        if (audioRef.current && audioRef.current.duration) {
            const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100
            setProgress(currentProgress)
        }
    }

    if (!isVisible) return null

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={cn(
                "fixed bottom-6 right-6 z-[100] transition-all duration-500",
                isMinimized ? "w-14 h-14" : "w-80"
            )}
        >
            <audio
                ref={audioRef}
                src={currentSong.audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={nextSong}
            />

            <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

                <div className={cn(
                    "relative glass-card border-white/10 overflow-hidden transition-all duration-500",
                    isMinimized ? "rounded-full" : "rounded-3xl p-4"
                )}>
                    {isMinimized ? (
                        <button
                            onClick={() => setIsMinimized(false)}
                            className="w-14 h-14 flex items-center justify-center text-accent-blue hover:text-white transition-colors"
                        >
                            {isPlaying ? (
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <Music className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <Music className="w-6 h-6" />
                            )}
                        </button>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10">
                                        <Image
                                            src={currentSong.coverUrl}
                                            alt={currentSong.title}
                                            fill
                                            className="object-cover"
                                        />
                                        {isPlaying && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <div className="flex items-end space-x-0.5 h-4">
                                                    {[...Array(4)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ height: ["20%", "100%", "20%"] }}
                                                            transition={{
                                                                repeat: Infinity,
                                                                duration: 0.5 + i * 0.1,
                                                                ease: "easeInOut"
                                                            }}
                                                            className="w-1 bg-accent-blue rounded-full"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-heading font-bold text-sm text-white truncate">
                                            {currentSong.title}
                                        </h4>
                                        <p className="text-white/40 text-xs truncate">
                                            {currentSong.artist}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <button
                                        onClick={() => setIsMinimized(true)}
                                        className="p-1 hover:bg-white/5 rounded-md text-white/40 hover:text-white transition-colors"
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="p-1 hover:bg-white/5 rounded-md text-white/40 hover:text-white transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-accent-blue"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ type: "tween", ease: "linear" }}
                                />
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={prevSong}
                                        className="text-white/60 hover:text-white transition-colors"
                                    >
                                        <SkipBack className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={togglePlay}
                                        className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-lg shadow-accent-blue/20"
                                    >
                                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                    </button>
                                    <button
                                        onClick={nextSong}
                                        className="text-white/60 hover:text-white transition-colors"
                                    >
                                        <SkipForward className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="flex items-center space-x-2 text-white/40">
                                    <Volume2 className="w-4 h-4" />
                                    <span className="text-[10px] font-medium uppercase tracking-wider">
                                        {currentSong.duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
