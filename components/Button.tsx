"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

export function Button({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20 hover:bg-accent-blue/90',
        secondary: 'bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20',
        outline: 'bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white',
        ghost: 'bg-transparent text-white/60 hover:text-white hover:bg-white/5',
    }

    const sizes = {
        sm: 'px-4 py-1.5 text-xs',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base',
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "inline-flex items-center justify-center rounded-full font-bold uppercase tracking-widest transition-all duration-300",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    )
}
