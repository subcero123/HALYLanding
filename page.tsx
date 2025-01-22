"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  ChevronRight,
  Code,
  Globe,
  Layers,
  Mail,
  MapPin,
  Phone,
  CodepenIcon as React,
  Database,
  Server,
  Tag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/contact-form";
import { AnimateIn, FadeIn } from "./components/animations";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

function getTechIcon(tech: string) {
  switch (tech.toLowerCase()) {
    case "react":
    case "react native":
      return <React className="w-4 h-4 text-blue-400" />;
    case "next.js":
      return <Globe className="w-4 h-4 text-white" />;
    case "vue.js":
      return <Code className="w-4 h-4 text-green-400" />;
    case "node.js":
      return <Server className="w-4 h-4 text-green-600" />;
    case "postgresql":
    case "firebase":
      return <Database className="w-4 h-4 text-blue-500" />;
    default:
      return <Code className="w-4 h-4 text-gray-400" />;
  }
}

function LandingPageContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold">TechDesign</div>
        <nav className="flex items-center space-x-4 sm:justify-end flex-wrap">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#servicios"
                className="hover:text-blue-400 transition-colors"
              >
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="hover:text-blue-400 transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </header>

      <main>
        {/* Hero Section con proyectos de muestra */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 mb-12"
              asChild
            >
              <Link href="#contacto">
                {t("hero.cta")} <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900 pointer-events-none"></div>
            <div className="relative flex justify-center items-center">
              {" "}
              {/* Reducido el gap para acercarlos más */}
              {[1, 2, 3].map((project, index) => {
                const isCenter = index === 1;
                const isLeft = index === 0;
                const isRight = index === 2;

                return (
                  <FadeIn key={project} delay={0.2 * (index + 1)}>
                    <div
                      className={`relative group overflow-hidden transition-transform duration-500 ${
                        isCenter
                          ? "z-20 scale-125"
                          : isLeft
                          ? "z-10 scale-100 translate-x-[-35px]" // Acercado más a la izquierda
                          : "z-10 scale-100 translate-x-[35px]" // Acercado más a la derecha
                      }`}
                    >
                      <Image
                        src={`/placeholder.svg?height=350&width=400&text=Project ${project}`} // Aumentando la altura de la imagen
                        alt={`Project ${project}`}
                        width={400}
                        height={550} // Aumentando la altura de la imagen
                        className="object-cover w-full h-80 transition-transform duration-300" // Aumento de altura aquí también
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-1">
                            Project {project}
                          </h3>
                          <p className="text-sm">Brief project description.</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Descripción breve */}

        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">{t("about.title")}</h2>
            <p className="text-lg max-w-3xl mx-auto">
              {t("about.description")}
            </p>
          </div>
        </section>

        {/* Servicios (Pricing) */}
        <section id="servicios" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            {t("services.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10 mb-4 text-blue-400" />,
                title: t("services.web.title"),
                description: t("services.web.description"),
                features: t("services.web.features"),
              },
              {
                icon: <Layers className="w-10 h-10 mb-4 text-purple-400" />,
                title: t("services.mvp.title"),
                description: t("services.mvp.description"),
                features: t("services.mvp.features"),
              },
              {
                icon: <Code className="w-10 h-10 mb-4 text-green-400" />,
                title: t("services.custom.title"),
                description: t("services.custom.description"),
                features: t("services.custom.features"),
              },
            ].map((service, index) => (
              <Card className="bg-gray-800 border-gray-700 text-gray-100">
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {service.features.map((feature: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, i: Key | null | undefined) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t("services.cta")}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Examples Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            {t("services.examples.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("services.examples.web.title"),
                description: t("services.examples.web.description"),
                image:
                  "/placeholder.svg?height=300&width=400&text=E-commerce+Website",
                technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
                category: t("services.web.title"),
              },
              {
                title: t("services.examples.mvp.title"),
                description: t("services.examples.mvp.description"),
                image:
                  "/placeholder.svg?height=300&width=400&text=Fitness+Tracking+App",
                technologies: ["React Native", "Firebase", "Redux"],
                category: t("services.mvp.title"),
              },
              {
                title: t("services.examples.custom.title"),
                description: t("services.examples.custom.description"),
                image: "/placeholder.svg?height=300&width=400&text=ERP+System",
                technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
                category: t("services.custom.title"),
              },
            ].map((example, index) => (
              <Card className="bg-gray-800 border-gray-700 text-gray-100 overflow-hidden flex flex-col h-full">
                <Image
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-300 mb-4">{example.description}</p>
                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                      <h4 className="text-sm font-semibold text-blue-400">
                        {t("services.examples.category")}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm ml-7">
                      {example.category}
                    </p>
                    <div className="flex items-center">
                      <Code className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <h4 className="text-sm font-semibold text-green-400">
                        {t("services.examples.technologies")}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {example.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-gray-700 rounded-full px-2 py-1"
                        >
                          {getTechIcon(tech)}
                          <span className="ml-1 text-xs">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nueva sección de contacto */}

        <section id="contacto" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              {t("contact.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  {t("contact.subtitle")}
                </h3>
                <p className="mb-8 text-gray-300">{t("contact.description")}</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-blue-400" />
                    <span>Calle Innovación 123, Ciudad Tecnológica</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-blue-400" />
                    <span>+34 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-400" />
                    <span>info@techdesign.com</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    {t("contact.subtitle")}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {t("contact.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">{t("footer.copyright")}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function LandingPage() {
  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
}
