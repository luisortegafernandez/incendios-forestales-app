
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Flame, 
  Shield, 
  Target, 
  BookOpen, 
  Users, 
  Zap,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function GuiaPage() {
  const modules = [
    {
      id: 'conceptos',
      title: 'Conceptos Fundamentales',
      description: 'Teoría del fuego, triángulo y tetraedro, mecanismos de propagación',
      icon: Flame,
      color: 'orange',
      items: ['Triángulo del fuego', 'Tipos de incendios', 'Propagación', 'Efectos destructivos'],
      href: '/guia/conceptos'
    },
    {
      id: 'prevencion',
      title: 'Prevención',
      description: 'Medidas preventivas, factores de riesgo, educación comunitaria',
      icon: Shield,
      color: 'blue',
      items: ['Cortafuegos', 'Factores de riesgo', 'Educación', 'Vigilancia'],
      href: '/guia/prevencion'
    },
    {
      id: 'control',
      title: 'Control y Combate',
      description: 'Métodos de control, técnicas de combate, herramientas y equipos',
      icon: Target,
      color: 'red',
      items: ['Métodos extinción', 'Ataque directo/indirecto', 'Herramientas', 'Estrategias'],
      href: '/guia/control'
    },
    {
      id: 'seguridad',
      title: 'Procedimientos de Seguridad',
      description: 'Protocolos de seguridad, equipos de protección, emergencias',
      icon: Users,
      color: 'green',
      items: ['Evaluación riesgos', 'Equipo protección', 'Protocolos', 'Primeros auxilios'],
      href: '/guia/seguridad'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'text-orange-600 bg-orange-100 border-orange-200 hover:bg-orange-200',
      blue: 'text-blue-600 bg-blue-100 border-blue-200 hover:bg-blue-200',
      red: 'text-red-600 bg-red-100 border-red-200 hover:bg-red-200',
      green: 'text-green-600 bg-green-100 border-green-200 hover:bg-green-200'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.orange
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              Guía Interactiva
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Capacitación Especializada en
              <span className="text-orange-600 block">Incendios Forestales</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aprende los fundamentos, técnicas y procedimientos esenciales para la prevención y control 
              efectivo de incendios forestales. Contenido estructurado y práctico para profesionales.
            </p>

            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>4 Módulos Especializados</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Play className="h-4 w-4 text-blue-600" />
                <span>Contenido Interactivo</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Zap className="h-4 w-4 text-orange-600" />
                <span>Aplicación Práctica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <Card 
                  key={module.id} 
                  className="group hover:shadow-xl transition-all duration-300 bg-white/80 hover:bg-white border-2 hover:border-gray-200"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${getColorClasses(module.color)} transition-colors`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <Badge variant="outline" className="text-gray-500">
                        Módulo {index + 1}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {module.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full group-hover:bg-orange-600 transition-colors">
                      <Link href={module.href}>
                        Explorar Módulo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Tools Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Herramientas de Apoyo
            </h2>
            <p className="text-lg text-gray-600">
              Recursos adicionales para reforzar el aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white/80">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Simulador del Fuego</CardTitle>
                <CardDescription>
                  Visualiza el comportamiento del fuego según diferentes condiciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white/80">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Evaluaciones</CardTitle>
                <CardDescription>
                  Cuestionarios interactivos para evaluar conocimientos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white/80">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Checklists</CardTitle>
                <CardDescription>
                  Listas de verificación para operaciones de campo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Próximamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para Comenzar?
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Inicia con los conceptos fundamentales o explora la presentación completa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/guia/conceptos">
                <Flame className="mr-2 h-5 w-5" />
                Comenzar con Conceptos
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/presentacion">
                <BookOpen className="mr-2 h-5 w-5" />
                Ver Presentación
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
