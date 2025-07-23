
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Eye,
  Users,
  MapPin,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react'
import Link from 'next/link'

export default function PrevencionPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Módulo 2
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              Prevención de Incendios
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Estrategias de Prevención y Factores de Riesgo
          </h1>
          
          <p className="text-lg text-gray-600">
            Conjunto de medidas, acciones y normas previas a la ocurrencia, tendientes a evitar 
            o minimizar la incidencia destructiva de los incendios forestales.
          </p>
        </div>

        {/* Componentes de Prevención */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Componentes de la Prevención</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Planificación</h4>
                  <p className="text-sm text-blue-800">
                    Desarrollo de estrategias y planes de acción preventiva basados en análisis de riesgo.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Organización</h4>
                  <p className="text-sm text-green-800">
                    Estructuración eficiente de recursos humanos y materiales para respuesta rápida.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Educación</h4>
                  <p className="text-sm text-orange-800">
                    Capacitación y concientización de la población sobre prevención y detección temprana.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Ingeniería</h4>
                  <p className="text-sm text-purple-800">
                    Mejoramiento de cortafuegos, caminos, fuentes de agua y líneas de control.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medidas Preventivas */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Medidas Preventivas Principales</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  Cortafuegos
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Definición:</strong> Franjas de terreno desprovistas de vegetación combustible.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Función:</strong> Interrumpir la continuidad del combustible forestal.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Tipos:</strong> Naturales (ríos, rocas) y artificiales (construidos).
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Clave:</strong> Mantenimiento periódico para conservar efectividad.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Eye className="h-5 w-5 text-blue-600 mr-2" />
                  Fuentes de Agua
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">N</span>
                    </div>
                    <p className="text-sm font-medium">Naturales</p>
                    <p className="text-xs text-gray-600">Ríos, lagos, arroyos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">A</span>
                    </div>
                    <p className="text-sm font-medium">Artificiales</p>
                    <p className="text-xs text-gray-600">Tanques, represas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-sm font-medium">Accesibles</p>
                    <p className="text-xs text-gray-600">Fácil acceso para equipos</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Factores de Riesgo */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Factores de Riesgo Críticos</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">Factores Climáticos</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• <strong>Sequías:</strong> Períodos prolongados sin lluvia</li>
                    <li>• <strong>Vientos:</strong> Facilitan propagación y avivamiento</li>
                    <li>• <strong>Temperatura:</strong> Altas temperaturas favorecen ignición</li>
                    <li>• <strong>Humedad relativa:</strong> Baja humedad aumenta inflamabilidad</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900 mb-2">Factores Topográficos</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• <strong>Pendientes:</strong> Terrenos inclinados facilitan propagación</li>
                    <li>• <strong>Orientación:</strong> Laderas expuestas al sol más vulnerables</li>
                    <li>• <strong>Altitud:</strong> Comportamientos diferentes según elevación</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-900 mb-2">Factores Humanos</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• <strong>Negligencia:</strong> Fogatas mal apagadas, cigarrillos</li>
                    <li>• <strong>Actividades agrícolas:</strong> Quemas descontroladas</li>
                    <li>• <strong>Vandalismo:</strong> Incendios intencionales</li>
                    <li>• <strong>Accidentes:</strong> Líneas eléctricas, vehículos</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-2">Factores de Combustible</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• <strong>Carga:</strong> Cantidad de material combustible</li>
                    <li>• <strong>Continuidad:</strong> Conexión facilita propagación</li>
                    <li>• <strong>Humedad:</strong> Contenido de agua en vegetación</li>
                    <li>• <strong>Tipo:</strong> Diferentes especies, distinta inflamabilidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Educación Comunitaria */}
        <Card className="mb-8 bg-white/80">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Educación Comunitaria</CardTitle>
            </div>
            <CardDescription>
              Capacitación dirigida a diferentes grupos de la comunidad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Campesinos Rurales</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Quemas controladas</li>
                  <li>• Vigilancia temprana</li>
                  <li>• Protección de propiedades</li>
                </ul>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Comunidades Forestales</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Manejo de recursos</li>
                  <li>• Reporte inmediato</li>
                  <li>• Evacuación segura</li>
                </ul>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-orange-900 mb-2">Visitantes/Turistas</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Normas básicas</li>
                  <li>• Prevención negligencia</li>
                  <li>• Comportamiento responsable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Points for Rural Communities */}
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Puntos Clave para Campesinos</h4>
                <div className="grid md:grid-cols-2 gap-4 text-green-800">
                  <div>
                    <p className="text-sm mb-2"><strong>Prevención diaria:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Limpiar vegetación seca cerca de estructuras</li>
                      <li>• Planificar cuidadosamente las quemas controladas</li>
                      <li>• Ubicar combustibles en lugares seguros</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm mb-2"><strong>Detección temprana:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Observar señales: humo, olor a quemado</li>
                      <li>• Notar comportamiento animal (huida)</li>
                      <li>• Reportar inmediatamente a autoridades</li>
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
            <Link href="/guia/conceptos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior: Conceptos
            </Link>
          </Button>
          
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/guia/control">
              Siguiente: Control
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
