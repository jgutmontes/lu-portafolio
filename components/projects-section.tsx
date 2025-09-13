"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Diseños Varios Crea",
    url: "https://www.canva.com/design/DAGy4y4ciLc/K3H0Xb5JVWulolXohzwB4w/view?embed",
  },
  {
    title: "Navidad 2023",
    url: "https://www.canva.com/design/DAF3hZ9iXDM/U2afDvE616MOJJCa90_80Q/view?embed",
  },
  {
    title: "Diseño Extra (préstamos)",
    url: "https://www.canva.com/design/DAF5yDp30NA/stw4HqKgcRlAA-Wd0A8FiQ/view?embed",
  },
  {
    title: "Diseños Varios Extra",
    url: "https://www.canva.com/design/DAGy47OH94Q/Ac49TudEYsDQuTfrnQj_cg/view?embed",
  },
  {
    title: "Video Año Nuevo 2023",
    url: "https://www.canva.com/design/DAF4LnY4S2Y/ZDffKQcE8ObON_cFV5RnRA/view?embed",
  },
  {
    title: "Diseño Varios Extra y Crea",
    url: "https://www.canva.com/design/DAGB--n0VRM/6hYfoQP3d_jniMbboCicRQ/view?embed",
  },
  {
    title: "Diseño Crea Ig (inversiones)",
    url: "https://www.canva.com/design/DAGOCVe1Bx4/tLQuApniDYMAzLu9ivKgYQ/view?embed",
  },
  {
    title: "Nueva Dirección",
    url: "https://www.canva.com/design/DAF6z3XOw5Q/Pt9ze4ZVbfnBGwktu0UnvQ/view?embed",
  },
  {
    title: "Gráfica Inversión",
    url: "https://www.canva.com/design/DAGy44ON7M0/JeSYedWh_qq4QN9VR7hhog/view?embed",
  },
  {
    title: "Diseño Crea Capital (IG)",
    url: "https://www.canva.com/design/DAGNXwQkfrM/XTNTfW-o2yb7S6WPJD1RXg/view?embed",
  },
  {
    title: "Crea Capital Video IG",
    url: "https://www.canva.com/design/DAGBeNQkpWQ/zDzunkH4TrLM9PT5knyQ6Q/view?embed",
  },
  {
    title: "Diseño Pasos para invertir",
    url: "https://www.canva.com/design/DAGOEYlpr-s/szzx7I_R4h9E9DgjcPHFdA/view?embed",
  },
];

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
