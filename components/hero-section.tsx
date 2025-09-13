"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-secondary">Lucia Cruz Quispe</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Licenciada en Marketing y Administración
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-secondary" />
              <span>Magdalena del Mar, Perú</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-pretty leading-relaxed text-muted-foreground">
              "Creatividad, estrategia y gestión para impulsar marcas e ideas."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={scrollToContact}
            >
              Contactar
            </Button>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>lacq1510@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>932 490 018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
