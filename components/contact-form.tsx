"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "../contexts/LanguageContext"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario a un servidor
    console.log("Formulario enviado:", { name, email, message })
    toast({
      title: t("contact.success"),
      description: t("contact.successDesc"),
    })
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder={t("contact.form.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder={t("contact.form.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <Textarea
          placeholder={t("contact.form.message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        {t("contact.form.submit")}
      </Button>
    </form>
  )
}

