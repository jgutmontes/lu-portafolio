"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Campaña Digital Corporativa",
    url: "https://www.canva.com/design/DAGoqC6upo4/9mN5Uv0-nqd7URC4pvgXBA/view?embed",
  },
  {
    title: "Estrategia de Branding",
    url: "https://www.canva.com/design/DAF2VE_8V98/AjT7yGcOSQ5K-1pvL1_k6g/view?embed",
  },
  {
    title: "Campaña Redes Sociales",
    url: "https://www.canva.com/design/DAGWeZdsmV8/_CpIrl1MjX1WJWh6QFMztg/view?embed",
  },
  {
    title: "Diseño Publicitario",
    url: "https://www.canva.com/design/DAGFVqzick4/lEk2SUNXuqsqyfcBMDyB2w/view?embed",
  },
  {
    title: "Contenido Multimedia",
    url: "https://www.canva.com/design/DAF97HM-zbY/7fq4sMpCH_z4Cwku7xogDw/view?embed",
  },
  {
    title: "Campaña de Marketing",
    url: "https://www.canva.com/design/DAGBeNQkpWQ/zDzunkH4TrLM9PT5knyQ6Q/view?embed",
  },
  {
    title: "Identidad Visual",
    url: "https://www.canva.com/design/DAF6z3XOw5Q/Pt9ze4ZVbfnBGwktu0UnvQ/view?embed",
  },
  {
    title: "Estrategia Digital",
    url: "https://www.canva.com/design/DAGZKlxyg8c/VlMylnN7tndbPCBZrMeqQ/view?embed",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más representativos en marketing digital, branding y gestión de campañas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                    <iframe
                      src={project.url}
                      className="w-full h-full border-none"
                      title={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors rounded-t-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ExternalLink className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
