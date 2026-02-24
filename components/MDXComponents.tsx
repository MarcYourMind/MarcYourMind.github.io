import React from 'react'
import { Info, Lightbulb, AlertTriangle, AlertCircle, Ban } from 'lucide-react'

const ALERT_TYPES = {
    NOTE: {
        icon: Info,
        label: 'Note',
        containerClass: 'bg-blue-500/10 border-blue-500/40 text-blue-100',
        iconClass: 'text-blue-400',
        headerClass: 'text-blue-400'
    },
    TIP: {
        icon: Lightbulb,
        label: 'Tip',
        containerClass: 'bg-emerald-500/10 border-emerald-500/40 text-emerald-100',
        iconClass: 'text-emerald-400',
        headerClass: 'text-emerald-400'
    },
    IMPORTANT: {
        icon: AlertCircle,
        label: 'Important',
        containerClass: 'bg-purple-500/10 border-purple-500/40 text-purple-100',
        iconClass: 'text-purple-400',
        headerClass: 'text-purple-400'
    },
    WARNING: {
        icon: AlertTriangle,
        label: 'Warning',
        containerClass: 'bg-amber-500/10 border-amber-500/40 text-amber-100',
        iconClass: 'text-amber-400',
        headerClass: 'text-amber-400'
    },
    CAUTION: {
        icon: Ban,
        label: 'Caution',
        containerClass: 'bg-red-500/10 border-red-500/40 text-red-100',
        iconClass: 'text-red-400',
        headerClass: 'text-red-400'
    },
}

export const MDXComponents = {
    blockquote: (props: any) => {
        const children = React.Children.toArray(props.children)

        // Find text content anywhere in the blockquote
        const findMatch = (children: any[]): { type: keyof typeof ALERT_TYPES; content: any; remaining: any[] } | null => {
            for (let i = 0; i < children.length; i++) {
                const child = children[i]

                // If it's a paragraph, check its children
                if (React.isValidElement(child) && child.props && (child.props as any).children) {
                    const subMatch = findMatch(React.Children.toArray((child.props as any).children))
                    if (subMatch) return subMatch
                }

                // If it's a string, check for the tag
                if (typeof child === 'string') {
                    const match = child.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)/i)
                    if (match) {
                        return {
                            type: match[1].toUpperCase() as keyof typeof ALERT_TYPES,
                            content: match[2],
                            remaining: children.slice(i + 1)
                        }
                    }
                }
            }
            return null
        }

        const matchInfo = findMatch(children)

        if (matchInfo) {
            const config = ALERT_TYPES[matchInfo.type]
            const Icon = config.icon

            return (
                <div className={`my-12 p-8 border-l-4 rounded-r-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden group transition-all hover:translate-x-2 not-prose ${config.containerClass}`}>
                    <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-[80px] opacity-30 ${config.iconClass}`} />
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                        <Icon size={80} />
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-2.5 rounded-2xl bg-white/5 border border-white/10 ${config.iconClass} shadow-xl backdrop-blur-md`}>
                            <Icon size={22} strokeWidth={2.5} />
                        </div>
                        <span className={`font-heading font-black uppercase tracking-[0.3em] text-xs ${config.headerClass}`}>
                            {config.label}
                        </span>
                    </div>

                    <div className="text-xl md:text-2xl leading-relaxed font-medium opacity-90 italic font-sans">
                        {matchInfo.content}
                        {matchInfo.remaining}
                    </div>
                </div>
            )
        }

        return (
            <blockquote className="border-l-4 border-accent-blue/40 pl-10 pr-8 py-8 my-16 italic text-white/60 bg-white/5 rounded-r-3xl font-sans text-2xl leading-relaxed relative overflow-hidden shadow-inner not-prose" {...props}>
                <div className="absolute top-4 left-4 text-accent-blue/20 pointer-events-none">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L10 3V15C10 18.3137 7.31371 21 4 21H3Z" /></svg>
                </div>
                {props.children}
            </blockquote>
        )
    },
    pre: (props: any) => {
        return (
            <div className="relative group my-12 shadow-2xl rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117] not-prose">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none" />
                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 backdrop-blur-sm">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                        Code Snippet
                    </div>
                </div>
                <pre {...props} className="p-8 overflow-x-auto text-[15px] md:text-[17px] font-mono leading-relaxed" />
            </div>
        )
    },
}
