
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Droplets,
  Wind,
  Shovel,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Zap,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function ControlPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="text-red-600 border-red-200">
              Módulo 3
            </Badge>
            <Badge className="bg-red-100 text-red-800">
              Control y Combate
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Métodos de Control y Técnicas de Combate
          </h1>
          
          <p className="text-lg text-gray-600">
            Estrategias para aislar el fuego en un área determinada mediante líneas que impidan 
            su propagación, utilizando principios científicos de extinción.
          </p>
        </div>

        {/* Principios de Extinción */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Principios de Extinción</CardTitle>
            </div>
            <CardDescription>
              Tres métodos fundamentales para extinguir incendios forestales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Enfriamiento</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Método:</strong> Reducir temperatura por debajo del punto de ignición</p>
                  <p><strong>Agente:</strong> Agua (principal)</p>
                  <p><strong>Mecanismo:</strong> Absorbe calor al evaporarse</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Wind className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Sofocación</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Método:</strong> Eliminar o reducir oxígeno disponible</p>
                  <p><strong>Agentes:</strong> Vapor, tierra, arena, espuma</p>
                  <p><strong>Límite:</strong> Requiere 16% mínimo de oxígeno</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Shovel className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Remoción</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Método:</strong> Eliminar material combustible</p>
                  <p><strong>Técnicas:</strong> Cortafuegos, contrafuegos</p>
                  <p><strong>Estrategia:</strong> Crear barreras sin combustible</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Técnicas de Combate */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Técnicas de Combate</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <Target className="h-5 w-5 text-green-600 mr-2" />
                    Ataque Directo
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-green-800">
                      <strong>Descripción:</strong> Aplicación de agua o agentes extintores directamente sobre las llamas.
                    </p>
                    <div>
                      <p className="text-green-800 font-medium mb-1">Ventajas:</p>
                      <ul className="text-green-700 space-y-1">
                        <li>• Rápido y efectivo en fuegos pequeños</li>
                        <li>• Control inmediato del perímetro</li>
                        <li>• Uso eficiente de recursos</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-green-800 font-medium mb-1">Limitaciones:</p>
                      <ul className="text-green-700 space-y-1">
                        <li>• Peligroso en fuegos intensos</li>
                        <li>• Requiere proximidad al fuego</li>
                        <li>• Depende de disponibilidad de agua</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    Ataque Indirecto
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-blue-800">
                      <strong>Descripción:</strong> Construcción de líneas de control alejadas del fuego.
                    </p>
                    <div>
                      <p className="text-blue-800 font-medium mb-1">Ventajas:</p>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Más seguro para el personal</li>
                        <li>• Permite mejor planificación</li>
                        <li>• Efectivo en fuegos grandes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-800 font-medium mb-1">Técnicas:</p>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Cortafuegos</li>
                        <li>• Contrafuegos controlados</li>
                        <li>• Uso de barreras naturales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contrafuego */}
              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  Contrafuego - Técnica Avanzada
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-red-800 text-sm mb-2">
                      <strong>Definición:</strong> Fuego iniciado intencionalmente para eliminar combustible.
                    </p>
                    <p className="text-red-800 text-sm">
                      <strong>Propósito:</strong> Crear zona quemada que detenga el avance del incendio principal.
                    </p>
                  </div>
                  <div>
                    <p className="text-red-800 text-sm mb-2">
                      <strong>Riesgos:</strong> Puede salirse de control si no se maneja correctamente.
                    </p>
                    <p className="text-red-800 text-sm">
                      <strong>Requisitos:</strong> Personal experimentado y condiciones meteorológicas favorables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Herramientas y Equipos */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Shovel className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Herramientas y Equipos</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-center">Herramientas Manuales</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Palas</p>
                    <p className="text-sm text-gray-600">Construcción de líneas, sofocación con tierra</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Hachas</p>
                    <p className="text-sm text-gray-600">Corte de vegetación, creación de cortafuegos</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Machetes</p>
                    <p className="text-sm text-gray-600">Limpieza de vegetación baja</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Rastrillos</p>
                    <p className="text-sm text-gray-600">Remoción de hojarasca y material fino</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-center">Equipos de Agua</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Mangueras</p>
                    <p className="text-sm text-blue-800">Aplicación directa de agua</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Bombas Portátiles</p>
                    <p className="text-sm text-blue-800">Extracción de fuentes naturales</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Mochilas Aspersoras</p>
                    <p className="text-sm text-blue-800">Aplicación en áreas inaccesibles</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Tanques Móviles</p>
                    <p className="text-sm text-blue-800">Transporte a zonas sin fuentes</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-center">Comunicación</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">Radios</p>
                    <p className="text-sm text-green-800">Coordinación entre equipos</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">Señales Visuales</p>
                    <p className="text-sm text-green-800">Banderas, espejos</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">Silbatos</p>
                    <p className="text-sm text-green-800">Alertas de emergencia</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estrategia para Bomberos */}
        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Target className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-3">Estrategia de Ataque para Bomberos</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-orange-800 font-medium mb-2">Prioridades:</p>
                    <ol className="text-sm text-orange-700 space-y-1">
                      <li>1. Protección de vidas</li>
                      <li>2. Protección de propiedades</li>
                      <li>3. Protección de recursos naturales</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-sm text-orange-800 font-medium mb-2">Evaluación:</p>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Tamaño del incendio</li>
                      <li>• Tipo de combustible</li>
                      <li>• Condiciones meteorológicas</li>
                      <li>• Recursos disponibles</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-orange-800 font-medium mb-2">Monitoreo:</p>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Comportamiento del fuego</li>
                      <li>• Efectividad de acciones</li>
                      <li>• Condiciones de seguridad</li>
                      <li>• Necesidades adicionales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/guia/prevencion">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior: Prevención
            </Link>
          </Button>
          
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/guia/seguridad">
              Siguiente: Seguridad
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
