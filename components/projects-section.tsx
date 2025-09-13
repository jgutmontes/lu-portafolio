"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"


const projects = [
  { title: "Diseños Varios Crea", url: "https://www.canva.com/design/DAGy4y4ciLc/K3H0Xb5JVWulolXohzwB4w/view?embed" },
  { title: "Navidad 2023", url: "https://www.canva.com/design/DAF3hZ9iXDM/U2afDvE616MOJJCa90_80Q/view?embed" },
  { title: "Diseño Extra (préstamos)", url: "https://www.canva.com/design/DAF5yDp30NA/stw4HqKgcRlAA-Wd0A8FiQ/view?embed" },
  { title: "Diseños Varios Extra", url: "https://www.canva.com/design/DAGy47OH94Q/Ac49TudEYsDQuTfrnQj_cg/view?embed" },
  { title: "Video Año Nuevo 2023", url: "https://www.canva.com/design/DAF4LnY4S2Y/ZDffKQcE8ObON_cFV5RnRA/view?embed" },
  { title: "Diseño Varios Extra y Crea", url: "https://www.canva.com/design/DAGB--n0VRM/6hYfoQP3d_jniMbboCicRQ/view?embed" },
  { title: "Diseño Crea Ig (inversiones)", url: "https://www.canva.com/design/DAGOCVe1Bx4/tLQuApniDYMAzLu9ivKgYQ/view?embed" },
  { title: "Nueva Dirección", url: "https://www.canva.com/design/DAF6z3XOw5Q/Pt9ze4ZVbfnBGwktu0UnvQ/view?embed" },
  { title: "Gráfica Inversión", url: "https://www.canva.com/design/DAGy44ON7M0/JeSYedWh_qq4QN9VR7hhog/view?embed" },
  { title: "Diseño Crea Capital (IG)", url: "https://www.canva.com/design/DAGNXwQkfrM/XTNTfW-o2yb7S6WPJD1RXg/view?embed" },
  { title: "Crea Capital Video IG", url: "https://www.canva.com/design/DAGBeNQkpWQ/zDzunkH4TrLM9PT5knyQ6Q/view?embed" },
  { title: "Diseño Pasos para invertir", url: "https://www.canva.com/design/DAGOEYlpr-s/szzx7I_R4h9E9DgjcPHFdA/view?embed" },
  { title: "TocPos (Diseño tarjeta)", url: "https://www.canva.com/design/DAFd254ANHI/view?embed" },
  { title: "Educación Dinámica", url: "https://www.canva.com/design/DAFamPqOG5A/view?embed" },
  { title: "Campaña IG", url: "https://www.canva.com/design/DAFeli6I9gM/view?embed" },
  { title: "Campaña TocPos (FB)", url: "https://www.canva.com/design/DAFdr3PU5rM/view?embed" },
  { title: "Post IG", url: "https://www.canva.com/design/DAFZ1dGN0gQ/view?embed" },
  { title: "Implementación Odoo", url: "https://www.canva.com/design/DAFXyH-CDcw/view?embed" },
  { title: "Video Conoce sobre Odoo", url: "https://www.canva.com/design/DAFbP8W8HXc/view?embed" },
  { title: "Control de tus campañas", url: "https://www.canva.com/design/DAFXkz_8XOo/view?embed" },
  { title: "Brochure TocPos", url: "https://www.canva.com/design/DAFfuE8TH4s/view?embed" },
  { title: "Tarjeta Módulos Odoo", url: "https://www.canva.com/design/DAFY4gUjnj0/view?embed" },
  { title: "Flyer Edutec y Odoo", url: "https://www.canva.com/design/DAFb0BJQQ4c/view?embed" },
  { title: "¿Qué es Odoo?", url: "https://www.canva.com/design/DAFcwlCtd-8/view?embed" },
  { title: "Flyer Edutec", url: "https://www.canva.com/design/DAFai2QWpcY/view?embed" },
  { title: "Tiktok Punto de Venta", url: "https://www.canva.com/design/DAFhZj50Otc/view?embed" },
  { title: "Flyer Ventas", url: "https://www.canva.com/design/DAFXg80Z7Ok/view?embed" },
  { title: "Flyer ERP", url: "https://www.canva.com/design/DAFXd6SShrc/view?embed" },
  { title: "Video Día de la Madre", url: "https://www.canva.com/design/DAFiWwhksBQ/view?embed" },
  { title: "Flyer CRM", url: "https://www.canva.com/design/DAFXdzL4WX8/view?embed" },
  { title: "Video TocPos", url: "https://www.canva.com/design/DAFdyT_z61M/view?embed" },
  { title: "Video TocPos Pucallpa", url: "https://www.canva.com/design/DAFfPpXDQHY/view?embed" },
  { title: "Día del trabajador", url: "https://www.canva.com/design/DAFhsT10CaM/view?embed" },
  { title: "Flyer Planificación", url: "https://www.canva.com/design/DAFYHNZlKp0/view?embed" },
  { title: "Tarjetas presentación TocPos", url: "https://www.canva.com/design/DAFgo-RdjTU/view?embed" },
  { title: "Tarjeta San Valentín", url: "https://www.canva.com/design/DAFZYIIKfAQ/view?embed" },
  { title: "Video TocPos División cuentas", url: "https://www.canva.com/design/DAFmVdZYJAo/view?embed" },
  { title: "Mailing Edutec", url: "https://www.canva.com/design/DAFbKgLbHAc/view?embed" },
  { title: "Flyer Software completo", url: "https://www.canva.com/design/DAFZR46DQos/view?embed" },
  { title: "Flyer Recursos empresariales", url: "https://www.canva.com/design/DAFYr0NQNLM/view?embed" },
  { title: "Video funcionamiento Toc", url: "https://www.canva.com/design/DAFlhd3updw/view?embed" },
  { title: "Flyer Edutec", url: "https://www.canva.com/design/DAFddatbnBo/view?embed" },
  { title: "Video Odoo TikTok", url: "https://www.canva.com/design/DAFczNIZqwc/view?embed" },
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
             <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
