"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'

type Locale = 'en' | 'es' | 'fr'
type Translations = typeof en

interface I18nContextProps {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: (key: string) => string
}

const translations: Record<Locale, any> = { en, es, fr }

const I18nContext = createContext<I18nContextProps | undefined>(undefined)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocaleState] = useState<Locale>('en')

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') as Locale
        if (savedLocale && ['en', 'es', 'fr'].includes(savedLocale)) {
            setLocaleState(savedLocale)
        }
    }, [])

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale)
        localStorage.setItem('locale', newLocale)
    }

    const t = (key: string) => {
        const keys = key.split('.')
        let value = translations[locale]
        for (const k of keys) {
            value = value?.[k]
        }
        return value || key
    }

    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </I18nContext.Provider>
    )
}

export const useI18n = () => {
    const context = useContext(I18nContext)
    if (!context) throw new Error('useI18n must be used within I18nProvider')
    return context
}
