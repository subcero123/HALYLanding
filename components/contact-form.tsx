"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "../contexts/LanguageContext";
import { useService } from "../contexts/ServiceContext";
import React from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedBudget, setBudget] = useState(""); // Para la selección del presupuesto
  const { toast } = useToast();
  const { t } = useLanguage();
  const { selectedService, setSelectedService } = useService();
  const [serviceInterest, setServiceInterest] = useState(selectedService);

  // Sincroniza el estado local con el contexto (opcional, si lo necesitas reactivo)
  React.useEffect(() => {
    setServiceInterest(selectedService);
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un servidor
    console.log("Formulario enviado:", { name, email, message });
    toast({
      title: t("contact.success"),
      description: t("contact.successDesc"),
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div>
        <h2 className="text-lg font-bold text-gray-100">
          {t("contact.form.contactInformation")}
        </h2>
        <div className="flex gap-4 mt-2">
          <Input
            placeholder={t("contact.form.name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
          />
          <Input
            type="email"
            placeholder={t("contact.form.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <h2 className="text-lg font-bold text-gray-100">
          {t("contact.form.interestedIn")}
        </h2>
        <div className="flex flex-wrap gap-4 mt-2">
          {["webCreation", "mvpDevelopment", "customWebDevelopment"].map(
            (service) => (
              <Button
                key={service}
                type="button"
                onClick={() =>
                  setServiceInterest((prev: string) =>
                    prev === service ? "" : service
                  )
                }
                className={`px-4 py-2 rounded ${
                  serviceInterest === service
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 border-gray-600 text-gray-100 hover:bg-blue-500"
                }`}
              >
                {t(`contact.form.${service}`)}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h2 className="text-lg font-bold text-gray-100">
          {t("contact.form.budget")}
        </h2>
        <div className="flex flex-wrap gap-4 mt-2">
          {["under10k", "TenTo50k", "fiftyTo120k", "above120k"].map(
            (budget) => (
              <Button
                key={budget}
                type="button"
                onClick={() =>
                  setBudget((prev) => (prev === budget ? "" : budget))
                }
                className={`px-4 py-2 rounded ${
                  budget === selectedBudget
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 border-gray-600 text-gray-100 hover:bg-blue-500"
                }`}
              >
                {t(`contact.form.${budget}`)}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {t("contact.form.submit")}
      </Button>
    </form>
  );
}
