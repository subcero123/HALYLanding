"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "@/components/ui/button"

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      variant="outline"
      size="sm"
      className="bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}

