"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode } from "react"
import { translations } from "../utils/translations"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]
    for (const k of keys) {
      value = value[k]
      if (value === undefined) return key
    }
    return value as string
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

