import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Social Media Manager",
    company: "Crea Capital Group SAC",
    period: "2023 – 2025",
    type: "Tiempo Completo",
    description: "Gestión integral de redes sociales y estrategias de marketing digital para múltiples clientes.",
  },
  {
    title: "Practicante de Marketing",
    company: "The Other Company SAC",
    period: "2023",
    type: "Prácticas",
    description: "Desarrollo de campañas publicitarias y análisis de mercado para productos tecnológicos.",
  },
  {
    title: "Encargada del área de Marketing y Publicidad",
    company: "Empresa Independiente",
    period: "2022",
    type: "Freelance",
    description: "Liderazgo completo del área de marketing, desde la estrategia hasta la ejecución de campañas.",
  },
  {
    title: "Practicante de Marketing",
    company: "Bits & Systems Solutions S.A.C",
    period: "2021 – 2022",
    type: "Prácticas",
    description: "Apoyo en estrategias de contenido digital y gestión de redes sociales corporativas.",
  },
  {
    title: "Atención al Cliente",
    company: "Impulsa A365, Fortel, T-Comunica",
    period: "2016 – 2020",
    type: "Tiempo Completo",
    description:
      "Experiencia en atención al cliente y resolución de problemas en múltiples empresas del sector telecomunicaciones.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Experiencia Profesional</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-secondary font-medium">
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
