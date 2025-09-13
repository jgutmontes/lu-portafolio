import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Camera, Users, Clock, Monitor, BarChart3 } from "lucide-react"

const skillCategories = [
  {
    title: "Marketing Digital",
    icon: BarChart3,
    skills: ["Redes Sociales", "Campañas Digitales", "SEO/SEM", "Email Marketing"],
  },
  {
    title: "Diseño y Creatividad",
    icon: Palette,
    skills: ["Branding", "Diseño Gráfico", "Creación de Contenido", "Identidad Visual"],
  },
  {
    title: "Herramientas Técnicas",
    icon: Monitor,
    skills: ["Canva", "Photoshop", "WordPress", "CapCut"],
  },
  {
    title: "Gestión y CRM",
    icon: Users,
    skills: ["Odoo", "CRM", "Microsoft Office", "MailRelay"],
  },
  {
    title: "Habilidades Blandas",
    icon: Clock,
    skills: ["Gestión del Tiempo", "Trabajo en Equipo", "Liderazgo", "Adaptabilidad"],
  },
  {
    title: "Contenido Multimedia",
    icon: Camera,
    skills: ["Fotografía", "Video Editing", "Storytelling", "Content Strategy"],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Habilidades y Conocimientos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competencias técnicas y habilidades blandas desarrolladas a través de mi experiencia profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
