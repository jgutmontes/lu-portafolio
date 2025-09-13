import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Sobre mí</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Egresada en Administración y Marketing con experiencia en estrategias de contenido digital, gestión de
              redes sociales y desarrollo de campañas publicitarias.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Proactiva, orientada a resultados y con capacidad para adaptarse rápidamente a diversos entornos
              laborales. Mi pasión por el marketing digital y la gestión estratégica me impulsa a crear soluciones
              innovadoras que generen impacto real en las marcas.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Educación</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <strong>Licenciada en Administración y Marketing</strong>
                      </p>
                      <p>UPC (2017 – 2024)</p>
                      <p>
                        <strong>Inglés</strong>
                      </p>
                      <p>Británico (2016 – 2019)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Voluntariados</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <strong>KP Wasi:</strong> Gestión de publicaciones en redes para campañas de albergue animal
                      </p>
                      <p>
                        <strong>CAM UPC:</strong> Organización del Congreso Anual de Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
