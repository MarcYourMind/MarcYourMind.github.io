"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toastStore, ToastType } from "@/lib/toast-store"
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react"

export function ToastContainer() {
    const [toasts, setToasts] = useState(toastStore.getToasts())

    useEffect(() => {
        return toastStore.subscribe(setToasts)
    }, [])

    return (
        <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-4">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} />
                ))}
            </AnimatePresence>
        </div>
    )
}

function ToastItem({ toast }: { toast: any }) {
    const icons = {
        success: <CheckCircle2 className="text-green-500" size={20} />,
        error: <AlertCircle className="text-red-500" size={20} />,
        info: <Info className="text-accent-blue" size={20} />,
    }

    const bgColors = {
        success: "bg-green-500/10 border-green-500/20",
        error: "bg-red-500/10 border-red-500/20",
        info: "bg-accent-blue/10 border-accent-blue/20",
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl glass-card border min-w-[300px] shadow-2xl ${bgColors[toast.type as ToastType]}`}
        >
            {icons[toast.type as ToastType]}
            <p className="flex-grow text-sm font-medium text-white/90">{toast.message}</p>
            <button
                onClick={() => toastStore.removeToast(toast.id)}
                className="text-white/20 hover:text-white transition-colors"
            >
                <X size={16} />
            </button>
        </motion.div>
    )
}
