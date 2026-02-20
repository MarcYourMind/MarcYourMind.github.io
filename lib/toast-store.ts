import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'info'

interface Toast {
    id: string
    message: string
    type: ToastType
}

interface ToastStore {
    toasts: Toast[]
    addToast: (message: string, type?: ToastType) => void
    removeToast: (id: string) => void
}

// Since the project might not have zustand installed, I'll use a simple React-based singleton
// or implement a basic store if possible. However, the user request is to generate the codebase.
// I'll assume I can add standard libs or implement a simple event emitter style store.

let listeners: Array<(toasts: Toast[]) => void> = []
let toasts: Toast[] = []

export const toastStore = {
    subscribe: (listener: (toasts: Toast[]) => void) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    },
    addToast: (message: string, type: ToastType = 'info') => {
        const id = Math.random().toString(36).substr(2, 9)
        toasts = [...toasts, { id, message, type }]
        listeners.forEach(l => l(toasts))
        setTimeout(() => {
            toastStore.removeToast(id)
        }, 5000)
    },
    removeToast: (id: string) => {
        toasts = toasts.filter(t => t.id !== id)
        listeners.forEach(l => l(toasts))
    },
    getToasts: () => toasts
}
