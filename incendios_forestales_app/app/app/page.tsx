
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, BookOpen, Presentation, Users, Shield, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Incendios Forestales</span>
          </div>
          <Badge variant="outline" className="text-orange-600">
            USAID/OFDA
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              Capacitación Profesional
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Prevención y Control de
              <span className="text-orange-600 block">Incendios Forestales</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guía completa e interactiva basada en el curso de USAID/OFDA para capacitación de 
              <strong className="text-orange-600"> bomberos</strong> y 
              <strong className="text-orange-600"> campesinos rurales</strong> en operaciones de emergencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/guia">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explorar Guía Interactiva
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-orange-200 hover:bg-orange-50">
                <Link href="/presentacion">
                  <Presentation className="mr-2 h-5 w-5" />
                  Ver Presentación
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Capacitación Integral Especializada
            </h2>
            <p className="text-lg text-gray-600">
              Contenido estructurado y práctico para profesionales de emergencias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white/80">
              <CardHeader>
                <Target className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Audiencia Específica</CardTitle>
                <CardDescription>
                  Diseñado para bomberos profesionales y campesinos rurales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Personal de emergencias</li>
                  <li>• Comunidades rurales</li>
                  <li>• Brigadistas forestales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/80">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Guía Interactiva</CardTitle>
                <CardDescription>
                  Módulos prácticos con simuladores y evaluaciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Conceptos fundamentales</li>
                  <li>• Técnicas de prevención</li>
                  <li>• Métodos de control</li>
                  <li>• Procedimientos de seguridad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/80">
              <CardHeader>
                <Presentation className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Presentación Didáctica</CardTitle>
                <CardDescription>
                  20 diapositivas para sesiones de capacitación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Secuencia estructurada</li>
                  <li>• Elementos visuales</li>
                  <li>• Casos prácticos</li>
                  <li>• Ejercicios grupales</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Contenido Basado en Estándares Internacionales
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Procedimientos de Seguridad</h4>
                    <p className="text-gray-600">Protocolos críticos para protección del personal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Flame className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Comportamiento del Fuego</h4>
                    <p className="text-gray-600">Teoría fundamental y mecanismos de propagación</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Trabajo en Equipo</h4>
                    <p className="text-gray-600">Coordinación efectiva en operaciones de emergencia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/guia">
                    Comenzar Capacitación
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🔥</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">
                    85 páginas
                  </Badge>
                  <span className="text-sm text-gray-600">de contenido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            Inicia tu Capacitación Ahora
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Accede a conocimientos especializados que pueden salvar vidas y proteger recursos naturales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/guia">
                <BookOpen className="mr-2 h-5 w-5" />
                Guía Interactiva
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/presentacion">
                <Presentation className="mr-2 h-5 w-5" />
                Presentación
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Flame className="h-6 w-6 text-orange-500" />
              <span className="font-semibold">Incendios Forestales - USAID</span>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Material educativo basado en curso USAID/OFDA</p>
              <p className="mt-1">International Resources Group (IRG) - 2006</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
