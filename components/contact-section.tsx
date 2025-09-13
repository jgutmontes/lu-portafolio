import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Magdalena del Mar, Perú",
    href: null,
  },
  {
    icon: Mail,
    label: "Correo",
    value: "lacq1510@gmail.com",
    href: "mailto:lacq1510@gmail.com",
  },
  {
    icon: Phone,
    label: "Celular",
    value: "932 490 018",
    href: "tel:+51932490018",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Lucia Cruz",
    href: "https://www.linkedin.com/in/lucia-andrea-cruz-quispe-0a892a148?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            const content = (
              <Card
                key={index}
                className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group h-full"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      <p className="text-muted-foreground group-hover:text-secondary transition-colors">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )

            return info.href ? (
              <a key={index} href={info.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
            <a href="mailto:lacq1510@gmail.com">Enviar Mensaje</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
